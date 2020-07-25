import React, { Component } from 'react'

import Statistics from '../../components/Statistics'
import ContainerProductsData from '../../components/ContainerProductsData'
import LastAvaliations from '../../components/LastAvaliations'
import ContainerTopListAndAverage from '../../components/ContainerTopListAndAverage'
import TopPurchaseintentions from '../../components/TopPurchaseintentions'
import AveragePricesGraph from '../../components/AveragePricesGraph'

export default class Home extends Component {

  state = {
    statisticsData: [
      {
        title: 'Avaliações Hoje',
        value: 29,
        valueType: 'integer',
        percent: '36%',
        percentStatus: 'positive',
        percentext: 'desde ontem',
        icon: 'car'
      },
      {
        title: 'Carros Publicados',
        value: 397,
        valueType: 'integer',
        percent: '4%',
        percentStatus: 'positive',
        percentext: 'este mês',
        icon: 'computerStar'
      },
      {
        title: 'Ticket Médio do Estoque',
        value: 42567,
        valueType: 'money',
        percent: '6%',
        percentStatus: 'negative',
        percentext: 'este mês',
        icon: 'dollar'
      }
    ]
  }

  render() {
    const { statisticsData } = this.state
    return (
      <>
        <Statistics data={statisticsData} />
        <ContainerProductsData>
          <LastAvaliations />
          <ContainerTopListAndAverage>
            <TopPurchaseintentions />
            <AveragePricesGraph />
          </ContainerTopListAndAverage>
        </ContainerProductsData>
      </>
    )
  }
}

