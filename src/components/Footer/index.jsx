import React, { Component } from 'react'

import { Container, Wrapper, Content, Copyright, Version } from './styles'

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <hr/>
          <Content>
            <Copyright>2020 © Dryve Tecnologia Ltda.</Copyright>
            <Version>Versão 1.0.1</Version>
          </Content>
        </Wrapper>
      </Container>
    )
  }
}

