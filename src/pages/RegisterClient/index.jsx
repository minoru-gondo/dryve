import React, { Component } from 'react'

import { Container, Toolbar, FormContainer, HeaderTabs, Tab, FieldsContainer, FieldsRow, AddPhone, Select, Footer, ButtonPrimary, ButtonDefault } from './styles'

import PlusBlueIcon from '../../assets/plus-blue.svg'
import ArrowDownIcon from '../../assets/arrow-down.svg'

export default class RegisterClient extends Component {

  render() {
    return (
      <Container>
        <Toolbar>Adicionar cliente</Toolbar>
        <FormContainer>
          <HeaderTabs>
            <Tab>Dados do cliente</Tab>
            <Tab>Dados do veículo</Tab>
            <Tab>Intenção de compra</Tab>
          </HeaderTabs>

          <FieldsContainer>
            <FieldsRow w50>
              <input placeholder="Nome" />
              <input placeholder="Sobrenome" />
            </FieldsRow>
            <FieldsRow w100>
              <input placeholder="E-mail" />
            </FieldsRow>
            <FieldsRow w50>
              <input placeholder="Telefone" />
              <AddPhone>
                <img src={PlusBlueIcon}  alt="add" />
                <span>adicionar outro</span>
              </AddPhone>
            </FieldsRow>
            <FieldsRow w50>
              <input placeholder="CEP" />
            </FieldsRow>
            <FieldsRow w100 disabled>
              <input placeholder="Endereço" />
            </FieldsRow>
            <FieldsRow w50 disabled>
              <input placeholder="Número" />
              <input placeholder="Complemento" />
            </FieldsRow>
            <FieldsRow w100 disabled>
              <input placeholder="Bairro" />
            </FieldsRow>
            <FieldsRow w50 disabled>
              <input placeholder="Cidade" />
              <Select w50 disabled>
                <span>Estado</span>
                <img src={ArrowDownIcon}  alt="select" />
              </Select>
            </FieldsRow>
          </FieldsContainer>
          <Footer>
            <ButtonPrimary>Salvar</ButtonPrimary>
            <ButtonDefault>Cancelar</ButtonDefault>
          </Footer>
        </FormContainer>
      </Container>
    )
  }
}

