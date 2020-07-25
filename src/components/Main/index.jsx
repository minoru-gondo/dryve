import React, { Component } from 'react'

import Menu from '../Menu'
import Container from '../Container'
import Navbar from '../Navbar'
import Content from '../Content'
import Footer from '../Footer'

export default class Main extends Component {
  render() {
    const {children} = this.props
    return (
      <>
        <Menu />
        <Container>
          <Navbar />
          <Content>
            {children}
          </Content>
          <Footer />
        </Container>
      </>
    )
  }
}
