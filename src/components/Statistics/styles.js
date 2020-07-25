import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 170px;
  padding: 30px 45px 30px 20px;
  display: flex;
  flex-direction: row;
`;

export const StatisticContainer = styled.div`
  width: 387px;
  height: 110px;
  padding: 0 20px;
  margin: 0px 10px;
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
`;

export const ContainerInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Title = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inter');

  font-size: 10px;
  font-family: 'Inter', sans-serif;
  color: rgba(0, 0, 0, 0.87);
  line-height: 16px;
  letter-spacing: 1.5px;
  opacity: 50%;
  text-transform: uppercase;
`;

export const Number = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 45px;

  div {
    font-size: 34px;
    font-family: 'Inter', sans-serif;
    color: rgba(0, 0, 0, 0.87);
    line-height: 36px;
    letter-spacing: 0;
  }
`;

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #f3f7ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PercentInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: -5px;

  span {
    margin-right: 5px;
    color: ${props => props.percentStatus === 'positive' ? '#6200ee' : '#fc4a40'};
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.4px;
  }

  div {
    @import url('https://fonts.googleapis.com/css?family=Inter');

    font-size: 11px;
    font-family: 'Inter', sans-serif;
    line-height: 16px;
    letter-spacing: 0;
    color: rgba(0, 0, 0, 0.87);
    opacity: 50%;
  }
`;
