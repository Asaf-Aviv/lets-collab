import {
  Model,
  Table,
  ForeignKey,
  Column,
  PrimaryKey,
  Default,
  BelongsTo,
  IsUUID,
  HasMany,
  CreatedAt,
} from 'sequelize-typescript'
import { v4 as uuid } from 'uuid'
import { CreateThreadArgs } from './../../graphql/types'
import { Collab } from './Collab'
import { User } from './User'
import { CollabMember } from './CollabMember'
import { CollabDiscussionThreadComment } from './CollabDiscussionThreadComment'
import { GQLResolverTypes } from '../../graphql/helpers/GQLResolverTypes'

@Table({ tableName: 'collab_discussion_threads' })
export class CollabDiscussionThread extends Model<CollabDiscussionThread> {
  @IsUUID(4)
  @Default(uuid)
  @PrimaryKey
  @Column
  id!: string

  @Column
  title!: string

  @Column
  content!: string

  @ForeignKey(() => Collab)
  @Column
  collabId!: string

  @BelongsTo(() => Collab, { foreignKey: 'collabId', onDelete: 'CASCADE' })
  collab!: Collab

  @ForeignKey(() => User)
  @Column
  authorId!: string

  @BelongsTo(() => User, { foreignKey: 'authorId', onDelete: 'SET NULL' })
  author!: User

  @HasMany(() => CollabDiscussionThreadComment)
  comments!: CollabDiscussionThreadComment[]

  @CreatedAt
  creationDate!: Date

  static async createThread(threadInput: CreateThreadArgs, authorId: string) {
    const { collabId } = threadInput
    const isMember = await CollabMember.findOne({
      where: { collabId, memberId: authorId },
    })

    if (!isMember) {
      throw new Error('You are not a member of this Collab')
    }

    return this.create(threadInput)
  }

  static async deleteThread(threadId: string, authorId: string) {
    const thread = await this.findByPk(threadId)

    if (!thread) {
      throw new Error('Thread not found')
    }

    if (thread.get('authorId') !== authorId) {
      throw new Error('You are not the author of this thread')
    }

    await thread.destroy()

    return true
  }
}

export type GQLCollabDiscussionThread = GQLResolverTypes<
  CollabDiscussionThread,
  'collab' | 'author'
>
