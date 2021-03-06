import express from 'express'
import helmet from 'helmet'
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'
import { applyMiddleware } from 'graphql-middleware'
import path from 'path'
import { typeDefs } from './graphql/typeDefs'
import { apolloContext, createContext } from './graphql/context/CollabContext'
import { permissions } from './graphql/middleware/permissions'
import { resolvers } from './graphql/resolvers'
import { User } from './db/models/User'
import { decodeToken } from './utils'

export const app = express()

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './build')))
app.use(
  '/static/avatars',
  express.static(path.join(__dirname, './public/avatars')),
)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'))
})

const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs,
    resolvers,
  }),
  permissions,
)

export const apolloServer = new ApolloServer({
  schema,
  context: apolloContext,
  subscriptions: {
    onConnect: async connectionParams => {
      //@ts-ignore
      const { Authorization } = connectionParams

      if (!Authorization) return createContext()

      //@ts-ignore
      const { userId } = await decodeToken(
        Authorization.replace('Bearer ', ''),
      ).catch(() => ({}))

      const user = userId ? await User.findByPk(userId) : null

      return {
        ...createContext(),
        user,
      }
    },
  },
})

apolloServer.applyMiddleware({ app })
