import styled from 'styled-components'

export const Container = styled.div`
  height: 70px;
  width: 100%;
  position: relative;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
`;

export const Wrapper = styled.div`
  width: calc(100% - 64px);
  height: 100%;
  margin-left: 30px;
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.img`
  width: 101px;
  height: 34px;
  margin-top: 21px;
`;

export const Subtitle = styled.span`
   @import url('https://fonts.googleapis.com/css?family=Roboto');

   font-size: 10px;
   font-family: Roboto;
   line-height: 10px;
   letter-spacing: 0;
   color: #a5abb7;
   margin-top: 39px;
   margin-left: 7px;
  text-transform: uppercase;
   `;

export const ContainerLogo = styled.div`
  flex: 1;
  display: flex;
`;

export const ContainerButtons = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img:nth-child(2) {
    margin-left: 27px;
  }
`;
