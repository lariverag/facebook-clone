import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import facebook from "../assets/icon/facebook.png";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import MenuIcon from "@mui/icons-material/Menu";
import MenuPuntos from "..//assets/icon/menu-de-puntos.png";
import messenger from "..//assets/icon/messenger.png";
import campana from "..//assets/icon/campana.png";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <Container>
      <HeaderLeft>
        <img src={facebook} alt="Logo de Facebook" />
        <InputSearch>
          <SearchIcon />
          <input type="search" placeholder="Buscar en Facebook" />
        </InputSearch>
      </HeaderLeft>
      <HeaderCenter>
        <IconCenter>
          <HomeIcon />
        </IconCenter>
        <IconCenter>
          <OndemandVideoIcon />
        </IconCenter>
        <IconCenter>
          <StorefrontIcon />
        </IconCenter>
        <IconCenter>
          <SupervisedUserCircleIcon />
        </IconCenter>
        <IconCenter>
          <DashboardCustomizeIcon />
        </IconCenter>
        <IconCenterMenu>
          <MenuIcon />
        </IconCenterMenu>
      </HeaderCenter>
      <HeaderRight>
        <IconRight>
          <img src={MenuPuntos} alt="Menu de puntos" />
        </IconRight>
        <IconRight>
          <img src={messenger} alt="Messenger" />
        </IconRight>
        <IconRight>
          <img src={campana} alt="Icono de la campana" />
        </IconRight>
        <Avatar />
      </HeaderRight>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  background-color: white;
  height: 4em;
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  border-bottom: 1px solid #cfcfcf;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.25;
  padding: 10px 0 10px 15px;

  img {
    width: 50px;
    height: 50px;
  }
`;

const InputSearch = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  border: 1px solid black;
  width: 70%;
  border-radius: 25px;
  background-color: #cfcfcf;
  padding-left: 10px;

  input {
    background-color: transparent;
    border: none;
    outline: none;
    margin-left: 10px;
    width: 80%;
    font-size: 15px;
  }
  @media (max-width: 1200px) {
    width: 50px;
    heigth: 50px;

    input {
      display: none;
    }
  }
`;

const HeaderCenter = styled.div`
  display: flex;
  flex: 0.5;
  align-items: center;
  justify-content: space-around;
  padding: 0 15px;

  @media (max-width: 990px) {
    justify-content: flex-start;
  }
`;

const IconCenter = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .MuiSvgIcon-root {
    font-size: 40px;
  }
  :hover {
    border-bottom: 5px solid blue;
    color: blue;

    .MuiSvgIcon-root {
      color: blue;
    }
  }
  @media (max-width: 990px) {
    display: none;
  }
`;

const IconCenterMenu = styled(IconCenter)`
  display: none;

  @media (max-width: 990px) {
    display: flex;
  }
`;

const HeaderRight = styled.div`
  flex: 0.25;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;

  .MuiAvatar-root {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
`;

const IconRight = styled.div`
  width: 50px;
  height: 50px;
  background-color: #cfcfcf;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  marging-right: 15px;

  img {
    width: 30px;
  }
`;
