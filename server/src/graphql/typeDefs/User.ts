import { gql } from 'apollo-server-express'

export const userTypeDefs = gql`
  scalar Upload

  type Query {
    users: [User!]!
    user(id: ID!): User
    currentUser: CurrentUser
    searchFriends(input: SearchUsersInput!): [User!]!
    searchUsers(input: SearchUsersInput!): [User!]!
  }

  type Mutation {
    signUp(credentials: SignUpArgs!): AuthPayload!
    login(credentials: LoginArgs!): AuthPayload!
    deleteUser: Boolean!
    acceptCollabInvitation(collabId: ID!): ID!
    declineCollabInvitation(collabId: ID!): ID!
    updateUserInfo(input: UpdateUserInfoInput): CurrentUser!
    sendFriendRequest(friendId: ID!): User!
    acceptFriendRequest(friendId: ID!): User!
    declineFriendRequest(senderId: ID!): User!
    removeFriend(friendId: ID!): User!
    uploadAvatar(avatar: Upload!): CurrentUser!
  }

  type Subscription {
    newFriendRequest: NewFriendRequestPayload!
  }

  type NewFriendRequestPayload {
    user: User!
  }

  type CurrentUser {
    id: ID!
    username: String!
    email: String!
    avatar: String
    firstName: String!
    lastName: String!
    "the user's engineering title"
    title: String!
    country: String
    bio: String!
    github: String!
    twitter: String!
    linkedin: String!
    friendRequests: [User!]!
    friendRequestsCount: Int!
    notificationsCount: Int!
    notifications: [Notification!]!
    friends: [User!]!
    collabs: [Collab!]!
    collabInvites: [Collab!]!
    collabRequests: [CollabRequest!]!
    tasks: [Task!]!
    conversationsPreview: [PrivateMessagePreview!]!
  }

  type User {
    id: ID!
    username: String!
    firstName: String!
    lastName: String!
    "the user's engineering title"
    title: String!
    isFriend: Boolean!
    country: String
    canRequestFriendship: Boolean!
    avatar: String
    bio: String!
    isSelf: Boolean!
    collabs: [Collab!]!
  }

  input SearchUsersInput {
    username: String!
  }

  input UpdateUserInfoInput {
    firstName: String!
    lastName: String!
    title: String!
    country: String
    bio: String!
    github: String!
    twitter: String!
    linkedin: String!
  }

  type CollabRequest {
    id: ID!
    collab: Collab!
    member: User!
  }

  type AuthPayload {
    token: String!
  }

  input SignUpArgs {
    username: String!
    email: String!
    password: String!
  }

  input LoginArgs {
    email: String!
    password: String!
  }
`
