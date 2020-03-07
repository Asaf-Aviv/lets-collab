import { gql } from 'apollo-server-express'

export const collabPostTypeDefs = gql`
  type Query {
    collabPosts: [CollabPost!]!
    collabPost(postId: ID!): CollabPost
  }

  type Mutation {
    createCollabPost(post: CollabPostArgs!): CollabPost!
    deleteCollabPost(postId: ID!): Boolean!
  }

  type CollabPost {
    id: ID!
    name: String!
    title: String!
    owner: User!
    experience: String!
    stack: [String!]!
    hasStarted: Boolean!
    acceptsInvites: Boolean!
    description: String!
    members: [User!]!
    isOwner: Boolean!
    isMember: Boolean!
    invitationPending: Boolean!
    requestToJoinPending: Boolean!
    comments: [CollabPostComment!]!
    pendingInvites: [User!]!
    pendingRequests: [User!]!
  }

  input CollabPostArgs {
    name: String!
    title: String!
    experience: Experience!
    stack: [String!]!
    description: String!
    hasStarted: Boolean!
  }

  enum Experience {
    ALL
    JUNIOR
    JUNIOR_MID
    MID
    MID_SENIOR
    SENIOR
  }
`