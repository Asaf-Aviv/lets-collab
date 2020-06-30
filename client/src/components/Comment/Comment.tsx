import React from 'react'
import { Text, Flex, Box } from '@chakra-ui/core'
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
  <CommentContainer
    as="article"
    flexDirection="column"
    alignItems="start"
    boxShadow="0 1px 1px 1px #c3c3c3"
    p={3}
  >
    <Flex as="header" justifyContent="space-between">
      <AvatarWithUsername size="sm" {...author} />
    </Flex>
    <Box pl={10}>
      <Text mt={2} mb={4}>
        {content}
      </Text>
      {children}
    </Box>
  </CommentContainer>
)

const CommentContainer = styled(Paper)`
  & + & {
    margin-top: 1.5rem;
  }
`
