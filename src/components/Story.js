import React from "react";
import styled from "styled-components";

const Story = ({ img, bgImage, user }) => {
  return (
    <Container background={bgImage}>
      <img src={img} alt="Imagen de carrusel" />
      <h4>{user}</h4>
    </Container>
  );
};

export default Story;

const Container = styled.div`
  width: 8em;
  height: 100%;
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 15px;
  margin: 0 2px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
  h4 {
    font-size: 20px;
    font-weight: 500;
  }
`;
