import styled from 'styled-components'

export const Container = styled.div`
  width: calc(100% - 85px);
  display: flex;
  flex-direction: column;
  margin: 22px 55px 30px 30px;
`;

export const Toolbar = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  font-family: 'Inter', sans-serif;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 22px;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 759px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 4px;
`;

export const HeaderTabs = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  text-transform: uppercase;

  div:nth-child(1) {
    color: #6200ee;
    border-bottom: 1px solid #6200ee;
  }
`;

export const Tab = styled.div`
  height: 48px;
  width: 400px;
  flex: 1 1 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.38);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

export const FieldsContainer = styled.div`
  height: 553px;
  width: 100%;
  margin: 40px 0px 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FieldsRow = styled.div`
  height: 56px;
  width: 540px;
  margin-bottom: 16px;
  opacity: ${props => props.disabled ? '50%' : '70%'};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  input {
    height: 54px;
    width: ${props => props.w50 ? '50%' : '100%'};
    border: 1px solid rgba(0, 0, 0, 0.38);
    opacity: ${props => props.disabled ? '50%' : '70%'};
    padding-left: 16px;
    border-radius: 4px;
    pointer-events: ${props => props.disabled ? 'none' : 'initial'};
  }

  input:nth-child(1) {
    margin-right: ${props => props.w50 ? '16px' : ''};
  }
`;

export const AddPhone = styled.div`
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  cursor: pointer;

  img {
    width: 12px;
    height: 12px;
    object-fit: cover;
    object-position: center;
    margin-right: 5px;
  }

  span {
    color: #0065ff;
  }
`;

export const Select = styled.div`
    height: 54px;
    width: ${props => props.w50 ? '50%' : '100%'};
    border: 1px solid rgba(0, 0, 0, 0.38);
    opacity: ${props => props.disabled ? '50%' : '70%'};
    padding-left: 16px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

  img {
    width: 20px;
    height: 20px;
    object-fit: cover;
    object-position: center;
    margin: 16px;
  }

  span {
    color: rgba(0, 0, 0, 1);
    opacity: ${props => props.disabled ? '60%' : '70%'};
  }
`;

export const Footer = styled.div`
    height: 78px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 0px 20px 20px;
    background: #f3f7ff;
    border-top: 1px solid #eee;
`;

export const ButtonPrimary = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Inter');
    font-family: 'Inter', sans-serif;
    height: 36px;
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    background: #6200ee;
    color: #fff;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0;
    border-radius: 4px;
    cursor: pointer;
`;

export const ButtonDefault = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Inter');
    font-family: 'Inter', sans-serif;
    height: 36px;
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    border: 1px solid #eee;
    color: #fff;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0;
    color: #6200ee;
    border-radius: 4px;
    cursor: pointer;
`;
