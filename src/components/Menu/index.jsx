import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Container, ContainerAvatar, AvatarWrapper, Avatar, AvatarInfo, Logout, ContainerMenuItems, MenuItemWrapper, MenuItem } from './styles'
import UserIcon from '../../assets/user.svg'
import LogoutIcon from '../../assets/logout.svg'
import HomeIcon from '../../assets/ic-home.svg'
import HomeIconSelected from '../../assets/ic-home-selected.svg'
import ClientIcon from '../../assets/ic-person.svg'
import ClientIconSelected from '../../assets/ic-person-selected.svg'
import vehicleIcon from '../../assets/ic-directions-car.svg'
import TriangulationIcon from '../../assets/ic-vector-triangle.svg'
import FinancialIcon from '../../assets/ic-account-balance-wallet.svg'

export default class Menu extends Component {
  state = {
    open: false,
    menuSelected: 'home'
  }

  toggleMenu = () => {
    const { open } = this.state
    this.setState({open: !open})
  }

  setMenuSelected = menuSelected => {
    this.setState({ menuSelected })
  }

  render() {
    const { open, menuSelected } = this.state
    return (
      <Container open={open}>
        <ContainerAvatar>
          <AvatarWrapper>
            <Avatar onClick={() => this.toggleMenu()} src={UserIcon} />
          </AvatarWrapper>
          {open && (
            <AvatarInfo>
              <div>Vinicius Malara</div>
              <Logout>
                <img src={LogoutIcon}  alt="logout" />
                <span>Sair</span>
              </Logout>
            </AvatarInfo>
          )}
        </ContainerAvatar>
        <ContainerMenuItems>
          <MenuItemWrapper>
            <Link to="/"  onClick={() => this.setMenuSelected('home')}>
              <MenuItem open={open} type={menuSelected === 'home' ? 'selected' : ''}>
                <img src={menuSelected === 'home' ? HomeIconSelected :HomeIcon}  alt="home" />
                {open && (
                <span>Início</span>
                )}
              </MenuItem>
            </Link>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <Link to="/clients" onClick={() => this.setMenuSelected('clients')}>
              <MenuItem open={open} type={menuSelected === 'clients' ? 'selected' : ''}>
                <img src={menuSelected === 'clients' ? ClientIconSelected :ClientIcon}  alt="clients" />
                {open && (
                <span>Clientes</span>
                )}
              </MenuItem>
            </Link>
          </MenuItemWrapper>
          <MenuItemWrapper onClick={() => {}}>
            <MenuItem open={open}>
              <img src={vehicleIcon}  alt="vehicles" />
              {open && (
              <span>Veículos</span>
              )}
            </MenuItem>
          </MenuItemWrapper>
          <MenuItemWrapper onClick={() => {}}>
            <MenuItem open={open}>
              <img src={TriangulationIcon}  alt="triangulation" />
              {open && (
              <span>Triangulação</span>
              )}
            </MenuItem>
          </MenuItemWrapper>
          <MenuItemWrapper onClick={() => {}}>
            <MenuItem open={open} type='disabled'>
              <img src={FinancialIcon}  alt="financial" />
              {open && (
              <span>Financeiro</span>
              )}
            </MenuItem>
          </MenuItemWrapper>
        </ContainerMenuItems>
      </Container>
    )
  }
}

