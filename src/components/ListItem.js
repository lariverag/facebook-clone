import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ListItem = ({ avatar, img, name, Icon }) => {
  return (
    <Container>
      {avatar && <Avatar src={img} />}
      {Icon && <Icon />}
      <h4>{name}</h4>
    </Container>
  );
};

export default ListItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;

  .MuiAvatar-root {
    width: 50px;
    height: 50px;
  }

  h4 {
    margin-left: 15px;
    font-size: 20px;
    font-weight: 500;
  }

  .MuiSvgIcon-root {
    font-size: 30px;
    color: #3964bf;
  }

  :hover {
    background-color: #808080;
  }
`;
