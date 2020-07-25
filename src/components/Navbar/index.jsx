import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Container, Wrapper, ContainerLogo, ContainerButtons, Logo, Subtitle } from './styles'
import LogoImg from '../../assets/logo.svg'
import NotificationIcon from '../../assets/ic-notifications.svg'
import SearchIcon from '../../assets/ic-search.svg'

export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <ContainerLogo>
            <Link to="/">
              <Logo src={LogoImg} />
              <Subtitle>Backoffice</Subtitle>
            </Link>
          </ContainerLogo>
          <ContainerButtons>
            <img src={SearchIcon} alt="search" />
            <img src={NotificationIcon} alt="notification" />
          </ContainerButtons>
        </Wrapper>
      </Container>
    )
  }
}

