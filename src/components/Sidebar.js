import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HistoryIcon from "@mui/icons-material/History";
import FlagIcon from "@mui/icons-material/Flag";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Sidebar = () => {
  return (
    <Container>
      <GroupList>
        <ListItem
          avatar
          img="https://randomuser.me/api/portraits/men/34.jpg"
          name="Usuario"
        />

        <ListItem Icon={PeopleIcon} name="Amigos" />
        <ListItem Icon={GroupsIcon} name="Grupos" />
        <ListItem Icon={StorefrontIcon} name="MarketPlace" />
        <ListItem Icon={OndemandVideoIcon} name="Watch" />
        <ListItem Icon={HistoryIcon} name="Recuerdos" />
        <ListItem Icon={BookmarkIcon} name="Guardados" />
        <ListItem Icon={FlagIcon} name="Páginas" />
        <ListItem Icon={KeyboardArrowDownIcon} name="Ver" />
      </GroupList>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: sticky;
  top: 8vh;
  left: 0;
  height: 100vh;
`;

const GroupList = styled.div``;
