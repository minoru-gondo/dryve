import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import { Container, Toolbar, Wrapper, FilterOptions, Button, InputSearchContainer, ClientList, HeaderList, HeaderItem, ListRow, ListItem, Footer, Pagination, TextPagination, Number, ButtonsPagination } from './styles'

import FilterIcon from '../../assets/filter.svg'
import PlusIcon from '../../assets/plus.svg'
import SearchIcon from '../../assets/ic-search.svg'
import ArrowDownIcon from '../../assets/arrow-down.svg'
import ArrowLeftIcon from '../../assets/ic-arrow-left.svg'
import ArrowRightIcon from '../../assets/ic-arrow-right.svg'
import MoreIcon from '../../assets/ic-more.svg'

export default class Clients extends Component {

  state = {
    clientsList: [
      {
        name: 'Paulo Henrique Mattos',
        status: 'Cliente',
        phone: '(16) 99653-8899',
        email: 'ph.mattos@gmail.com'
      },
      {
        name: 'Juliana Martins Silva',
        status: 'Cliente',
        phone: '(16) 99819-3112',
        email: 'jumartins.silva@hotmail.com'
      },
      {
        name: 'Luís Rocha',
        status: 'Cliente',
        phone: '(16) 99776-9290',
        email: 'luisrocha@yahoo.com.br'
      },
      {
        name: 'Paulo Henrique Mattos',
        status: 'Cliente',
        phone: '(16) 99653-8899',
        email: 'ph.mattos@gmail.com'
      },
      {
        name: 'Juliana Martins Silva',
        status: 'Cliente',
        phone: '(16) 99819-3112',
        email: 'jumartins.silva@hotmail.com'
      },
      {
        name: 'Luís Rocha',
        status: 'Lead',
        phone: '(16) 99776-9290',
        email: 'luisrocha@yahoo.com.br'
      },
      {
        name: 'Paulo Henrique Mattos',
        status: 'Lead',
        phone: '(16) 99653-8899',
        email: 'ph.mattos@gmail.com'
      },
      {
        name: 'Juliana Martins Silva',
        status: 'Cliente',
        phone: '(16) 99819-3112',
        email: 'jumartins.silva@hotmail.com'
      },
      {
        name: 'Luís Rocha',
        status: 'Cliente',
        phone: '(16) 99776-9290',
        email: 'luisrocha@yahoo.com.br'
      },
      {
        name: 'Paulo Henrique Mattos',
        status: 'Cliente',
        phone: '(16) 99653-8899',
        email: 'ph.mattos@gmail.com'
      }
    ]
  }

  render() {
    const { clientsList } = this.state
    return (
      <Container>
        <Toolbar>
          <Wrapper jc="flex-start">
            <FilterOptions>
              <img src={FilterIcon}  alt="filter" />
              <span>Filtrar</span>
            </FilterOptions>
            <InputSearchContainer>
              <input placeholder="Buscar por nome..." />
              <img src={SearchIcon}  alt="search" />
            </InputSearchContainer>
          </Wrapper>
          <Wrapper jc="flex-end">
            <Link to="/clients/add">
              <Button>
                <img src={PlusIcon}  alt="add" />
                <span>Adicionar</span>
              </Button>
            </Link>
          </Wrapper>
        </Toolbar>

        <ClientList>
          <HeaderList>
            <HeaderItem flex="0 0 0"><input type="checkbox" /></HeaderItem>
            <HeaderItem flex="2 1 0">Nome</HeaderItem>
            <HeaderItem flex="1 1 0">Status</HeaderItem>
            <HeaderItem flex="1 1 0">Telefone</HeaderItem>
            <HeaderItem flex="2 1 0">E-mail</HeaderItem>
            <HeaderItem flex="0 0 0"></HeaderItem>
          </HeaderList>
          {_.map(clientsList, (c, idx) => {
            return (
              <ListRow key={idx}>
                <ListItem flex="0 0 0"><input type="checkbox" /></ListItem>
                <ListItem flex="2 1 0">{_.get(c, 'name')}</ListItem>
                <ListItem flex="1 1 0" status={_.get(c, 'status')}><span>{_.get(c, 'status')}</span></ListItem>
                <ListItem flex="1 1 0">{_.get(c, 'phone')}</ListItem>
                <ListItem flex="2 1 0">{_.get(c, 'email')}</ListItem>
                <ListItem flex="0 0 0"><img src={MoreIcon} alt="more" /></ListItem>
              </ListRow>
            )
          })}
          <Footer>
            <Pagination>
              <TextPagination>Itens por página</TextPagination>
              <Number>10</Number>
              <img src={ArrowDownIcon} alt="select" />
              <TextPagination>1-10 de 3.456</TextPagination>

            </Pagination>
            <ButtonsPagination>
              <img src={ArrowLeftIcon} alt="back" />
              <img src={ArrowRightIcon} alt="forward" />
            </ButtonsPagination>
          </Footer>

        </ClientList>
      </Container>
    )
  }
}

