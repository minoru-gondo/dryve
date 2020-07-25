import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: ${props => props.open ? '240px' : '80px'};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #e0e0e0;
`;

export const ContainerAvatar = styled.div`
  width: 100%;
  margin-top: 45px;
  padding-left: 15px;
  display: flex;
`;

export const AvatarWrapper = styled.div`
  max-height: 50px;
  max-width: 50px;
  min-height: 50px;
  min-width: 50px;
  padding: 3px;
  border-radius: 50%;
  border: 2px solid #1070ca;
  cursor: pointer;
`;

export const Avatar = styled.img`
  object-fit: cover;
  object-position: center;
`;

export const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 50px;
  flex: 1;
  margin-left: 18px;

  div {
    @import url('https://fonts.googleapis.com/css?family=Inter');
    min-width: 156px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 0.87);
  }
`;

export const Logout = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5px;
  cursor: pointer;

  img {
    margin: 2px 0px 2.5px;
  }

  span {
    @import url('https://fonts.googleapis.com/css?family=Inter');
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: 1.5px;
    color: #989898;
    margin-left: 5px;
  }
`;

export const ContainerMenuItems = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 18px;
`;

export const MenuItemWrapper = styled.div`
  width: 100%;
  padding-left: 15px;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  width: calc(100% - 15px);
  padding-left: 13px;
  background: ${props => props.open && (props.type === 'selected') ? '#f3f7ff' : '#fff'};
  border-radius: 4px;
  cursor: ${props => props.type !== 'disabled' ? 'pointer' : 'initial'};
  z-index: 1;

  span {
    @import url('https://fonts.googleapis.com/css?family=Inter');
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: ${props => props.type === 'selected' ? 'bold' : '500'};
    line-height: 16px;
    letter-spacing: 0.1px;
    color: ${props => props.type === 'selected' ? '#0065ff' : (props.type === 'disabled' ? '#e0e0e0' : 'rgba(0, 0, 0, 0.87)')};
    margin-left: 25px;
    text-decoration: none;
  }
`;
