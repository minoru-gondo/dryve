import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 794px;
  position: relative;
  margin-right: 20px;
  background: #fff;
  border-radius: 4px;
`;

export const HeaderContainer = styled.div`
  margin: 18px 27px 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: rgba(0, 0, 0, 0.87);
`;

export const SelectFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TableHeader = styled.div`
  margin: 18px 27px 18px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableHeaderItem = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  flex: ${props => props.flex || '1 1 0'};
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1.5px;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
  opacity: 50%;
`;

export const TableBody = styled.div`
  height: 504px;
  overflow-y: auto;

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.12);
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #d8d7d7;
    cursor: pointer;
}
`;

export const TableRow = styled.div`
  height: 100px;
  display: flex;
`;

export const TableColumn = styled.div`
  flex: ${props => props.flex || '1 1 0'};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;

export const ContainerImg = styled.div`
  margin: 20px 10px 20px 20px;

  img {
    width: 80px;
    height: 60px;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
  }
`;

export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CarName = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 16px;
  letter-spacing: 0;
  color: #1e2c4c;
  margin-bottom: 4px;
`;

export const CarInfo = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  line-height: 10px;
  letter-spacing: 0.33px;
  color: #768095;
  margin-bottom: 5px;
`;

export const PriceText = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 0.33px;
  color: #768095;
  margin-bottom: 4px;
  text-transform: uppercase;
`;

export const PriceValue = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0;
  color: #1e2c4c;
  margin-bottom: 6px;
`;

export const Status = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0;
  color: #768095;
  padding: 7px 16px 7px 17px;
  margin-bottom: 11px;
  background: #f3f7ff;
  border-radius: 13px;
`;

export const Date = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  letter-spacing: 0;
  color: #a5abb7;
  text-align: center;
`;

export const SeeAllContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 26.5px;
  height: 40px;
`;

export const SeeAllText = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #0065ff;
  cursor: pointer;
`;
