import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #000000;
`;
const NavIcon = styled.div`
  font-size: 2rem;
  color: #ffffff;
  font-weight: 600;
`;

const Navigation: React.FC = () => {
  return (
    <Container>
      <NavIcon>AUTH</NavIcon>
    </Container>
  );
};

export default Navigation;
