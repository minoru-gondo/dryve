import React, { Component } from 'react'

import { Container, TitleGraph, ContainerGraphData, ContainerInfo, ContainerLine, Bullet } from './styles'

import GraphImg from '../../assets/images/graph.png'
import HelpIcon from '../../assets/ic-help.svg'

export default class AveragePricesGraph extends Component {
  render() {
    return (
      <Container>
        <TitleGraph>Preços - Dryve x KBB &nbsp; <img src={HelpIcon} alt="título" /></TitleGraph>
        <ContainerGraphData>
          <img src={GraphImg} alt="graph" />
          <ContainerInfo>
            <ContainerLine>
              <Bullet color="#1070ca">&#8226;</Bullet>
              <div>Na média</div>
              <span>60%</span>
            </ContainerLine>
            <ContainerLine>
              <Bullet color="#ec4c47">&#8226;</Bullet>
              <div>Acima da média</div>
              <span>25%</span>
            </ContainerLine>
            <ContainerLine>
              <Bullet color="#f7d154">&#8226;</Bullet>
              <div>Abaixo da média</div>
              <span>15%</span>
            </ContainerLine>
          </ContainerInfo>
        </ContainerGraphData>
      </Container>
    )
  }
}

