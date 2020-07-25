import styled from 'styled-components'

export const Container = styled.div`
  height: 384px;
  width: 100%;
  position: relative;
  margin-bottom: 30px;
  background: #fff;
  border-radius: 4px;
`;

export const Title = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: rgba(0, 0, 0, 0.87);
  margin-top: 18px;
  margin-left: 20px;
`;

export const ContainerPurchaseIntentions = styled.div`
  margin: 16px 20px 2px 20px;
`;

export const PurchaseIntention = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-top: ${props => props.rankPos === 0 ? 'none' : '1px solid rgba(0, 0, 0, 0.12)'};
  height: 64px;

  img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    object-position: center;
  }

  div {
    @import url('https://fonts.googleapis.com/css?family=Inter');
    font-family: 'Inter', sans-serif;
    flex: 1px;
    padding-left: 14px;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 0.87);
  }

  span {
    @import url('https://fonts.googleapis.com/css?family=Inter');
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 0.87);
    padding-right: 38px;
  }
`;
