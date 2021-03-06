import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GQLCollab } from '../db/models/Collab';
import { GQLCollabDiscussionThreadComment } from '../db/models/CollabDiscussionThreadComment';
import { GQLCollabDiscussionThread } from '../db/models/CollabDiscussionThread';
import { GQLCollabPost } from '../db/models/CollabPost';
import { GQLCollabPostComment } from '../db/models/CollabPostComment';
import { GQLCollabTask } from '../db/models/CollabTask';
import { GQLCollabTaskComment } from '../db/models/CollabTaskComment';
import { GQLCollabTaskList } from '../db/models/CollabTaskList';
import { GQLUser } from '../db/models/User';
import { GQLPrivateMessage } from '../db/models/PrivateMessage';
import { GQLWallMessage } from '../db/models/CollabWallMessage';
import { CollabContext, CollabContextWithUser } from './context/CollabContext';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  advancedPostsSearch: CollabPostsSearchResultsPayload;
  collab?: Maybe<Collab>;
  collabPost?: Maybe<CollabPost>;
  collabPosts: CollabPostsPayload;
  collabPostsByStack: CollabPostsSearchResultsPayload;
  collabWallMessages: CollabWallMessagesPayload;
  collabs: Array<Collab>;
  currentUser?: Maybe<CurrentUser>;
  getConversation: GetConversationPayload;
  languages: Array<Scalars['String']>;
  onlineChatFriends: OnlineFriendsPayload;
  searchFriends: Array<User>;
  searchPostsByTitle: CollabPostsSearchResultsPayload;
  searchUsers: Array<User>;
  task?: Maybe<Task>;
  taskList: TaskListPayload;
  thread?: Maybe<CollabDiscussionThread>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAdvancedPostsSearchArgs = {
  input: AdvancedPostsSearchInput;
};


export type QueryCollabArgs = {
  collabId: Scalars['ID'];
};


export type QueryCollabPostArgs = {
  postId: Scalars['ID'];
};


export type QueryCollabPostsArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QueryCollabPostsByStackArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  stack: Scalars['String'];
};


export type QueryCollabWallMessagesArgs = {
  input: CollabWallMessagesInput;
};


export type QueryGetConversationArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  userId: Scalars['ID'];
};


export type QuerySearchFriendsArgs = {
  input: SearchUsersInput;
};


export type QuerySearchPostsByTitleArgs = {
  input: SearchPostsInput;
};


export type QuerySearchUsersArgs = {
  input: SearchUsersInput;
};


export type QueryTaskArgs = {
  taskId: Scalars['ID'];
};


export type QueryTaskListArgs = {
  collabId: Scalars['ID'];
};


export type QueryThreadArgs = {
  threadId: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptCollabInvitation: Scalars['ID'];
  acceptFriendRequest: User;
  acceptMemberRequest: Scalars['ID'];
  addCollabDiscussionThreadCommentReaction: Scalars['Boolean'];
  addCollabDiscussionThreadReaction: Scalars['Boolean'];
  addCollabPostCommentReaction: Scalars['Boolean'];
  addCollabPostReaction: CollabPost;
  addCollabTaskCommentReaction: Scalars['Boolean'];
  cancelRequestToJoin: Scalars['Boolean'];
  createCollabDiscussionThread: CollabDiscussionThread;
  createCollabDiscussionThreadComment: CollabDiscussionThreadComment;
  createCollabPost: CollabPost;
  createComment: CollabPostComment;
  createTask: Task;
  createTaskComment: TaskComment;
  createTaskList: TaskList;
  createWallMessage: WallMessage;
  declineCollabInvitation: Scalars['ID'];
  declineFriendRequest: User;
  declineMemberRequest: Scalars['ID'];
  deleteAllNotifications: Scalars['Boolean'];
  deleteCollab: Scalars['Boolean'];
  deleteCollabDiscussionThread: Scalars['Boolean'];
  deleteCollabDiscussionThreadComment: Scalars['Boolean'];
  deleteCollabPost: Scalars['Boolean'];
  deleteComment: Scalars['Boolean'];
  deleteNotification: Scalars['ID'];
  deletePrivateMessage: Scalars['ID'];
  deleteTask: Scalars['Boolean'];
  deleteTaskComment: Scalars['Boolean'];
  deleteTaskList: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deleteWallMessage: Scalars['ID'];
  inviteMember: User;
  login: AuthPayload;
  markAllNotificationsAsRead: Scalars['Boolean'];
  markNotificationAsRead: Notification;
  markPrivateMessageAsRead: Scalars['Boolean'];
  moveTaskToList: Task;
  removeCollabDiscussionThreadCommentReaction: Scalars['Boolean'];
  removeCollabDiscussionThreadReaction: Scalars['Boolean'];
  removeCollabPostCommentReaction: Scalars['Boolean'];
  removeCollabPostReaction: CollabPost;
  removeCollabTaskCommentReaction: Scalars['Boolean'];
  removeFriend: User;
  removeMember: Collab;
  requestToJoin: Scalars['Boolean'];
  sendFriendRequest: User;
  sendPrivateChatMessage: PrivateChatMessage;
  sendPrivateMessage: PrivateMessage;
  signUp: AuthPayload;
  toggleAcceptInvites: Collab;
  updateStatus: Scalars['Boolean'];
  updateTask: Task;
  updateTaskAssignee: Task;
  updateTaskListName: TaskList;
  updateTaskListPosition: TaskList;
  updateTaskPosition: Task;
  updateUserInfo: CurrentUser;
  uploadAvatar: CurrentUser;
};


export type MutationAcceptCollabInvitationArgs = {
  collabId: Scalars['ID'];
};


export type MutationAcceptFriendRequestArgs = {
  friendId: Scalars['ID'];
};


export type MutationAcceptMemberRequestArgs = {
  collabId: Scalars['ID'];
  memberId: Scalars['ID'];
};


export type MutationAddCollabDiscussionThreadCommentReactionArgs = {
  reaction: AddDiscussionThreadCommentReactionInput;
};


export type MutationAddCollabDiscussionThreadReactionArgs = {
  reaction: AddCollabDiscussionThreadReactionInput;
};


export type MutationAddCollabPostCommentReactionArgs = {
  reaction: AddCollabPostCommentReactionInput;
};


export type MutationAddCollabPostReactionArgs = {
  reaction: AddCollabPostReactionInput;
};


export type MutationAddCollabTaskCommentReactionArgs = {
  reaction: AddCollabTaskCommentReactionInput;
};


export type MutationCancelRequestToJoinArgs = {
  collabId: Scalars['ID'];
};


export type MutationCreateCollabDiscussionThreadArgs = {
  thread: CreateThreadArgs;
};


export type MutationCreateCollabDiscussionThreadCommentArgs = {
  input: CreateCollabDiscussionThreadCommentInput;
};


export type MutationCreateCollabPostArgs = {
  post: CollabPostArgs;
};


export type MutationCreateCommentArgs = {
  content: Scalars['String'];
  postId: Scalars['ID'];
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


export type MutationCreateTaskCommentArgs = {
  input: CreateTaskCommentInput;
};


export type MutationCreateTaskListArgs = {
  input: CreateTaskListInput;
};


export type MutationCreateWallMessageArgs = {
  input: CreateWallMessageInput;
};


export type MutationDeclineCollabInvitationArgs = {
  collabId: Scalars['ID'];
};


export type MutationDeclineFriendRequestArgs = {
  senderId: Scalars['ID'];
};


export type MutationDeclineMemberRequestArgs = {
  collabId: Scalars['ID'];
  memberId: Scalars['ID'];
};


export type MutationDeleteCollabArgs = {
  collabId: Scalars['ID'];
};


export type MutationDeleteCollabDiscussionThreadArgs = {
  threadId: Scalars['ID'];
};


export type MutationDeleteCollabDiscussionThreadCommentArgs = {
  commentId: Scalars['ID'];
};


export type MutationDeleteCollabPostArgs = {
  postId: Scalars['ID'];
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['ID'];
};


export type MutationDeleteNotificationArgs = {
  notificationId: Scalars['ID'];
};


export type MutationDeletePrivateMessageArgs = {
  messageId: Scalars['ID'];
};


export type MutationDeleteTaskArgs = {
  taskId: Scalars['ID'];
};


export type MutationDeleteTaskCommentArgs = {
  commentId: Scalars['ID'];
};


export type MutationDeleteTaskListArgs = {
  taskListId: Scalars['ID'];
};


export type MutationDeleteWallMessageArgs = {
  messageId: Scalars['ID'];
};


export type MutationInviteMemberArgs = {
  collabId: Scalars['ID'];
  memberId: Scalars['ID'];
};


export type MutationLoginArgs = {
  credentials: LoginArgs;
};


export type MutationMarkNotificationAsReadArgs = {
  notificationId: Scalars['ID'];
};


export type MutationMarkPrivateMessageAsReadArgs = {
  messageId: Scalars['ID'];
};


export type MutationMoveTaskToListArgs = {
  input: MoveTaskToListInput;
};


export type MutationRemoveCollabDiscussionThreadCommentReactionArgs = {
  reaction: RemoveDiscussionThreadCommentReactionInput;
};


export type MutationRemoveCollabDiscussionThreadReactionArgs = {
  reaction: RemoveCollabDiscussionThreadReactionInput;
};


export type MutationRemoveCollabPostCommentReactionArgs = {
  reaction: RemoveCollabPostCommentReactionInput;
};


export type MutationRemoveCollabPostReactionArgs = {
  reaction: RemoveCollabPostReactionInput;
};


export type MutationRemoveCollabTaskCommentReactionArgs = {
  reaction: RemoveCollabTaskCommentReactionInput;
};


export type MutationRemoveFriendArgs = {
  friendId: Scalars['ID'];
};


export type MutationRemoveMemberArgs = {
  collabId: Scalars['ID'];
  memberId: Scalars['ID'];
};


export type MutationRequestToJoinArgs = {
  collabId: Scalars['ID'];
};


export type MutationSendFriendRequestArgs = {
  friendId: Scalars['ID'];
};


export type MutationSendPrivateChatMessageArgs = {
  input: SendPrivateChatMessageInput;
};


export type MutationSendPrivateMessageArgs = {
  input: SendPrivateMessageInput;
};


export type MutationSignUpArgs = {
  credentials: SignUpArgs;
};


export type MutationToggleAcceptInvitesArgs = {
  collabId: Scalars['ID'];
};


export type MutationUpdateStatusArgs = {
  status: UserChatStatus;
};


export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};


export type MutationUpdateTaskAssigneeArgs = {
  input: UpdateTaskAssigneeInput;
};


export type MutationUpdateTaskListNameArgs = {
  input: UpdateTaskListNameInput;
};


export type MutationUpdateTaskListPositionArgs = {
  input: UpdateTaskListPositionInput;
};


export type MutationUpdateTaskPositionArgs = {
  input: UpdateTaskPositionInput;
};


export type MutationUpdateUserInfoArgs = {
  input?: Maybe<UpdateUserInfoInput>;
};


export type MutationUploadAvatarArgs = {
  avatar: Scalars['Upload'];
};

export type Collab = {
  __typename?: 'Collab';
  acceptsInvites: Scalars['Boolean'];
  collabPostId?: Maybe<Scalars['ID']>;
  creationDate: Scalars['Date'];
  discussionThreads: Array<CollabDiscussionThread>;
  id: Scalars['ID'];
  invitationPending: Scalars['Boolean'];
  isMember: Scalars['Boolean'];
  isOwner: Scalars['Boolean'];
  members: Array<User>;
  name: Scalars['String'];
  owner: User;
  pendingInvites: Array<Maybe<User>>;
  pendingRequests: Array<Maybe<User>>;
  requestToJoinPending: Scalars['Boolean'];
  taskList: Array<TaskList>;
};

export type CollabDiscussionThread = {
  __typename?: 'CollabDiscussionThread';
  author?: Maybe<User>;
  collab?: Maybe<Collab>;
  comments: Array<CollabDiscussionThreadComment>;
  commentsCount: Scalars['Int'];
  content: Scalars['String'];
  creationDate: Scalars['Date'];
  id: Scalars['ID'];
  reactions: Array<Reaction>;
  reactionsCount: Scalars['Int'];
  title: Scalars['String'];
};

export type CreateThreadArgs = {
  collabId: Scalars['ID'];
  content: Scalars['String'];
  title: Scalars['String'];
};

export type CollabDiscussionThreadComment = {
  __typename?: 'CollabDiscussionThreadComment';
  author?: Maybe<User>;
  collab: Collab;
  content: Scalars['String'];
  creationDate: Scalars['Date'];
  id: Scalars['ID'];
  isAuthor: Scalars['Boolean'];
  reactions: Array<Reaction>;
  thread?: Maybe<CollabDiscussionThread>;
};

export type CreateCollabDiscussionThreadCommentInput = {
  collabId: Scalars['ID'];
  content: Scalars['String'];
  threadId: Scalars['ID'];
};

export type AddDiscussionThreadCommentReactionInput = {
  commentId: Scalars['ID'];
  emojiId: Scalars['ID'];
};

export type RemoveDiscussionThreadCommentReactionInput = {
  commentId: Scalars['ID'];
  emojiId: Scalars['ID'];
};

export type AddCollabDiscussionThreadReactionInput = {
  emojiId: Scalars['ID'];
  threadId: Scalars['ID'];
};

export type RemoveCollabDiscussionThreadReactionInput = {
  emojiId: Scalars['ID'];
  threadId: Scalars['ID'];
};

export type AdvancedPostsSearchInput = {
  experience?: Maybe<Experience>;
  hasStarted?: Maybe<Scalars['Boolean']>;
  isNew?: Maybe<Scalars['Boolean']>;
  languages?: Maybe<Array<Scalars['String']>>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  stack?: Maybe<Array<Scalars['String']>>;
};

export type CollabPostsSearchResultsPayload = {
  __typename?: 'CollabPostsSearchResultsPayload';
  hasNextPage: Scalars['Boolean'];
  posts: Array<CollabPost>;
};

export type SearchPostsInput = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  title: Scalars['String'];
};

export type SearchPostsPayload = {
  __typename?: 'SearchPostsPayload';
  hasNextPage: Scalars['Boolean'];
  posts: Array<CollabPost>;
  totalResults: Scalars['Int'];
};

export type CollabPost = {
  __typename?: 'CollabPost';
  acceptsInvites: Scalars['Boolean'];
  collabId: Scalars['ID'];
  comments: Array<CollabPostComment>;
  commentsCount: Scalars['Int'];
  creationDate: Scalars['Date'];
  description: Scalars['String'];
  experience: Scalars['String'];
  hasStarted: Scalars['Boolean'];
  id: Scalars['ID'];
  invitationPending: Scalars['Boolean'];
  isMember: Scalars['Boolean'];
  isNew: Scalars['Boolean'];
  isOwner: Scalars['Boolean'];
  languages: Array<Scalars['String']>;
  members: Array<User>;
  membersCount: Scalars['Int'];
  name: Scalars['String'];
  owner: User;
  pendingInvites: Array<User>;
  pendingRequests: Array<User>;
  reactions: Array<Reaction>;
  reactionsCount: Scalars['Int'];
  requestToJoinPending: Scalars['Boolean'];
  stack: Array<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type CollabPostsPayload = {
  __typename?: 'CollabPostsPayload';
  hasNextPage: Scalars['Boolean'];
  posts: Array<CollabPost>;
};

export type CollabPostArgs = {
  description: Scalars['String'];
  experience: Experience;
  hasStarted: Scalars['Boolean'];
  languages: Array<Scalars['String']>;
  name: Scalars['String'];
  stack: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type Experience = 
  | 'ALL'
  | 'JUNIOR'
  | 'JUNIOR_MID'
  | 'MID'
  | 'MID_SENIOR'
  | 'SENIOR';

export type CollabPostComment = {
  __typename?: 'CollabPostComment';
  author: User;
  content: Scalars['String'];
  creationDate: Scalars['Date'];
  id: Scalars['ID'];
  isAuthor: Scalars['Boolean'];
  reactions: Array<Reaction>;
};

export type AddCollabPostCommentReactionInput = {
  commentId: Scalars['ID'];
  emojiId: Scalars['ID'];
};

export type RemoveCollabPostCommentReactionInput = {
  commentId: Scalars['ID'];
  emojiId: Scalars['ID'];
};

export type AddCollabPostReactionInput = {
  emojiId: Scalars['ID'];
  postId: Scalars['ID'];
};

export type RemoveCollabPostReactionInput = {
  emojiId: Scalars['ID'];
  postId: Scalars['ID'];
};

export type AddCollabTaskCommentReactionInput = {
  commentId: Scalars['ID'];
  emojiId: Scalars['ID'];
};

export type RemoveCollabTaskCommentReactionInput = {
  commentId: Scalars['ID'];
  emojiId: Scalars['ID'];
};

export type WallMessage = {
  __typename?: 'WallMessage';
  author: User;
  content: Scalars['String'];
  creationDate: Scalars['Date'];
  id: Scalars['ID'];
  isAuthor: Scalars['Boolean'];
};

export type CreateWallMessageInput = {
  collabId: Scalars['ID'];
  content: Scalars['String'];
};

export type CollabWallMessagesPayload = {
  __typename?: 'CollabWallMessagesPayload';
  hasNextPage: Scalars['Boolean'];
  messages: Array<WallMessage>;
};

export type CollabWallMessagesInput = {
  collabId: Scalars['ID'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type Subscription = {
  __typename?: 'Subscription';
  friendStatusChange: ChatUserPayload;
  newFriendRequest: NewFriendRequestPayload;
  newNotification: Notification;
  newPrivateChatMessage: PrivateChatMessage;
};

export type Notification = {
  __typename?: 'Notification';
  creationDate: Scalars['Date'];
  id: Scalars['ID'];
  isRead: Scalars['Boolean'];
  message: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  url: Scalars['String'];
};

export type UserChatStatus = 
  | 'AWAY'
  | 'DND'
  | 'OFFLINE'
  | 'ONLINE';

export type OnlineFriendsPayload = {
  __typename?: 'OnlineFriendsPayload';
  users: Array<ChatUserPayload>;
};

export type ChatUserPayload = {
  __typename?: 'ChatUserPayload';
  status: UserChatStatus;
  user: User;
};

export type PrivateChatMessage = {
  __typename?: 'PrivateChatMessage';
  authorId: Scalars['ID'];
  content: Scalars['String'];
  creationDate: Scalars['Date'];
  id: Scalars['ID'];
};

export type SendPrivateChatMessageInput = {
  content: Scalars['String'];
  recipientId: Scalars['ID'];
};

export type PrivateMessage = {
  __typename?: 'PrivateMessage';
  author?: Maybe<User>;
  content: Scalars['String'];
  creationDate: Scalars['Date'];
  id: Scalars['ID'];
  isRead: Scalars['Boolean'];
  recipient?: Maybe<User>;
};

export type PrivateMessagePreview = {
  __typename?: 'PrivateMessagePreview';
  avatar?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  userId: Scalars['ID'];
  username: Scalars['String'];
};

export type GetConversationPayload = {
  __typename?: 'GetConversationPayload';
  hasNextPage: Scalars['Boolean'];
  messages: Array<PrivateMessage>;
};

export type SendPrivateMessageInput = {
  content: Scalars['String'];
  recipientId: Scalars['ID'];
};

export type Reaction = {
  __typename?: 'Reaction';
  count: Scalars['Int'];
  emojiId: Scalars['ID'];
  isLiked: Scalars['Boolean'];
};


export type Task = {
  __typename?: 'Task';
  assignedBy?: Maybe<User>;
  assignee?: Maybe<User>;
  author: User;
  authorId: Scalars['ID'];
  collab: Collab;
  comments: Array<TaskComment>;
  commentsCount: Scalars['Int'];
  description: Scalars['ID'];
  id: Scalars['ID'];
  order: Scalars['Int'];
  taskListId: Scalars['ID'];
};

export type UpdateTaskInput = {
  assigneeId?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  taskId: Scalars['ID'];
};

export type CreateTaskInput = {
  assigneeId?: Maybe<Scalars['ID']>;
  collabId: Scalars['ID'];
  description: Scalars['String'];
  taskListId: Scalars['ID'];
};

export type UpdateTaskAssigneeInput = {
  assigneeId: Scalars['ID'];
  taskId: Scalars['ID'];
};

export type UpdateTaskPositionInput = {
  newTaskPosition: Scalars['Int'];
  oldTaskPosition: Scalars['Int'];
  taskListId: Scalars['ID'];
};

export type MoveTaskToListInput = {
  newTaskListId: Scalars['ID'];
  newTaskPosition: Scalars['Int'];
  oldTaskListId: Scalars['ID'];
  oldTaskPosition: Scalars['Int'];
};

export type TaskComment = {
  __typename?: 'TaskComment';
  author?: Maybe<User>;
  content: Scalars['String'];
  creationDate: Scalars['Date'];
  id: Scalars['ID'];
  reactions: Array<Reaction>;
  task?: Maybe<Task>;
};

export type CreateTaskCommentInput = {
  collabId: Scalars['ID'];
  content: Scalars['String'];
  taskId: Scalars['ID'];
};

export type CreateTaskListInput = {
  collabId: Scalars['ID'];
  name: Scalars['String'];
};

export type UpdateTaskListNameInput = {
  name: Scalars['String'];
  taskListId: Scalars['ID'];
};

export type UpdateTaskListPositionInput = {
  collabId: Scalars['ID'];
  newTaskListPosition: Scalars['Int'];
  oldTaskListPosition: Scalars['Int'];
};

export type TaskListPayload = {
  __typename?: 'TaskListPayload';
  taskList: Array<TaskList>;
};

export type TaskList = {
  __typename?: 'TaskList';
  collab: Collab;
  id: Scalars['ID'];
  name: Scalars['String'];
  order: Scalars['Int'];
  tasks: Array<Task>;
};


export type NewFriendRequestPayload = {
  __typename?: 'NewFriendRequestPayload';
  user: User;
};

export type CurrentUser = {
  __typename?: 'CurrentUser';
  avatar?: Maybe<Scalars['String']>;
  bio: Scalars['String'];
  collabInvites: Array<Collab>;
  collabRequests: Array<CollabRequest>;
  collabs: Array<Collab>;
  conversationsPreview: Array<PrivateMessagePreview>;
  country?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  friendRequests: Array<User>;
  friendRequestsCount: Scalars['Int'];
  friends: Array<User>;
  github: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  linkedin: Scalars['String'];
  notifications: Array<Notification>;
  notificationsCount: Scalars['Int'];
  tasks: Array<Task>;
  /** the user's engineering title */
  title: Scalars['String'];
  twitter: Scalars['String'];
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  bio: Scalars['String'];
  canRequestFriendship: Scalars['Boolean'];
  collabs: Array<Collab>;
  country?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isFriend: Scalars['Boolean'];
  isSelf: Scalars['Boolean'];
  lastName: Scalars['String'];
  /** the user's engineering title */
  title: Scalars['String'];
  username: Scalars['String'];
};

export type SearchUsersInput = {
  username: Scalars['String'];
};

export type UpdateUserInfoInput = {
  bio: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  github: Scalars['String'];
  lastName: Scalars['String'];
  linkedin: Scalars['String'];
  title: Scalars['String'];
  twitter: Scalars['String'];
};

export type CollabRequest = {
  __typename?: 'CollabRequest';
  collab: Collab;
  id: Scalars['ID'];
  member: User;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
};

export type SignUpArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpMutationVariables = Exact<{
  credentials: SignUpArgs;
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signUp: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  ) }
);

export type LoginMutationVariables = Exact<{
  credentials: LoginArgs;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  ) }
);

export type UpdateUserInfoMutationVariables = Exact<{
  input: UpdateUserInfoInput;
}>;


export type UpdateUserInfoMutation = (
  { __typename?: 'Mutation' }
  & { updateUserInfo: (
    { __typename?: 'CurrentUser' }
    & Pick<CurrentUser, 'id' | 'firstName' | 'lastName' | 'title' | 'country' | 'bio'>
  ) }
);

export type UploadAvatarMutationVariables = Exact<{
  avatar: Scalars['Upload'];
}>;


export type UploadAvatarMutation = (
  { __typename?: 'Mutation' }
  & { uploadAvatar: (
    { __typename?: 'CurrentUser' }
    & Pick<CurrentUser, 'id' | 'avatar'>
  ) }
);

export type MarkNotificationAsReadMutationVariables = Exact<{
  notificationId: Scalars['ID'];
}>;


export type MarkNotificationAsReadMutation = (
  { __typename?: 'Mutation' }
  & { markNotificationAsRead: (
    { __typename?: 'Notification' }
    & Pick<Notification, 'id' | 'isRead'>
  ) }
);

export type MarkAllNotificationsAsReadMutationVariables = Exact<{ [key: string]: never; }>;


export type MarkAllNotificationsAsReadMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'markAllNotificationsAsRead'>
);

export type DeleteNotificationMutationVariables = Exact<{
  notificationId: Scalars['ID'];
}>;


export type DeleteNotificationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteNotification'>
);

export type DeleteAllNotificationsMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAllNotificationsMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteAllNotifications'>
);

export type SendPrivateMessageMutationVariables = Exact<{
  input: SendPrivateMessageInput;
}>;


export type SendPrivateMessageMutation = (
  { __typename?: 'Mutation' }
  & { sendPrivateMessage: (
    { __typename?: 'PrivateMessage' }
    & Pick<PrivateMessage, 'id' | 'content' | 'creationDate' | 'isRead'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    )>, recipient?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    )> }
  ) }
);

export type DeletePrivateMessageMutationVariables = Exact<{
  messageId: Scalars['ID'];
}>;


export type DeletePrivateMessageMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deletePrivateMessage'>
);

export type SendFriendRequestMutationVariables = Exact<{
  friendId: Scalars['ID'];
}>;


export type SendFriendRequestMutation = (
  { __typename?: 'Mutation' }
  & { sendFriendRequest: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'canRequestFriendship'>
  ) }
);

export type AcceptFriendRequestMutationVariables = Exact<{
  friendId: Scalars['ID'];
}>;


export type AcceptFriendRequestMutation = (
  { __typename?: 'Mutation' }
  & { acceptFriendRequest: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'avatar' | 'canRequestFriendship' | 'isFriend'>
  ) }
);

export type DeclineFriendRequestMutationVariables = Exact<{
  senderId: Scalars['ID'];
}>;


export type DeclineFriendRequestMutation = (
  { __typename?: 'Mutation' }
  & { declineFriendRequest: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'canRequestFriendship'>
  ) }
);

export type RemoveFriendMutationVariables = Exact<{
  friendId: Scalars['ID'];
}>;


export type RemoveFriendMutation = (
  { __typename?: 'Mutation' }
  & { removeFriend: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'canRequestFriendship' | 'isFriend'>
  ) }
);

export type CreateCollabPostMutationVariables = Exact<{
  post: CollabPostArgs;
}>;


export type CreateCollabPostMutation = (
  { __typename?: 'Mutation' }
  & { createCollabPost: (
    { __typename?: 'CollabPost' }
    & Pick<CollabPost, 'id'>
  ) }
);

export type AddCollabPostCommentMutationVariables = Exact<{
  content: Scalars['String'];
  postId: Scalars['ID'];
}>;


export type AddCollabPostCommentMutation = (
  { __typename?: 'Mutation' }
  & { createComment: (
    { __typename?: 'CollabPostComment' }
    & Pick<CollabPostComment, 'id' | 'content'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    ) }
  ) }
);

export type AddCollabPostReactionMutationVariables = Exact<{
  reaction: AddCollabPostReactionInput;
}>;


export type AddCollabPostReactionMutation = (
  { __typename?: 'Mutation' }
  & { addCollabPostReaction: (
    { __typename?: 'CollabPost' }
    & Pick<CollabPost, 'id'>
    & { reactions: Array<(
      { __typename?: 'Reaction' }
      & Pick<Reaction, 'emojiId' | 'count' | 'isLiked'>
    )> }
  ) }
);

export type RemoveCollabPostReactionMutationVariables = Exact<{
  reaction: RemoveCollabPostReactionInput;
}>;


export type RemoveCollabPostReactionMutation = (
  { __typename?: 'Mutation' }
  & { removeCollabPostReaction: (
    { __typename?: 'CollabPost' }
    & Pick<CollabPost, 'id'>
    & { reactions: Array<(
      { __typename?: 'Reaction' }
      & Pick<Reaction, 'emojiId' | 'count' | 'isLiked'>
    )> }
  ) }
);

export type AddCollabPostCommentReactionMutationVariables = Exact<{
  reaction: AddCollabPostCommentReactionInput;
}>;


export type AddCollabPostCommentReactionMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addCollabPostCommentReaction'>
);

export type RemoveCollabPostCommentReactionMutationVariables = Exact<{
  reaction: RemoveCollabPostCommentReactionInput;
}>;


export type RemoveCollabPostCommentReactionMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeCollabPostCommentReaction'>
);

export type AddCollabDiscussionThreadReactionMutationVariables = Exact<{
  reaction: AddCollabDiscussionThreadReactionInput;
}>;


export type AddCollabDiscussionThreadReactionMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addCollabDiscussionThreadReaction'>
);

export type RemoveCollabDiscussionThreadReactionMutationVariables = Exact<{
  reaction: RemoveCollabDiscussionThreadReactionInput;
}>;


export type RemoveCollabDiscussionThreadReactionMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeCollabDiscussionThreadReaction'>
);

export type AddDiscussionThreadCommentReactionMutationVariables = Exact<{
  reaction: AddDiscussionThreadCommentReactionInput;
}>;


export type AddDiscussionThreadCommentReactionMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addCollabDiscussionThreadCommentReaction'>
);

export type RemoveDiscussionThreadCommentReactionMutationVariables = Exact<{
  reaction: RemoveDiscussionThreadCommentReactionInput;
}>;


export type RemoveDiscussionThreadCommentReactionMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeCollabDiscussionThreadCommentReaction'>
);

export type InviteMemberMutationVariables = Exact<{
  collabId: Scalars['ID'];
  memberId: Scalars['ID'];
}>;


export type InviteMemberMutation = (
  { __typename?: 'Mutation' }
  & { inviteMember: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'avatar'>
  ) }
);

export type RequestToJoinMutationVariables = Exact<{
  collabId: Scalars['ID'];
}>;


export type RequestToJoinMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'requestToJoin'>
);

export type CancelCollabRequestToJoinMutationVariables = Exact<{
  collabId: Scalars['ID'];
}>;


export type CancelCollabRequestToJoinMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'cancelRequestToJoin'>
);

export type AcceptCollabInvitationMutationVariables = Exact<{
  collabId: Scalars['ID'];
}>;


export type AcceptCollabInvitationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'acceptCollabInvitation'>
);

export type DeclineCollabInvitationMutationVariables = Exact<{
  collabId: Scalars['ID'];
}>;


export type DeclineCollabInvitationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'declineCollabInvitation'>
);

export type AcceptMemberRequestMutationVariables = Exact<{
  collabId: Scalars['ID'];
  memberId: Scalars['ID'];
}>;


export type AcceptMemberRequestMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'acceptMemberRequest'>
);

export type DeclineMemberRequestMutationVariables = Exact<{
  collabId: Scalars['ID'];
  memberId: Scalars['ID'];
}>;


export type DeclineMemberRequestMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'declineMemberRequest'>
);

export type RemoveMemberMutationVariables = Exact<{
  collabId: Scalars['ID'];
  memberId: Scalars['ID'];
}>;


export type RemoveMemberMutation = (
  { __typename?: 'Mutation' }
  & { removeMember: (
    { __typename?: 'Collab' }
    & Pick<Collab, 'id'>
    & { members: Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    )> }
  ) }
);

export type CreateWallMessageMutationVariables = Exact<{
  input: CreateWallMessageInput;
}>;


export type CreateWallMessageMutation = (
  { __typename?: 'Mutation' }
  & { createWallMessage: (
    { __typename?: 'WallMessage' }
    & Pick<WallMessage, 'id' | 'content' | 'creationDate' | 'isAuthor'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    ) }
  ) }
);

export type DeleteWallMessageMutationVariables = Exact<{
  messageId: Scalars['ID'];
}>;


export type DeleteWallMessageMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteWallMessage'>
);

export type CreateTaskListMutationVariables = Exact<{
  input: CreateTaskListInput;
}>;


export type CreateTaskListMutation = (
  { __typename?: 'Mutation' }
  & { createTaskList: (
    { __typename?: 'TaskList' }
    & Pick<TaskList, 'id' | 'name' | 'order'>
  ) }
);

export type UpdateTaskListNameMutationVariables = Exact<{
  input: UpdateTaskListNameInput;
}>;


export type UpdateTaskListNameMutation = (
  { __typename?: 'Mutation' }
  & { updateTaskListName: (
    { __typename?: 'TaskList' }
    & Pick<TaskList, 'id' | 'name'>
  ) }
);

export type UpdateTaskListPositionMutationVariables = Exact<{
  input: UpdateTaskListPositionInput;
}>;


export type UpdateTaskListPositionMutation = (
  { __typename?: 'Mutation' }
  & { updateTaskListPosition: (
    { __typename?: 'TaskList' }
    & Pick<TaskList, 'id'>
  ) }
);

export type DeleteTaskListMutationVariables = Exact<{
  taskListId: Scalars['ID'];
}>;


export type DeleteTaskListMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTaskList'>
);

export type CreateTaskMutationVariables = Exact<{
  input: CreateTaskInput;
}>;


export type CreateTaskMutation = (
  { __typename?: 'Mutation' }
  & { createTask: (
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'description' | 'order' | 'taskListId' | 'commentsCount'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    ), assignee?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    )>, assignedBy?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    )> }
  ) }
);

export type DeleteTaskMutationVariables = Exact<{
  taskId: Scalars['ID'];
}>;


export type DeleteTaskMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTask'>
);

export type UpdateTaskMutationVariables = Exact<{
  input: UpdateTaskInput;
}>;


export type UpdateTaskMutation = (
  { __typename?: 'Mutation' }
  & { updateTask: (
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'description'>
    & { assignee?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    )>, assignedBy?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    )> }
  ) }
);

export type MoveTaskToListMutationVariables = Exact<{
  input: MoveTaskToListInput;
}>;


export type MoveTaskToListMutation = (
  { __typename?: 'Mutation' }
  & { moveTaskToList: (
    { __typename?: 'Task' }
    & Pick<Task, 'id'>
  ) }
);

export type UpdateTaskPositionMutationVariables = Exact<{
  input: UpdateTaskPositionInput;
}>;


export type UpdateTaskPositionMutation = (
  { __typename?: 'Mutation' }
  & { updateTaskPosition: (
    { __typename?: 'Task' }
    & Pick<Task, 'id'>
  ) }
);

export type UpdateTaskAssigneeMutationVariables = Exact<{
  input: UpdateTaskAssigneeInput;
}>;


export type UpdateTaskAssigneeMutation = (
  { __typename?: 'Mutation' }
  & { updateTaskAssignee: (
    { __typename?: 'Task' }
    & Pick<Task, 'id'>
    & { assignee?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    )>, assignedBy?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    )> }
  ) }
);

export type CreateTaskCommentMutationVariables = Exact<{
  input: CreateTaskCommentInput;
}>;


export type CreateTaskCommentMutation = (
  { __typename?: 'Mutation' }
  & { createTaskComment: (
    { __typename?: 'TaskComment' }
    & Pick<TaskComment, 'id' | 'content'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    )>, reactions: Array<(
      { __typename?: 'Reaction' }
      & Pick<Reaction, 'emojiId' | 'count'>
    )> }
  ) }
);

export type AddTaskCommentReactionMutationVariables = Exact<{
  reaction: AddCollabTaskCommentReactionInput;
}>;


export type AddTaskCommentReactionMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addCollabTaskCommentReaction'>
);

export type RemoveTaskCommentReactionMutationVariables = Exact<{
  reaction: RemoveCollabTaskCommentReactionInput;
}>;


export type RemoveTaskCommentReactionMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeCollabTaskCommentReaction'>
);

export type CreateDiscussionThreadCommentMutationVariables = Exact<{
  input: CreateCollabDiscussionThreadCommentInput;
}>;


export type CreateDiscussionThreadCommentMutation = (
  { __typename?: 'Mutation' }
  & { createCollabDiscussionThreadComment: (
    { __typename?: 'CollabDiscussionThreadComment' }
    & Pick<CollabDiscussionThreadComment, 'id' | 'content'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    )>, reactions: Array<(
      { __typename?: 'Reaction' }
      & Pick<Reaction, 'emojiId' | 'count' | 'isLiked'>
    )> }
  ) }
);

export type SendPrivateChatMessageMutationVariables = Exact<{
  input: SendPrivateChatMessageInput;
}>;


export type SendPrivateChatMessageMutation = (
  { __typename?: 'Mutation' }
  & { sendPrivateChatMessage: (
    { __typename?: 'PrivateChatMessage' }
    & Pick<PrivateChatMessage, 'id' | 'authorId' | 'content' | 'creationDate'>
  ) }
);

export type UpdateStatusMutationVariables = Exact<{
  status: UserChatStatus;
}>;


export type UpdateStatusMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateStatus'>
);

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'CurrentUser' }
    & Pick<CurrentUser, 'id' | 'username' | 'avatar' | 'friendRequestsCount' | 'notificationsCount'>
  )> }
);

export type CurrentUserFriendsQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserFriendsQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'CurrentUser' }
    & Pick<CurrentUser, 'id'>
    & { friends: Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar' | 'bio' | 'title' | 'country' | 'isSelf' | 'isFriend' | 'canRequestFriendship'>
    )> }
  )> }
);

export type CurrentUserNotificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserNotificationsQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'CurrentUser' }
    & Pick<CurrentUser, 'id'>
    & { notifications: Array<(
      { __typename?: 'Notification' }
      & Pick<Notification, 'id' | 'type' | 'message' | 'title' | 'url' | 'isRead' | 'creationDate'>
    )> }
  )> }
);

export type CurrentUserFriendRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserFriendRequestsQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'CurrentUser' }
    & Pick<CurrentUser, 'id'>
    & { friendRequests: Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    )> }
  )> }
);

export type SearchFriendsQueryVariables = Exact<{
  input: SearchUsersInput;
}>;


export type SearchFriendsQuery = (
  { __typename?: 'Query' }
  & { searchFriends: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'avatar'>
  )> }
);

export type SearchUsersQueryVariables = Exact<{
  input: SearchUsersInput;
}>;


export type SearchUsersQuery = (
  { __typename?: 'Query' }
  & { searchUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'avatar'>
  )> }
);

export type GetCurrentUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserInfoQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'CurrentUser' }
    & Pick<CurrentUser, 'id' | 'firstName' | 'lastName' | 'title' | 'country' | 'bio' | 'github' | 'twitter' | 'linkedin'>
  )> }
);

export type CurrentUserConversationsPreviewQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserConversationsPreviewQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'CurrentUser' }
    & Pick<CurrentUser, 'id'>
    & { conversationsPreview: Array<(
      { __typename?: 'PrivateMessagePreview' }
      & Pick<PrivateMessagePreview, 'userId' | 'username' | 'avatar' | 'content'>
    )> }
  )> }
);

export type CurrentUserConversationQueryVariables = Exact<{
  userId: Scalars['ID'];
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type CurrentUserConversationQuery = (
  { __typename?: 'Query' }
  & { getConversation: (
    { __typename?: 'GetConversationPayload' }
    & Pick<GetConversationPayload, 'hasNextPage'>
    & { messages: Array<(
      { __typename?: 'PrivateMessage' }
      & Pick<PrivateMessage, 'id' | 'content' | 'creationDate' | 'isRead'>
      & { author?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'avatar'>
      )>, recipient?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'avatar'>
      )> }
    )> }
  ) }
);

export type GetCurrentUserCollabsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserCollabsQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'CurrentUser' }
    & Pick<CurrentUser, 'id'>
    & { collabs: Array<(
      { __typename?: 'Collab' }
      & Pick<Collab, 'id' | 'name'>
    )> }
  )> }
);

export type GetCurrentUserCollabInvitationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserCollabInvitationsQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'CurrentUser' }
    & Pick<CurrentUser, 'id'>
    & { collabInvites: Array<(
      { __typename?: 'Collab' }
      & Pick<Collab, 'id' | 'name'>
      & { owner: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'avatar'>
      ) }
    )> }
  )> }
);

export type GetCurrentUserCollabRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserCollabRequestsQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'CurrentUser' }
    & Pick<CurrentUser, 'id'>
    & { collabRequests: Array<(
      { __typename?: 'CollabRequest' }
      & Pick<CollabRequest, 'id'>
      & { collab: (
        { __typename?: 'Collab' }
        & Pick<Collab, 'id' | 'name'>
      ), member: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'avatar'>
      ) }
    )> }
  )> }
);

export type GetCurrentUserTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserTasksQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'CurrentUser' }
    & Pick<CurrentUser, 'id'>
    & { tasks: Array<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'description'>
      & { assignedBy?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username'>
      )>, collab: (
        { __typename?: 'Collab' }
        & Pick<Collab, 'id' | 'name'>
      ) }
    )> }
  )> }
);

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'avatar' | 'bio' | 'title' | 'country' | 'isSelf' | 'isFriend' | 'canRequestFriendship'>
  )> }
);

export type CollabPostsQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type CollabPostsQuery = (
  { __typename?: 'Query' }
  & { collabPosts: (
    { __typename?: 'CollabPostsPayload' }
    & Pick<CollabPostsPayload, 'hasNextPage'>
    & { posts: Array<(
      { __typename?: 'CollabPost' }
      & Pick<CollabPost, 'id' | 'title' | 'stack' | 'experience' | 'hasStarted' | 'languages' | 'creationDate' | 'isNew' | 'membersCount' | 'reactionsCount' | 'commentsCount'>
      & { owner: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'avatar'>
      ) }
    )> }
  ) }
);

export type CollabPostsByStackQueryVariables = Exact<{
  stack: Scalars['String'];
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type CollabPostsByStackQuery = (
  { __typename?: 'Query' }
  & { collabPostsByStack: (
    { __typename?: 'CollabPostsSearchResultsPayload' }
    & Pick<CollabPostsSearchResultsPayload, 'hasNextPage'>
    & { posts: Array<(
      { __typename?: 'CollabPost' }
      & Pick<CollabPost, 'id' | 'title' | 'stack' | 'experience' | 'hasStarted' | 'languages' | 'creationDate' | 'isNew' | 'membersCount' | 'reactionsCount' | 'commentsCount'>
      & { owner: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'avatar'>
      ) }
    )> }
  ) }
);

export type AdvancedPostsSearchQueryVariables = Exact<{
  input: AdvancedPostsSearchInput;
}>;


export type AdvancedPostsSearchQuery = (
  { __typename?: 'Query' }
  & { advancedPostsSearch: (
    { __typename?: 'CollabPostsSearchResultsPayload' }
    & Pick<CollabPostsSearchResultsPayload, 'hasNextPage'>
    & { posts: Array<(
      { __typename?: 'CollabPost' }
      & Pick<CollabPost, 'id' | 'title' | 'stack' | 'experience' | 'hasStarted' | 'languages' | 'creationDate' | 'isNew' | 'membersCount' | 'reactionsCount' | 'commentsCount'>
      & { owner: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'avatar'>
      ) }
    )> }
  ) }
);

export type SearchPostsByTitleQueryVariables = Exact<{
  input: SearchPostsInput;
}>;


export type SearchPostsByTitleQuery = (
  { __typename?: 'Query' }
  & { searchPostsByTitle: (
    { __typename?: 'CollabPostsSearchResultsPayload' }
    & Pick<CollabPostsSearchResultsPayload, 'hasNextPage'>
    & { posts: Array<(
      { __typename?: 'CollabPost' }
      & Pick<CollabPost, 'id' | 'title' | 'reactionsCount' | 'commentsCount'>
      & { owner: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'avatar'>
      ) }
    )> }
  ) }
);

export type GetCollabPostQueryVariables = Exact<{
  postId: Scalars['ID'];
}>;


export type GetCollabPostQuery = (
  { __typename?: 'Query' }
  & { collabPost?: Maybe<(
    { __typename?: 'CollabPost' }
    & Pick<CollabPost, 'id' | 'name' | 'title' | 'description' | 'isNew' | 'collabId' | 'experience' | 'stack' | 'hasStarted' | 'languages' | 'acceptsInvites' | 'isOwner' | 'isMember' | 'invitationPending' | 'requestToJoinPending' | 'creationDate'>
    & { owner: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    ), members: Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    )>, reactions: Array<(
      { __typename?: 'Reaction' }
      & Pick<Reaction, 'emojiId' | 'count' | 'isLiked'>
    )> }
  )> }
);

export type CollabPostLanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type CollabPostLanguagesQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'languages'>
);

export type CollabPostCommentsQueryVariables = Exact<{
  postId: Scalars['ID'];
}>;


export type CollabPostCommentsQuery = (
  { __typename?: 'Query' }
  & { collabPost?: Maybe<(
    { __typename?: 'CollabPost' }
    & Pick<CollabPost, 'id'>
    & { comments: Array<(
      { __typename?: 'CollabPostComment' }
      & Pick<CollabPostComment, 'id' | 'content' | 'isAuthor' | 'creationDate'>
      & { author: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'avatar'>
      ), reactions: Array<(
        { __typename?: 'Reaction' }
        & Pick<Reaction, 'emojiId' | 'count' | 'isLiked'>
      )> }
    )> }
  )> }
);

export type CollabQueryVariables = Exact<{
  collabId: Scalars['ID'];
}>;


export type CollabQuery = (
  { __typename?: 'Query' }
  & { collab?: Maybe<(
    { __typename?: 'Collab' }
    & Pick<Collab, 'id' | 'name' | 'collabPostId' | 'acceptsInvites' | 'isOwner'>
    & { owner: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    ), pendingInvites: Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    )>>, pendingRequests: Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    )>> }
  )> }
);

export type CollabMembersQueryVariables = Exact<{
  collabId: Scalars['ID'];
}>;


export type CollabMembersQuery = (
  { __typename?: 'Query' }
  & { collab?: Maybe<(
    { __typename?: 'Collab' }
    & Pick<Collab, 'id'>
    & { members: Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'bio' | 'avatar' | 'title' | 'country' | 'isSelf' | 'canRequestFriendship' | 'isFriend'>
    )> }
  )> }
);

export type CollabWallMessagesQueryVariables = Exact<{
  input: CollabWallMessagesInput;
}>;


export type CollabWallMessagesQuery = (
  { __typename?: 'Query' }
  & { collabWallMessages: (
    { __typename?: 'CollabWallMessagesPayload' }
    & Pick<CollabWallMessagesPayload, 'hasNextPage'>
    & { messages: Array<(
      { __typename?: 'WallMessage' }
      & Pick<WallMessage, 'id' | 'content' | 'creationDate' | 'isAuthor'>
      & { author: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'avatar'>
      ) }
    )> }
  ) }
);

export type CollabDiscussionThreadsQueryVariables = Exact<{
  collabId: Scalars['ID'];
}>;


export type CollabDiscussionThreadsQuery = (
  { __typename?: 'Query' }
  & { collab?: Maybe<(
    { __typename?: 'Collab' }
    & Pick<Collab, 'id'>
    & { discussionThreads: Array<(
      { __typename?: 'CollabDiscussionThread' }
      & Pick<CollabDiscussionThread, 'id' | 'title' | 'creationDate' | 'commentsCount' | 'reactionsCount'>
      & { author?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'avatar'>
      )> }
    )> }
  )> }
);

export type CollabThreadQueryVariables = Exact<{
  threadId: Scalars['ID'];
}>;


export type CollabThreadQuery = (
  { __typename?: 'Query' }
  & { thread?: Maybe<(
    { __typename?: 'CollabDiscussionThread' }
    & Pick<CollabDiscussionThread, 'id' | 'title' | 'content' | 'creationDate'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    )>, reactions: Array<(
      { __typename?: 'Reaction' }
      & Pick<Reaction, 'emojiId' | 'count' | 'isLiked'>
    )> }
  )> }
);

export type CollabThreadCommentsQueryVariables = Exact<{
  threadId: Scalars['ID'];
}>;


export type CollabThreadCommentsQuery = (
  { __typename?: 'Query' }
  & { thread?: Maybe<(
    { __typename?: 'CollabDiscussionThread' }
    & Pick<CollabDiscussionThread, 'id'>
    & { comments: Array<(
      { __typename?: 'CollabDiscussionThreadComment' }
      & Pick<CollabDiscussionThreadComment, 'id' | 'content' | 'creationDate' | 'isAuthor'>
      & { author?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'avatar'>
      )>, reactions: Array<(
        { __typename?: 'Reaction' }
        & Pick<Reaction, 'emojiId' | 'count' | 'isLiked'>
      )> }
    )> }
  )> }
);

export type TaskListQueryVariables = Exact<{
  collabId: Scalars['ID'];
}>;


export type TaskListQuery = (
  { __typename?: 'Query' }
  & { taskList: (
    { __typename?: 'TaskListPayload' }
    & { taskList: Array<(
      { __typename?: 'TaskList' }
      & Pick<TaskList, 'id' | 'name' | 'order'>
      & { tasks: Array<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'description' | 'order' | 'commentsCount' | 'taskListId'>
        & { assignee?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'avatar'>
        )>, assignedBy?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'avatar'>
        )>, author: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'avatar'>
        ) }
      )> }
    )> }
  ) }
);

export type TaskCommentsQueryVariables = Exact<{
  taskId: Scalars['ID'];
}>;


export type TaskCommentsQuery = (
  { __typename?: 'Query' }
  & { task?: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id'>
    & { comments: Array<(
      { __typename?: 'TaskComment' }
      & Pick<TaskComment, 'id' | 'content'>
      & { author?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'avatar'>
      )>, reactions: Array<(
        { __typename?: 'Reaction' }
        & Pick<Reaction, 'emojiId' | 'count' | 'isLiked'>
      )> }
    )> }
  )> }
);

export type OnlineChatFriendsQueryVariables = Exact<{ [key: string]: never; }>;


export type OnlineChatFriendsQuery = (
  { __typename?: 'Query' }
  & { onlineChatFriends: (
    { __typename?: 'OnlineFriendsPayload' }
    & { users: Array<(
      { __typename?: 'ChatUserPayload' }
      & Pick<ChatUserPayload, 'status'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'avatar'>
      ) }
    )> }
  ) }
);

export type NewNotificationSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewNotificationSubscription = (
  { __typename?: 'Subscription' }
  & { newNotification: (
    { __typename?: 'Notification' }
    & Pick<Notification, 'id' | 'message' | 'title' | 'type' | 'isRead' | 'url' | 'creationDate'>
  ) }
);

export type NewFriendRequestSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewFriendRequestSubscription = (
  { __typename?: 'Subscription' }
  & { newFriendRequest: (
    { __typename?: 'NewFriendRequestPayload' }
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    ) }
  ) }
);

export type FriendStatusChangeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type FriendStatusChangeSubscription = (
  { __typename?: 'Subscription' }
  & { friendStatusChange: (
    { __typename?: 'ChatUserPayload' }
    & Pick<ChatUserPayload, 'status'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    ) }
  ) }
);

export type NewPrivateChatMessageSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewPrivateChatMessageSubscription = (
  { __typename?: 'Subscription' }
  & { newPrivateChatMessage: (
    { __typename?: 'PrivateChatMessage' }
    & Pick<PrivateChatMessage, 'id' | 'authorId' | 'content' | 'creationDate'>
  ) }
);

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Collab: ResolverTypeWrapper<GQLCollab>;
  CollabDiscussionThread: ResolverTypeWrapper<GQLCollabDiscussionThread>;
  CreateThreadArgs: CreateThreadArgs;
  CollabDiscussionThreadComment: ResolverTypeWrapper<GQLCollabDiscussionThreadComment>;
  CreateCollabDiscussionThreadCommentInput: CreateCollabDiscussionThreadCommentInput;
  AddDiscussionThreadCommentReactionInput: AddDiscussionThreadCommentReactionInput;
  RemoveDiscussionThreadCommentReactionInput: RemoveDiscussionThreadCommentReactionInput;
  AddCollabDiscussionThreadReactionInput: AddCollabDiscussionThreadReactionInput;
  RemoveCollabDiscussionThreadReactionInput: RemoveCollabDiscussionThreadReactionInput;
  AdvancedPostsSearchInput: AdvancedPostsSearchInput;
  CollabPostsSearchResultsPayload: ResolverTypeWrapper<Omit<CollabPostsSearchResultsPayload, 'posts'> & { posts: Array<ResolversTypes['CollabPost']> }>;
  SearchPostsInput: SearchPostsInput;
  SearchPostsPayload: ResolverTypeWrapper<Omit<SearchPostsPayload, 'posts'> & { posts: Array<ResolversTypes['CollabPost']> }>;
  CollabPost: ResolverTypeWrapper<GQLCollabPost>;
  CollabPostsPayload: ResolverTypeWrapper<Omit<CollabPostsPayload, 'posts'> & { posts: Array<ResolversTypes['CollabPost']> }>;
  CollabPostArgs: CollabPostArgs;
  Experience: Experience;
  CollabPostComment: ResolverTypeWrapper<GQLCollabPostComment>;
  AddCollabPostCommentReactionInput: AddCollabPostCommentReactionInput;
  RemoveCollabPostCommentReactionInput: RemoveCollabPostCommentReactionInput;
  AddCollabPostReactionInput: AddCollabPostReactionInput;
  RemoveCollabPostReactionInput: RemoveCollabPostReactionInput;
  AddCollabTaskCommentReactionInput: AddCollabTaskCommentReactionInput;
  RemoveCollabTaskCommentReactionInput: RemoveCollabTaskCommentReactionInput;
  WallMessage: ResolverTypeWrapper<GQLWallMessage>;
  CreateWallMessageInput: CreateWallMessageInput;
  CollabWallMessagesPayload: ResolverTypeWrapper<Omit<CollabWallMessagesPayload, 'messages'> & { messages: Array<ResolversTypes['WallMessage']> }>;
  CollabWallMessagesInput: CollabWallMessagesInput;
  Subscription: ResolverTypeWrapper<{}>;
  Notification: ResolverTypeWrapper<Notification>;
  UserChatStatus: UserChatStatus;
  OnlineFriendsPayload: ResolverTypeWrapper<Omit<OnlineFriendsPayload, 'users'> & { users: Array<ResolversTypes['ChatUserPayload']> }>;
  ChatUserPayload: ResolverTypeWrapper<Omit<ChatUserPayload, 'user'> & { user: ResolversTypes['User'] }>;
  PrivateChatMessage: ResolverTypeWrapper<PrivateChatMessage>;
  SendPrivateChatMessageInput: SendPrivateChatMessageInput;
  PrivateMessage: ResolverTypeWrapper<GQLPrivateMessage>;
  PrivateMessagePreview: ResolverTypeWrapper<PrivateMessagePreview>;
  GetConversationPayload: ResolverTypeWrapper<Omit<GetConversationPayload, 'messages'> & { messages: Array<ResolversTypes['PrivateMessage']> }>;
  SendPrivateMessageInput: SendPrivateMessageInput;
  Reaction: ResolverTypeWrapper<Reaction>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Task: ResolverTypeWrapper<GQLCollabTask>;
  UpdateTaskInput: UpdateTaskInput;
  CreateTaskInput: CreateTaskInput;
  UpdateTaskAssigneeInput: UpdateTaskAssigneeInput;
  UpdateTaskPositionInput: UpdateTaskPositionInput;
  MoveTaskToListInput: MoveTaskToListInput;
  TaskComment: ResolverTypeWrapper<GQLCollabTaskComment>;
  CreateTaskCommentInput: CreateTaskCommentInput;
  CreateTaskListInput: CreateTaskListInput;
  UpdateTaskListNameInput: UpdateTaskListNameInput;
  UpdateTaskListPositionInput: UpdateTaskListPositionInput;
  TaskListPayload: ResolverTypeWrapper<Omit<TaskListPayload, 'taskList'> & { taskList: Array<ResolversTypes['TaskList']> }>;
  TaskList: ResolverTypeWrapper<GQLCollabTaskList>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  NewFriendRequestPayload: ResolverTypeWrapper<Omit<NewFriendRequestPayload, 'user'> & { user: ResolversTypes['User'] }>;
  CurrentUser: ResolverTypeWrapper<Omit<CurrentUser, 'collabInvites' | 'collabRequests' | 'collabs' | 'friendRequests' | 'friends' | 'tasks'> & { collabInvites: Array<ResolversTypes['Collab']>, collabRequests: Array<ResolversTypes['CollabRequest']>, collabs: Array<ResolversTypes['Collab']>, friendRequests: Array<ResolversTypes['User']>, friends: Array<ResolversTypes['User']>, tasks: Array<ResolversTypes['Task']> }>;
  User: ResolverTypeWrapper<GQLUser>;
  SearchUsersInput: SearchUsersInput;
  UpdateUserInfoInput: UpdateUserInfoInput;
  CollabRequest: ResolverTypeWrapper<Omit<CollabRequest, 'collab' | 'member'> & { collab: ResolversTypes['Collab'], member: ResolversTypes['User'] }>;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  SignUpArgs: SignUpArgs;
  LoginArgs: LoginArgs;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  String: Scalars['String'];
  Mutation: {};
  Boolean: Scalars['Boolean'];
  Collab: GQLCollab;
  CollabDiscussionThread: GQLCollabDiscussionThread;
  CreateThreadArgs: CreateThreadArgs;
  CollabDiscussionThreadComment: GQLCollabDiscussionThreadComment;
  CreateCollabDiscussionThreadCommentInput: CreateCollabDiscussionThreadCommentInput;
  AddDiscussionThreadCommentReactionInput: AddDiscussionThreadCommentReactionInput;
  RemoveDiscussionThreadCommentReactionInput: RemoveDiscussionThreadCommentReactionInput;
  AddCollabDiscussionThreadReactionInput: AddCollabDiscussionThreadReactionInput;
  RemoveCollabDiscussionThreadReactionInput: RemoveCollabDiscussionThreadReactionInput;
  AdvancedPostsSearchInput: AdvancedPostsSearchInput;
  CollabPostsSearchResultsPayload: Omit<CollabPostsSearchResultsPayload, 'posts'> & { posts: Array<ResolversParentTypes['CollabPost']> };
  SearchPostsInput: SearchPostsInput;
  SearchPostsPayload: Omit<SearchPostsPayload, 'posts'> & { posts: Array<ResolversParentTypes['CollabPost']> };
  CollabPost: GQLCollabPost;
  CollabPostsPayload: Omit<CollabPostsPayload, 'posts'> & { posts: Array<ResolversParentTypes['CollabPost']> };
  CollabPostArgs: CollabPostArgs;
  CollabPostComment: GQLCollabPostComment;
  AddCollabPostCommentReactionInput: AddCollabPostCommentReactionInput;
  RemoveCollabPostCommentReactionInput: RemoveCollabPostCommentReactionInput;
  AddCollabPostReactionInput: AddCollabPostReactionInput;
  RemoveCollabPostReactionInput: RemoveCollabPostReactionInput;
  AddCollabTaskCommentReactionInput: AddCollabTaskCommentReactionInput;
  RemoveCollabTaskCommentReactionInput: RemoveCollabTaskCommentReactionInput;
  WallMessage: GQLWallMessage;
  CreateWallMessageInput: CreateWallMessageInput;
  CollabWallMessagesPayload: Omit<CollabWallMessagesPayload, 'messages'> & { messages: Array<ResolversParentTypes['WallMessage']> };
  CollabWallMessagesInput: CollabWallMessagesInput;
  Subscription: {};
  Notification: Notification;
  OnlineFriendsPayload: Omit<OnlineFriendsPayload, 'users'> & { users: Array<ResolversParentTypes['ChatUserPayload']> };
  ChatUserPayload: Omit<ChatUserPayload, 'user'> & { user: ResolversParentTypes['User'] };
  PrivateChatMessage: PrivateChatMessage;
  SendPrivateChatMessageInput: SendPrivateChatMessageInput;
  PrivateMessage: GQLPrivateMessage;
  PrivateMessagePreview: PrivateMessagePreview;
  GetConversationPayload: Omit<GetConversationPayload, 'messages'> & { messages: Array<ResolversParentTypes['PrivateMessage']> };
  SendPrivateMessageInput: SendPrivateMessageInput;
  Reaction: Reaction;
  Date: Scalars['Date'];
  Task: GQLCollabTask;
  UpdateTaskInput: UpdateTaskInput;
  CreateTaskInput: CreateTaskInput;
  UpdateTaskAssigneeInput: UpdateTaskAssigneeInput;
  UpdateTaskPositionInput: UpdateTaskPositionInput;
  MoveTaskToListInput: MoveTaskToListInput;
  TaskComment: GQLCollabTaskComment;
  CreateTaskCommentInput: CreateTaskCommentInput;
  CreateTaskListInput: CreateTaskListInput;
  UpdateTaskListNameInput: UpdateTaskListNameInput;
  UpdateTaskListPositionInput: UpdateTaskListPositionInput;
  TaskListPayload: Omit<TaskListPayload, 'taskList'> & { taskList: Array<ResolversParentTypes['TaskList']> };
  TaskList: GQLCollabTaskList;
  Upload: Scalars['Upload'];
  NewFriendRequestPayload: Omit<NewFriendRequestPayload, 'user'> & { user: ResolversParentTypes['User'] };
  CurrentUser: Omit<CurrentUser, 'collabInvites' | 'collabRequests' | 'collabs' | 'friendRequests' | 'friends' | 'tasks'> & { collabInvites: Array<ResolversParentTypes['Collab']>, collabRequests: Array<ResolversParentTypes['CollabRequest']>, collabs: Array<ResolversParentTypes['Collab']>, friendRequests: Array<ResolversParentTypes['User']>, friends: Array<ResolversParentTypes['User']>, tasks: Array<ResolversParentTypes['Task']> };
  User: GQLUser;
  SearchUsersInput: SearchUsersInput;
  UpdateUserInfoInput: UpdateUserInfoInput;
  CollabRequest: Omit<CollabRequest, 'collab' | 'member'> & { collab: ResolversParentTypes['Collab'], member: ResolversParentTypes['User'] };
  AuthPayload: AuthPayload;
  SignUpArgs: SignUpArgs;
  LoginArgs: LoginArgs;
}>;

export type QueryResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  advancedPostsSearch?: Resolver<ResolversTypes['CollabPostsSearchResultsPayload'], ParentType, ContextType, RequireFields<QueryAdvancedPostsSearchArgs, 'input'>>;
  collab?: Resolver<Maybe<ResolversTypes['Collab']>, ParentType, ContextType, RequireFields<QueryCollabArgs, 'collabId'>>;
  collabPost?: Resolver<Maybe<ResolversTypes['CollabPost']>, ParentType, ContextType, RequireFields<QueryCollabPostArgs, 'postId'>>;
  collabPosts?: Resolver<ResolversTypes['CollabPostsPayload'], ParentType, ContextType, RequireFields<QueryCollabPostsArgs, 'limit' | 'offset'>>;
  collabPostsByStack?: Resolver<ResolversTypes['CollabPostsSearchResultsPayload'], ParentType, ContextType, RequireFields<QueryCollabPostsByStackArgs, 'limit' | 'offset' | 'stack'>>;
  collabWallMessages?: Resolver<ResolversTypes['CollabWallMessagesPayload'], ParentType, ContextType, RequireFields<QueryCollabWallMessagesArgs, 'input'>>;
  collabs?: Resolver<Array<ResolversTypes['Collab']>, ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['CurrentUser']>, ParentType, ContextType>;
  getConversation?: Resolver<ResolversTypes['GetConversationPayload'], ParentType, ContextType, RequireFields<QueryGetConversationArgs, 'limit' | 'offset' | 'userId'>>;
  languages?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  onlineChatFriends?: Resolver<ResolversTypes['OnlineFriendsPayload'], ParentType, ContextType>;
  searchFriends?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QuerySearchFriendsArgs, 'input'>>;
  searchPostsByTitle?: Resolver<ResolversTypes['CollabPostsSearchResultsPayload'], ParentType, ContextType, RequireFields<QuerySearchPostsByTitleArgs, 'input'>>;
  searchUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QuerySearchUsersArgs, 'input'>>;
  task?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<QueryTaskArgs, 'taskId'>>;
  taskList?: Resolver<ResolversTypes['TaskListPayload'], ParentType, ContextType, RequireFields<QueryTaskListArgs, 'collabId'>>;
  thread?: Resolver<Maybe<ResolversTypes['CollabDiscussionThread']>, ParentType, ContextType, RequireFields<QueryThreadArgs, 'threadId'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  acceptCollabInvitation?: Resolver<ResolversTypes['ID'], ParentType, CollabContextWithUser, RequireFields<MutationAcceptCollabInvitationArgs, 'collabId'>>;
  acceptFriendRequest?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationAcceptFriendRequestArgs, 'friendId'>>;
  acceptMemberRequest?: Resolver<ResolversTypes['ID'], ParentType, CollabContextWithUser, RequireFields<MutationAcceptMemberRequestArgs, 'collabId' | 'memberId'>>;
  addCollabDiscussionThreadCommentReaction?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAddCollabDiscussionThreadCommentReactionArgs, 'reaction'>>;
  addCollabDiscussionThreadReaction?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAddCollabDiscussionThreadReactionArgs, 'reaction'>>;
  addCollabPostCommentReaction?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAddCollabPostCommentReactionArgs, 'reaction'>>;
  addCollabPostReaction?: Resolver<ResolversTypes['CollabPost'], ParentType, ContextType, RequireFields<MutationAddCollabPostReactionArgs, 'reaction'>>;
  addCollabTaskCommentReaction?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAddCollabTaskCommentReactionArgs, 'reaction'>>;
  cancelRequestToJoin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCancelRequestToJoinArgs, 'collabId'>>;
  createCollabDiscussionThread?: Resolver<ResolversTypes['CollabDiscussionThread'], ParentType, ContextType, RequireFields<MutationCreateCollabDiscussionThreadArgs, 'thread'>>;
  createCollabDiscussionThreadComment?: Resolver<ResolversTypes['CollabDiscussionThreadComment'], ParentType, ContextType, RequireFields<MutationCreateCollabDiscussionThreadCommentArgs, 'input'>>;
  createCollabPost?: Resolver<ResolversTypes['CollabPost'], ParentType, ContextType, RequireFields<MutationCreateCollabPostArgs, 'post'>>;
  createComment?: Resolver<ResolversTypes['CollabPostComment'], ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'content' | 'postId'>>;
  createTask?: Resolver<ResolversTypes['Task'], ParentType, CollabContextWithUser, RequireFields<MutationCreateTaskArgs, 'input'>>;
  createTaskComment?: Resolver<ResolversTypes['TaskComment'], ParentType, CollabContextWithUser, RequireFields<MutationCreateTaskCommentArgs, 'input'>>;
  createTaskList?: Resolver<ResolversTypes['TaskList'], ParentType, CollabContextWithUser, RequireFields<MutationCreateTaskListArgs, 'input'>>;
  createWallMessage?: Resolver<ResolversTypes['WallMessage'], ParentType, ContextType, RequireFields<MutationCreateWallMessageArgs, 'input'>>;
  declineCollabInvitation?: Resolver<ResolversTypes['ID'], ParentType, CollabContextWithUser, RequireFields<MutationDeclineCollabInvitationArgs, 'collabId'>>;
  declineFriendRequest?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationDeclineFriendRequestArgs, 'senderId'>>;
  declineMemberRequest?: Resolver<ResolversTypes['ID'], ParentType, CollabContextWithUser, RequireFields<MutationDeclineMemberRequestArgs, 'collabId' | 'memberId'>>;
  deleteAllNotifications?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deleteCollab?: Resolver<ResolversTypes['Boolean'], ParentType, CollabContextWithUser, RequireFields<MutationDeleteCollabArgs, 'collabId'>>;
  deleteCollabDiscussionThread?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteCollabDiscussionThreadArgs, 'threadId'>>;
  deleteCollabDiscussionThreadComment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteCollabDiscussionThreadCommentArgs, 'commentId'>>;
  deleteCollabPost?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteCollabPostArgs, 'postId'>>;
  deleteComment?: Resolver<ResolversTypes['Boolean'], ParentType, CollabContextWithUser, RequireFields<MutationDeleteCommentArgs, 'commentId'>>;
  deleteNotification?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteNotificationArgs, 'notificationId'>>;
  deletePrivateMessage?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeletePrivateMessageArgs, 'messageId'>>;
  deleteTask?: Resolver<ResolversTypes['Boolean'], ParentType, CollabContextWithUser, RequireFields<MutationDeleteTaskArgs, 'taskId'>>;
  deleteTaskComment?: Resolver<ResolversTypes['Boolean'], ParentType, CollabContextWithUser, RequireFields<MutationDeleteTaskCommentArgs, 'commentId'>>;
  deleteTaskList?: Resolver<ResolversTypes['Boolean'], ParentType, CollabContextWithUser, RequireFields<MutationDeleteTaskListArgs, 'taskListId'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, CollabContextWithUser>;
  deleteWallMessage?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteWallMessageArgs, 'messageId'>>;
  inviteMember?: Resolver<ResolversTypes['User'], ParentType, CollabContextWithUser, RequireFields<MutationInviteMemberArgs, 'collabId' | 'memberId'>>;
  login?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'credentials'>>;
  markAllNotificationsAsRead?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  markNotificationAsRead?: Resolver<ResolversTypes['Notification'], ParentType, ContextType, RequireFields<MutationMarkNotificationAsReadArgs, 'notificationId'>>;
  markPrivateMessageAsRead?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationMarkPrivateMessageAsReadArgs, 'messageId'>>;
  moveTaskToList?: Resolver<ResolversTypes['Task'], ParentType, ContextType, RequireFields<MutationMoveTaskToListArgs, 'input'>>;
  removeCollabDiscussionThreadCommentReaction?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveCollabDiscussionThreadCommentReactionArgs, 'reaction'>>;
  removeCollabDiscussionThreadReaction?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveCollabDiscussionThreadReactionArgs, 'reaction'>>;
  removeCollabPostCommentReaction?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveCollabPostCommentReactionArgs, 'reaction'>>;
  removeCollabPostReaction?: Resolver<ResolversTypes['CollabPost'], ParentType, ContextType, RequireFields<MutationRemoveCollabPostReactionArgs, 'reaction'>>;
  removeCollabTaskCommentReaction?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveCollabTaskCommentReactionArgs, 'reaction'>>;
  removeFriend?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationRemoveFriendArgs, 'friendId'>>;
  removeMember?: Resolver<ResolversTypes['Collab'], ParentType, CollabContextWithUser, RequireFields<MutationRemoveMemberArgs, 'collabId' | 'memberId'>>;
  requestToJoin?: Resolver<ResolversTypes['Boolean'], ParentType, CollabContextWithUser, RequireFields<MutationRequestToJoinArgs, 'collabId'>>;
  sendFriendRequest?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationSendFriendRequestArgs, 'friendId'>>;
  sendPrivateChatMessage?: Resolver<ResolversTypes['PrivateChatMessage'], ParentType, ContextType, RequireFields<MutationSendPrivateChatMessageArgs, 'input'>>;
  sendPrivateMessage?: Resolver<ResolversTypes['PrivateMessage'], ParentType, ContextType, RequireFields<MutationSendPrivateMessageArgs, 'input'>>;
  signUp?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'credentials'>>;
  toggleAcceptInvites?: Resolver<ResolversTypes['Collab'], ParentType, CollabContextWithUser, RequireFields<MutationToggleAcceptInvitesArgs, 'collabId'>>;
  updateStatus?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateStatusArgs, 'status'>>;
  updateTask?: Resolver<ResolversTypes['Task'], ParentType, ContextType, RequireFields<MutationUpdateTaskArgs, 'input'>>;
  updateTaskAssignee?: Resolver<ResolversTypes['Task'], ParentType, ContextType, RequireFields<MutationUpdateTaskAssigneeArgs, 'input'>>;
  updateTaskListName?: Resolver<ResolversTypes['TaskList'], ParentType, ContextType, RequireFields<MutationUpdateTaskListNameArgs, 'input'>>;
  updateTaskListPosition?: Resolver<ResolversTypes['TaskList'], ParentType, ContextType, RequireFields<MutationUpdateTaskListPositionArgs, 'input'>>;
  updateTaskPosition?: Resolver<ResolversTypes['Task'], ParentType, ContextType, RequireFields<MutationUpdateTaskPositionArgs, 'input'>>;
  updateUserInfo?: Resolver<ResolversTypes['CurrentUser'], ParentType, ContextType, RequireFields<MutationUpdateUserInfoArgs, never>>;
  uploadAvatar?: Resolver<ResolversTypes['CurrentUser'], ParentType, ContextType, RequireFields<MutationUploadAvatarArgs, 'avatar'>>;
}>;

export type CollabResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['Collab'] = ResolversParentTypes['Collab']> = ResolversObject<{
  acceptsInvites?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  collabPostId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  discussionThreads?: Resolver<Array<ResolversTypes['CollabDiscussionThread']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invitationPending?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isMember?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isOwner?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  pendingInvites?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  pendingRequests?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  requestToJoinPending?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  taskList?: Resolver<Array<ResolversTypes['TaskList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CollabDiscussionThreadResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['CollabDiscussionThread'] = ResolversParentTypes['CollabDiscussionThread']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  collab?: Resolver<Maybe<ResolversTypes['Collab']>, ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['CollabDiscussionThreadComment']>, ParentType, ContextType>;
  commentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reactions?: Resolver<Array<ResolversTypes['Reaction']>, ParentType, ContextType>;
  reactionsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CollabDiscussionThreadCommentResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['CollabDiscussionThreadComment'] = ResolversParentTypes['CollabDiscussionThreadComment']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  collab?: Resolver<ResolversTypes['Collab'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isAuthor?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  reactions?: Resolver<Array<ResolversTypes['Reaction']>, ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes['CollabDiscussionThread']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CollabPostsSearchResultsPayloadResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['CollabPostsSearchResultsPayload'] = ResolversParentTypes['CollabPostsSearchResultsPayload']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes['CollabPost']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type SearchPostsPayloadResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['SearchPostsPayload'] = ResolversParentTypes['SearchPostsPayload']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes['CollabPost']>, ParentType, ContextType>;
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CollabPostResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['CollabPost'] = ResolversParentTypes['CollabPost']> = ResolversObject<{
  acceptsInvites?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  collabId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['CollabPostComment']>, ParentType, ContextType>;
  commentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  experience?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasStarted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invitationPending?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isMember?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isNew?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isOwner?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  languages?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  membersCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  pendingInvites?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  pendingRequests?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  reactions?: Resolver<Array<ResolversTypes['Reaction']>, ParentType, ContextType>;
  reactionsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requestToJoinPending?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stack?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CollabPostsPayloadResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['CollabPostsPayload'] = ResolversParentTypes['CollabPostsPayload']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes['CollabPost']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CollabPostCommentResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['CollabPostComment'] = ResolversParentTypes['CollabPostComment']> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isAuthor?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  reactions?: Resolver<Array<ResolversTypes['Reaction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type WallMessageResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['WallMessage'] = ResolversParentTypes['WallMessage']> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isAuthor?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CollabWallMessagesPayloadResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['CollabWallMessagesPayload'] = ResolversParentTypes['CollabWallMessagesPayload']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  messages?: Resolver<Array<ResolversTypes['WallMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type SubscriptionResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  friendStatusChange?: SubscriptionResolver<ResolversTypes['ChatUserPayload'], "friendStatusChange", ParentType, ContextType>;
  newFriendRequest?: SubscriptionResolver<ResolversTypes['NewFriendRequestPayload'], "newFriendRequest", ParentType, ContextType>;
  newNotification?: SubscriptionResolver<ResolversTypes['Notification'], "newNotification", ParentType, ContextType>;
  newPrivateChatMessage?: SubscriptionResolver<ResolversTypes['PrivateChatMessage'], "newPrivateChatMessage", ParentType, ContextType>;
}>;

export type NotificationResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = ResolversObject<{
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isRead?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type OnlineFriendsPayloadResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['OnlineFriendsPayload'] = ResolversParentTypes['OnlineFriendsPayload']> = ResolversObject<{
  users?: Resolver<Array<ResolversTypes['ChatUserPayload']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type ChatUserPayloadResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['ChatUserPayload'] = ResolversParentTypes['ChatUserPayload']> = ResolversObject<{
  status?: Resolver<ResolversTypes['UserChatStatus'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type PrivateChatMessageResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['PrivateChatMessage'] = ResolversParentTypes['PrivateChatMessage']> = ResolversObject<{
  authorId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type PrivateMessageResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['PrivateMessage'] = ResolversParentTypes['PrivateMessage']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isRead?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type PrivateMessagePreviewResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['PrivateMessagePreview'] = ResolversParentTypes['PrivateMessagePreview']> = ResolversObject<{
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GetConversationPayloadResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['GetConversationPayload'] = ResolversParentTypes['GetConversationPayload']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  messages?: Resolver<Array<ResolversTypes['PrivateMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type ReactionResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['Reaction'] = ResolversParentTypes['Reaction']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  emojiId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isLiked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type TaskResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = ResolversObject<{
  assignedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  assignee?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  authorId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  collab?: Resolver<ResolversTypes['Collab'], ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['TaskComment']>, ParentType, ContextType>;
  commentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  taskListId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type TaskCommentResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['TaskComment'] = ResolversParentTypes['TaskComment']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reactions?: Resolver<Array<ResolversTypes['Reaction']>, ParentType, ContextType>;
  task?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type TaskListPayloadResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['TaskListPayload'] = ResolversParentTypes['TaskListPayload']> = ResolversObject<{
  taskList?: Resolver<Array<ResolversTypes['TaskList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type TaskListResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['TaskList'] = ResolversParentTypes['TaskList']> = ResolversObject<{
  collab?: Resolver<ResolversTypes['Collab'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type NewFriendRequestPayloadResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['NewFriendRequestPayload'] = ResolversParentTypes['NewFriendRequestPayload']> = ResolversObject<{
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CurrentUserResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['CurrentUser'] = ResolversParentTypes['CurrentUser']> = ResolversObject<{
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collabInvites?: Resolver<Array<ResolversTypes['Collab']>, ParentType, ContextType>;
  collabRequests?: Resolver<Array<ResolversTypes['CollabRequest']>, ParentType, ContextType>;
  collabs?: Resolver<Array<ResolversTypes['Collab']>, ParentType, ContextType>;
  conversationsPreview?: Resolver<Array<ResolversTypes['PrivateMessagePreview']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  friendRequests?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  friendRequestsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  friends?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  github?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  linkedin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notifications?: Resolver<Array<ResolversTypes['Notification']>, ParentType, ContextType>;
  notificationsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  twitter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type UserResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  canRequestFriendship?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  collabs?: Resolver<Array<ResolversTypes['Collab']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isFriend?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isSelf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CollabRequestResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['CollabRequest'] = ResolversParentTypes['CollabRequest']> = ResolversObject<{
  collab?: Resolver<ResolversTypes['Collab'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type AuthPayloadResolvers<ContextType = CollabContext, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = ResolversObject<{
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Resolvers<ContextType = CollabContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Collab?: CollabResolvers<ContextType>;
  CollabDiscussionThread?: CollabDiscussionThreadResolvers<ContextType>;
  CollabDiscussionThreadComment?: CollabDiscussionThreadCommentResolvers<ContextType>;
  CollabPostsSearchResultsPayload?: CollabPostsSearchResultsPayloadResolvers<ContextType>;
  SearchPostsPayload?: SearchPostsPayloadResolvers<ContextType>;
  CollabPost?: CollabPostResolvers<ContextType>;
  CollabPostsPayload?: CollabPostsPayloadResolvers<ContextType>;
  CollabPostComment?: CollabPostCommentResolvers<ContextType>;
  WallMessage?: WallMessageResolvers<ContextType>;
  CollabWallMessagesPayload?: CollabWallMessagesPayloadResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  OnlineFriendsPayload?: OnlineFriendsPayloadResolvers<ContextType>;
  ChatUserPayload?: ChatUserPayloadResolvers<ContextType>;
  PrivateChatMessage?: PrivateChatMessageResolvers<ContextType>;
  PrivateMessage?: PrivateMessageResolvers<ContextType>;
  PrivateMessagePreview?: PrivateMessagePreviewResolvers<ContextType>;
  GetConversationPayload?: GetConversationPayloadResolvers<ContextType>;
  Reaction?: ReactionResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Task?: TaskResolvers<ContextType>;
  TaskComment?: TaskCommentResolvers<ContextType>;
  TaskListPayload?: TaskListPayloadResolvers<ContextType>;
  TaskList?: TaskListResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  NewFriendRequestPayload?: NewFriendRequestPayloadResolvers<ContextType>;
  CurrentUser?: CurrentUserResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  CollabRequest?: CollabRequestResolvers<ContextType>;
  AuthPayload?: AuthPayloadResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = CollabContext> = Resolvers<ContextType>;
