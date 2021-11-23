import React from "react";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};

export default Layout;
