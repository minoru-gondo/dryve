import React, { Component } from 'react'
import _ from 'lodash'

import { Container, Title, ContainerPurchaseIntentions, PurchaseIntention } from './styles'

import HyundaiIcon from '../../assets/brands/hyundai.jpg'
import ChevroletIcon from '../../assets/brands/chevrolet.jpg'
import JeepIcon from '../../assets/brands/jeep.jpg'
import VwIcon from '../../assets/brands/vw.jpg'
import NissanIcon from '../../assets/brands/nissan.jpg'

export default class TopPurchaseintentions extends Component {

  state= {
    purchaseIntentions: [
      {
        model: 'HB20',
        value: 197,
        logo: HyundaiIcon
      },
      {
        model: 'Onix',
        value: 183,
        logo: ChevroletIcon
      },
      {
        model: 'Renegade',
        value: 125,
        logo: JeepIcon
      },
      {
        model: 'T-Cross',
        value: 109,
        logo: VwIcon
      },
      {
        model: 'Kicks',
        value: 86,
        logo: NissanIcon
      },
    ]
  }

  render() {
    const { purchaseIntentions } = this.state
    return (
      <Container>
        <Title>Top intenções de compra</Title>
        <ContainerPurchaseIntentions>
          {_.map(purchaseIntentions, (p, idx) => {
            return (
              <PurchaseIntention rankPos={idx} key={idx}>
                <img src={_.get(p, 'logo')}  alt="logo" />
                <div>{_.get(p, 'model')}</div>
                <span>{_.get(p, 'value', 0)}</span>
              </PurchaseIntention>
            )
          })

          }
        </ContainerPurchaseIntentions>
      </Container>
    )
  }
}

