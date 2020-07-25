import styled from 'styled-components'

export const Container = styled.div`
  height: 59px;
  width: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  width: calc(100% - 86px);
  margin-left: 30px;
  height: 100%;
  hr {
    border-top: thin solid #dfe3e8;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Copyright = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  color: #616161;
  font-family: Roboto;
  line-height: 22px;
  font-size: 14px;
`;

export const Version = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  color: #6b6c6f;
  font-family: Roboto;
  line-height: 18px;
  font-size: 12px;
`;


