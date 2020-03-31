import React from 'react'
import { Text } from '@chakra-ui/core'
import { AvatarWithUsername } from '../AvatarWithUsername/AvatarWithUsername'
import { User } from '../../graphql/generates'
import styled from '@emotion/styled'
import { Paper } from '../global'

type Props = {
  id: string
  content: string
  author: Pick<User, 'id' | 'avatar' | 'username'>
  children?: React.ReactNode
}

export const Comment = ({ /* id ,*/ content, author, children }: Props) => (
  <CommentContainer as="article" direction="column" align="start" p={6}>
    <AvatarWithUsername size="sm" {...author} />
    <Text mt={2} mb={4}>
      {content}
    </Text>
    {children}
  </CommentContainer>
)

const CommentContainer = styled(Paper)`
  & + & {
    margin-top: 1.5rem;
  }
`
