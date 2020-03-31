require('dotenv').config()
import { Sequelize } from 'sequelize'
import { User } from './db/models/User'
import sequelize from './db/sequelize'
import { app } from './app'
import { Collab } from './db/models/Collab'
import { CollabMember } from './db/models/CollabMember'
import { createLoaders } from './graphql/loaders/loaders'
import { Stack } from './db/models/Stack'
import { CollabPostReaction } from './db/models/CollabPostReaction'
import { CollabPost } from './db/models/CollabPost'

const PORT = 5555

sequelize
  .authenticate()
  .then(async () => {
    // await sequelize.sync({ force: true })
    console.log('Connected to postgres')
    // CollabPostReaction.findAll({ include: [CollabPost], raw: true }).then(
    // console.log,
    // )
    // const s = await Stack.create({ name: 'react' })
    // const s1 = await Stack.bulkCreate(
    //   [{ name: 'React' }, { name: 'JavaScript' }],
    //   {
    //     updateOnDuplicate: ['name'],
    //   }
    // )
    //   .then(values => values.map(v => v.get()))
    //   .then(console.log)
    //   .catch(console.log)

    // const u = await User.findOne({
    //   raw: true,
    //   nest: true,
    //   where: {
    //     username: 'AsafAviv',
    //   },
    //   include: [
    //     {
    //       model: Collab,
    //       include: [
    //         {
    //           model: CollabMember,
    //           attributes: ['member_id'],
    //           include: [User],
    //         },
    //       ],
    //     },
    //   ],
    // })

    // console.log(JSON.stringify(u, null, 4))

    app.listen(PORT, () => console.info(`Server running on port ${PORT}`))
  })
  .catch(console.log)
