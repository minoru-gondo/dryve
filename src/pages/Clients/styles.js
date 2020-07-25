import styled from 'styled-components'

export const Container = styled.div`
  height: 886px;
  width: calc(100% - 85px);
  display: flex;
  flex-direction: column;
  margin: 30px 55px 30px 30px;
`;

export const Toolbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: ${props => props.jc};
`;

export const FilterOptions = styled.div`
  height: 36px;
  width: 106px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 13.7px 10px 11px;
  background: #fff;
  margin-right: 10px;
  border-radius: 4px;
  cursor: pointer;

  img {
    width: 18px;
    height: 12px;
    object-fit: cover;
    object-position: center;
    margin-right: 6.3px;
  }

  span {
    @import url('https://fonts.googleapis.com/css?family=Inter');
    font-family: 'Inter', sans-serif;
    color: #6200ee;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0;
  }
`;

export const InputSearchContainer = styled.div`
  height: 36px;
  width: 372px;
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.38);
  border-radius: 4px;

  input {
    width: 100%;
    flex: 1;
    height: 34px;
    border: none;
    padding-left: 11px;
    border-radius: 4px;
  }

  img {
    width: 17px;
    height: 17px;
    object-fit: cover;
    object-position: center;
    margin: 10px 16px;
  }
`;

export const Button = styled.div`
  height: 36px;
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px 17.9px 10px 13px;
  background: #6200ee;
  border-radius: 4px;

  img {
    width: 14px;
    height: 14px;
    object-fit: cover;
    object-position: center;
    margin-right: 7.1px;
  }

  span {
    @import url('https://fonts.googleapis.com/css?family=Inter');
    font-family: 'Inter', sans-serif;
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0;
  }
`;

export const ClientList = styled.div`
  height: 760px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  border-radius: 4px;
`;

export const HeaderList = styled.div`
  height: 55px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding-left: 23px;
  border-radius: 4px;
`;

export const HeaderItem = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  font-family: 'Inter', sans-serif;
  flex: ${props => props.flex};
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1.5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
  opacity: 50%;
  padding-right: 29px;
`;

export const ListRow = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding-left: 23px;
`;

export const ListItem = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  font-family: 'Inter', sans-serif;
  flex: ${props => props.flex};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: ${props => props.status === 'Cliente' ? '#0065ff' : (props.status === 'Lead' ? '#666666' : 'rgba(0, 0, 0, 0.87)')};
  padding-right: 29px;

  span {
    background: ${props => props.status === 'Cliente' ? '#f3f7ff' : (props.status === 'Lead' ? '#f6f6f6' : 'none')};
    padding: ${props => props.status === 'Cliente' ? '2px 20px' : (props.status === 'Lead' ? '2px 26px' : '')};
    border-radius: 13px;
  }

  img {
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 21px;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

export const TextPagination = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  letter-spacing: 0;
  color: #a5abb7;
`;

export const Number = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: rgba(0, 0, 0, 0.87);
  margin-left: 7px;
  cursor: pointer;
`;

export const ButtonsPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 12px;
    height: 16px;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
  }

  img:nth-child(1) {
    margin-right: 36px;
  }

  img:nth-child(2) {
    margin-right: 28px;
  }
`;
