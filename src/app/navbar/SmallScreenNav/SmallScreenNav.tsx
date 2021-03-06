import React, { useReducer, useRef, useEffect } from 'react'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import PostAddIcon from '@material-ui/icons/PostAdd'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import { Flex, Divider, Text } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ReactComponent as SignInIcon } from '../../../assets/svgs/sign-in.svg'
import { ReactComponent as ShakeHandsIcon } from '../../../assets/svgs/shake-hands.svg'
import { useCurrentUser } from '../../../providers'
import { Container } from '../../../components/global'
import { NavUserPanel } from '../NavUserPanel'
import { SiteTopBar } from '../SiteTopBar'
import { useKey } from '../../../hooks/useKey'
import { SearchBar } from '../SearchBar'
import { LogoutButton } from '../../current-user-profile/LogoutButton'

export const SmallScreenNav = () => {
  const [isOpen, toggleIsOpen] = useReducer(prevState => !prevState, false)
  const currentUser = useCurrentUser()
  const menuButtonRef = useRef<HTMLButtonElement>(null!)

  useKey(['Esc', 'Escape'], toggleIsOpen, isOpen)

  useEffect(() => {
    if (!isOpen) {
      menuButtonRef.current.focus()
    }
  }, [isOpen])

  return (
    <>
      <SiteTopBar>
        <Container
          height="100%"
          flex={1}
          d="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <IconButton
            aria-label="navigation menu"
            ref={menuButtonRef}
            onClick={() => toggleIsOpen()}
          >
            {isOpen ? (
              <MenuOpenRoundedIcon width={32} height={32} />
            ) : (
              <MenuRoundedIcon width={32} height={32} />
            )}
          </IconButton>
          <SearchBar />
          {currentUser && <NavUserPanel />}
        </Container>
      </SiteTopBar>
      {isOpen && (
        <StyledMotion
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: '-100%', opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        >
          <Flex
            as="nav"
            direction="column"
            bg="white"
            onClick={() => toggleIsOpen()}
          >
            <StyledLink exact to="/">
              <HomeOutlinedIcon />
              Home
              <ArrowForwardIosIcon />
            </StyledLink>
            <StyledLink exact to="/collabs/posts">
              <ShakeHandsIcon height={24} width={24} />
              Collabs
              <ArrowForwardIosIcon />
            </StyledLink>
            <StyledLink to="/create">
              <PostAddIcon />
              Create
              <ArrowForwardIosIcon />
            </StyledLink>
            <StyledLink to="/search">
              <SearchRoundedIcon />
              Search
              <ArrowForwardIosIcon />
            </StyledLink>
            <Divider />
            {currentUser ? (
              <LogoutButton
                bg="white"
                height="48px"
                justifyContent="flex-start"
                fontWeight={300}
                _hover={{
                  bg: '#f3f3f3',
                }}
                _focus={{
                  bg: '#f3f3f3',
                }}
                _active={{
                  bg: '#f3f3f3',
                }}
              >
                <ExitToAppOutlinedIcon />
                <Text ml="0.5rem" as="span">
                  Sign Out
                </Text>
              </LogoutButton>
            ) : (
              <>
                <StyledLink to="/login">
                  <SignInIcon height={24} width={24} />
                  Log in
                  <ArrowForwardIosIcon />
                </StyledLink>
                <StyledLink to="/signup">
                  <PersonAddIcon />
                  Sign up
                  <ArrowForwardIosIcon />
                </StyledLink>
              </>
            )}
          </Flex>
        </StyledMotion>
      )}
    </>
  )
}

const StyledMotion = styled(motion.div)`
  position: fixed;
  top: 64px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 10;
`

const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  > svg {
    height: 32px;
    width: 32px;
  }
`

const StyledLink = styled(NavLink)`
  height: 48px;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
  font-weight: 300;
  svg:first-of-type {
    fill: currentColor;
    margin-right: 0.5rem;
  }
  svg:last-of-type {
    transition: transform 200ms;
    margin-left: auto;
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    background-color: #f3f3f3;
    svg:last-of-type {
      transform: translateX(0.5rem);
    }
  }
  &.active {
    border-left: 3px solid #964cff;
    padding-left: 1.5rem;
    color: #964cff;
    svg:first-of-type {
      color: #964cff;
    }
    svg:last-of-type {
      display: none;
    }
  }
`
