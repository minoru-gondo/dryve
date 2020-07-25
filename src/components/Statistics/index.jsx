import React, { Component } from 'react'
import _ from 'lodash'
import { Container, StatisticContainer, ContainerInfo, PercentInfo, ContainerIcon, Title, Number, IconWrapper } from './styles'
import CarIcon from '../../assets/ic-directions-car-blue.svg'
import ComputerStarIcon from '../../assets/ic-important-devices.svg'
import DollarIcon from '../../assets/ic-attach-money.svg'
import PositiveIcon from '../../assets/ic-arrow-positive.svg'
import NegativeIcon from '../../assets/ic-arrow-negative.svg'

export default class Statistics extends Component {


  getIconByType = type => {
    let icon = null
    switch (type) {
      case 'car':
        icon = CarIcon
        break;
      case 'computerStar':
        icon = ComputerStarIcon
        break;
      case 'dollar':
        icon = DollarIcon
        break;
      default:
        break;
    }
    return icon
  }

  render() {
    const { data } = this.props
    return (
      <Container>
        {_.get(data, 'length', 0) > 0 && (
          _.map((data), (s, idx) => {
            let numberText = _.get(s, 'valueType', '') === 'money' ? new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(_.get(s, 'value', 0)) : _.get(s, 'value', 0)
            let percentIcon = _.get(s, 'percentStatus', '') === 'positive' ? PositiveIcon : NegativeIcon
            return (
              <StatisticContainer key={idx}>
                  <ContainerInfo>
                    <Title>{_.get(s, 'title', '')}</Title>
                    <Number>
                      <div>{numberText}</div>
                    </Number>
                    <PercentInfo percentStatus={_.get(s, 'percentStatus', '')}>
                      <img src={percentIcon}  alt="percent" />
                      <span>{_.get(s, 'percent')}</span>
                      <div>{_.get(s, 'percentext')}</div>
                    </PercentInfo>
                  </ContainerInfo>
                  <ContainerIcon>
                    <IconWrapper>
                      <img src={this.getIconByType(_.get(s, 'icon', ''))}  alt="icon" />
                    </IconWrapper>
                  </ContainerIcon>
              </StatisticContainer>
            )
          })
        )}
      </Container>
    )
  }
}

