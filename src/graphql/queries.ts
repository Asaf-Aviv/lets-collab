import { gql } from 'apollo-boost'

// Current User
export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    currentUser {
      id
      username
      avatar
      friendRequestsCount
      notificationsCount
    }
  }
`

export const GET_CURRENT_USER_FRIENDS = gql`
  query CurrentUserFriends {
    currentUser {
      id
      friends {
        id
        username
        avatar
        bio
        title
        country
        isSelf
        isFriend
        canRequestFriendship
      }
    }
  }
`

export const GET_CURRENT_USER_NOTIFICATIONS = gql`
  query CurrentUserNotifications {
    currentUser {
      id
      notifications {
        id
        type
        message
        title
        url
        isRead
        creationDate
      }
    }
  }
`

export const GET_CURRENT_FRIEND_REQUESTS = gql`
  query CurrentUserFriendRequests {
    currentUser {
      id
      friendRequests {
        id
        username
        avatar
      }
    }
  }
`

export const SEARCH_FRIENDS = gql`
  query SearchFriends($input: SearchUsersInput!) {
    searchFriends(input: $input) {
      id
      username
      avatar
    }
  }
`

export const SEARCH_USERS = gql`
  query SearchUsers($input: SearchUsersInput!) {
    searchUsers(input: $input) {
      id
      username
      avatar
    }
  }
`

export const GET_CURRENT_USER_INFO = gql`
  query GetCurrentUserInfo {
    currentUser {
      id
      firstName
      lastName
      title
      country
      bio
      github
      twitter
      linkedin
    }
  }
`

export const GET_CURRENT_USER_CONVERSATIONS_PREVIEW = gql`
  query CurrentUserConversationsPreview {
    currentUser {
      id
      conversationsPreview {
        userId
        username
        avatar
        content
      }
    }
  }
`

export const GET_CURRENT_USER_CONVERSATION = gql`
  query CurrentUserConversation($userId: ID!, $offset: Int!, $limit: Int!) {
    getConversation(userId: $userId, offset: $offset, limit: $limit) {
      hasNextPage
      messages {
        id
        author {
          id
          username
          avatar
        }
        recipient {
          id
          username
          avatar
        }
        content
        creationDate
        isRead
      }
    }
  }
`

export const GET_CURRENT_USER_COLLABS = gql`
  query GetCurrentUserCollabs {
    currentUser {
      id
      collabs {
        id
        name
      }
    }
  }
`

export const GET_CURRENT_USER_COLLAB_INVITATIONS = gql`
  query GetCurrentUserCollabInvitations {
    currentUser {
      id
      collabInvites {
        id
        name
        owner {
          id
          username
          avatar
        }
      }
    }
  }
`

export const GET_CURRENT_USER_COLLAB_REQUESTS = gql`
  query GetCurrentUserCollabRequests {
    currentUser {
      id
      collabRequests {
        id
        collab {
          id
          name
        }
        member {
          id
          username
          avatar
        }
      }
    }
  }
`

export const GET_CURRENT_USER_TASKS = gql`
  query GetCurrentUserTasks {
    currentUser {
      id
      tasks {
        id
        description
        assignedBy {
          id
          username
        }
        collab {
          id
          name
        }
      }
    }
  }
`

// user
export const GET_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      username
      avatar
      bio
      title
      country
      isSelf
      isFriend
      canRequestFriendship
    }
  }
`

// Collab Post
export const GET_COLLAB_POSTS = gql`
  query CollabPosts($offset: Int!, $limit: Int!) {
    collabPosts(offset: $offset, limit: $limit) {
      hasNextPage
      posts {
        id
        title
        stack
        experience
        hasStarted
        languages
        creationDate
        isNew
        membersCount
        reactionsCount
        commentsCount
        owner {
          id
          username
          avatar
        }
      }
    }
  }
`

export const GET_COLLAB_POSTS_BY_STACK = gql`
  query CollabPostsByStack($stack: String!, $offset: Int!, $limit: Int!) {
    collabPostsByStack(stack: $stack, offset: $offset, limit: $limit) {
      hasNextPage
      posts {
        id
        title
        stack
        experience
        hasStarted
        languages
        creationDate
        isNew
        membersCount
        reactionsCount
        commentsCount
        owner {
          id
          username
          avatar
        }
      }
    }
  }
`

export const ADVANCED_POSTS_SEARCH = gql`
  query AdvancedPostsSearch($input: AdvancedPostsSearchInput!) {
    advancedPostsSearch(input: $input) {
      hasNextPage
      posts {
        id
        title
        stack
        experience
        hasStarted
        languages
        creationDate
        isNew
        membersCount
        reactionsCount
        commentsCount
        owner {
          id
          username
          avatar
        }
      }
    }
  }
`

export const SEARCH_POSTS_BY_TITLE = gql`
  query SearchPostsByTitle($input: SearchPostsInput!) {
    searchPostsByTitle(input: $input) {
      hasNextPage
      posts {
        id
        title
        reactionsCount
        commentsCount
        owner {
          id
          username
          avatar
        }
      }
    }
  }
`

export const GET_COLLAB_POST = gql`
  query GetCollabPost($postId: ID!) {
    collabPost(postId: $postId) {
      id
      name
      title
      description
      isNew
      owner {
        id
        username
        avatar
      }
      collabId
      experience
      stack
      hasStarted
      languages
      members {
        id
        username
        avatar
      }
      acceptsInvites
      isOwner
      isMember
      invitationPending
      requestToJoinPending
      creationDate
      reactions {
        emojiId
        count
        isLiked
      }
    }
  }
`

export const COLLAB_POST_LANGUAGES = gql`
  query CollabPostLanguages {
    languages
  }
`

export const COLLAB_POST_COMMENTS = gql`
  query CollabPostComments($postId: ID!) {
    collabPost(postId: $postId) {
      id
      comments {
        id
        content
        isAuthor
        creationDate
        author {
          id
          username
          avatar
        }
        reactions {
          emojiId
          count
          isLiked
        }
      }
    }
  }
`

// Collab
export const GET_COLLAB = gql`
  query Collab($collabId: ID!) {
    collab(collabId: $collabId) {
      id
      name
      owner {
        id
        username
        avatar
      }
      collabPostId
      acceptsInvites
      isOwner
      pendingInvites {
        id
        username
        avatar
      }
      pendingRequests {
        id
        username
        avatar
      }
    }
  }
`

export const GET_COLLAB_MEMBERS = gql`
  query CollabMembers($collabId: ID!) {
    collab(collabId: $collabId) {
      id
      members {
        id
        username
        bio
        avatar
        title
        country
        isSelf
        canRequestFriendship
        isFriend
      }
    }
  }
`

export const GET_COLLAB_WALL_MESSAGES = gql`
  query CollabWallMessages($input: CollabWallMessagesInput!) {
    collabWallMessages(input: $input) {
      hasNextPage
      messages {
        id
        content
        creationDate
        isAuthor
        author {
          id
          username
          avatar
        }
      }
    }
  }
`

export const GET_COLLAB_DISCUSSIONS = gql`
  query CollabDiscussionThreads($collabId: ID!) {
    collab(collabId: $collabId) {
      id
      discussionThreads {
        id
        title
        creationDate
        author {
          id
          username
          avatar
        }
        commentsCount
        reactionsCount
      }
    }
  }
`

export const GET_COLLAB_DISCUSSION_THREAD = gql`
  query CollabThread($threadId: ID!) {
    thread(threadId: $threadId) {
      id
      title
      content
      creationDate
      author {
        id
        username
        avatar
      }
      reactions {
        emojiId
        count
        isLiked
      }
    }
  }
`

export const GET_COLLAB_DISCUSSION_THREAD_COMMENTS = gql`
  query CollabThreadComments($threadId: ID!) {
    thread(threadId: $threadId) {
      id
      comments {
        id
        content
        creationDate
        isAuthor
        author {
          id
          username
          avatar
        }
        reactions {
          emojiId
          count
          isLiked
        }
      }
    }
  }
`

export const GET_COLLAB_TASK_BOARD = gql`
  query TaskList($collabId: ID!) {
    taskList(collabId: $collabId) {
      taskList {
        id
        name
        order
        tasks {
          id
          description
          order
          commentsCount
          taskListId
          assignee {
            id
            username
            avatar
          }
          assignedBy {
            id
            username
            avatar
          }
          author {
            id
            username
            avatar
          }
        }
      }
    }
  }
`

export const GET_TASK_COMMENTS = gql`
  query TaskComments($taskId: ID!) {
    task(taskId: $taskId) {
      id
      comments {
        id
        content
        author {
          id
          username
          avatar
        }
        reactions {
          emojiId
          count
          isLiked
        }
      }
    }
  }
`

// Chat
export const GET_ONLINE_FRIENDS = gql`
  query OnlineChatFriends {
    onlineChatFriends {
      users {
        user {
          id
          username
          avatar
        }
        status
      }
    }
  }
`
