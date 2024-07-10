import React from "react";
import styled from "styled-components";
import Body from "../components/Body";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
};

export default HomePage;

const Container = styled.div``;
