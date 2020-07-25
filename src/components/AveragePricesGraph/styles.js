import styled from 'styled-components'

export const Container = styled.div`
  height: 226px;
  width: 100%;
  padding-top: 20px;
  padding-left: 20px;
  position: relative;
  background: #fff;
  border-radius: 4px;
`;

export const TitleGraph = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

export const ContainerGraphData = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 142px;
    height: 142px;
    object-fit: contain;
    object-position: center;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
`;

export const ContainerLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    margin-left: 8px;
    margin-right: 6px;
    @import url('https://fonts.googleapis.com/css?family=Inter');
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 0.87);
  }

  span {
    @import url('https://fonts.googleapis.com/css?family=Inter');
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0;
    color: #a5abb7;
  }
`;

export const Bullet = styled.div`
  font-size: 24px !important;
  color: ${props => props.color} !important;
  margin: 0 !important;
`;
