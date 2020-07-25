import React, { Component } from 'react'
import _ from 'lodash'

import { Container, HeaderContainer, HeaderText, SelectFilter, TableHeader, TableHeaderItem, TableBody, TableRow, TableColumn, ContainerImg, ContainerData, CarName, CarInfo, PriceText, PriceValue, Status, Date, SeeAllContainer, SeeAllText } from './styles'

import SelectFilterIcon from '../../assets/arrow-down.svg'
import seeAllIcon from '../../assets/arrow-right.svg'
import CarImg from '../../assets/images/car.jpg'

export default class LastAvaliations extends Component {

  state = {
    lastAvaliationsData: [
      {
        model: 'jeep compass',
        board: 'GDL8019',
        year: '2018',
        fuelType: 'Diesel',
        auto: true,
        km: '70.972 KM',
        price: 'R$ 115.560',
        minPrice: 'R$ 115.560',
        status: 'Aguardando precificação',
        create_at: '18/04/2020 às 14:35'
      },
      {
        model: 'jeep compass',
        board: 'GDL8019',
        year: '2018',
        fuelType: 'Diesel',
        auto: true,
        km: '70.972 KM',
        price: 'R$ 115.560',
        minPrice: 'R$ 115.560',
        status: 'Aguardando precificação',
        create_at: '18/04/2020 às 14:35'
      },
      {
        model: 'jeep compass',
        board: 'GDL8019',
        year: '2018',
        fuelType: 'Diesel',
        auto: true,
        km: '70.972 KM',
        price: 'R$ 115.560',
        minPrice: 'R$ 115.560',
        status: 'Aguardando precificação',
        create_at: '18/04/2020 às 14:35'
      },
      {
        model: 'jeep compass',
        board: 'GDL8019',
        year: '2018',
        fuelType: 'Diesel',
        auto: true,
        km: '70.972 KM',
        price: 'R$ 115.560',
        minPrice: 'R$ 115.560',
        status: 'Aguardando precificação',
        create_at: '18/04/2020 às 14:35'
      },
      {
        model: 'jeep compass',
        board: 'GDL8019',
        year: '2018',
        fuelType: 'Diesel',
        auto: true,
        km: '70.972 KM',
        price: 'R$ 115.560',
        minPrice: 'R$ 115.560',
        status: 'Aguardando precificação',
        create_at: '18/04/2020 às 14:35'
      },
      {
        model: 'jeep compass',
        board: 'GDL8019',
        year: '2018',
        fuelType: 'Diesel',
        auto: true,
        km: '70.972 KM',
        price: 'R$ 115.560',
        minPrice: 'R$ 115.560',
        status: 'Aguardando precificação',
        create_at: '18/04/2020 às 14:35'
      }
    ]
  }

  render() {
    const { lastAvaliationsData } = this.state
    return (
      <Container>
        <HeaderContainer>
          <HeaderText>Últimas avaliações</HeaderText>
          <SelectFilter>
            <HeaderText>Hoje</HeaderText>
            <img src={SelectFilterIcon} alt="select" />
          </SelectFilter>
        </HeaderContainer>
        <TableHeader>
          <TableHeaderItem flex="3 1 0">Dados do veículo</TableHeaderItem>
          <TableHeaderItem flex="1 1 0">Valor</TableHeaderItem>
          <TableHeaderItem flex="2 1 0">Status</TableHeaderItem>
        </TableHeader>
        <TableBody>
          {_.map(lastAvaliationsData, (la, idx) => {

            return (
              <TableRow key={idx}>
                <TableColumn flex="3 1 0">
                  <ContainerImg>
                    <img src={CarImg} alt={`car ${idx}`} />
                  </ContainerImg>
                  <ContainerData>
                    <CarName>{_.get(la, 'model', '')}</CarName>
                    <CarInfo>{_.get(la, 'board')}</CarInfo>
                    <CarInfo>{`${_.get(la, 'year')} - ${_.get(la, 'fuelType', '')}`}</CarInfo>
                    <CarInfo>{_.get(la, 'auto') ? `AUTOMÁTICO - ${_.get(la, 'km')}` : _.get(la, 'km')}</CarInfo>
                  </ContainerData>
                </TableColumn>
                <TableColumn flex="1 1 0">
                  <ContainerData>
                    <PriceText>Anúncio</PriceText>
                    <PriceValue>{_.get(la, 'price')}</PriceValue>
                    <PriceText>Mínimo aceito</PriceText>
                    <PriceText>{_.get(la, 'minPrice')}</PriceText>
                  </ContainerData>
                </TableColumn>
                <TableColumn flex="2 1 0">
                  <ContainerData>
                    <Status>{_.get(la, 'status')}</Status>
                    <Date>{_.get(la, 'create_at')}</Date>
                  </ContainerData>
                </TableColumn>
              </TableRow>
            )
          })

          }
        </TableBody>
        <SeeAllContainer>
          <SeeAllText>Ver tudo</SeeAllText>
          <img src={seeAllIcon} alt="see all" />
        </SeeAllContainer>
      </Container>
    )
  }
}

