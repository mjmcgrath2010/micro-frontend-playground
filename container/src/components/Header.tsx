import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  background: #1892bf;
  height: 60px;
  text-align: center;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
`;

const Pusher = styled.div`
  height: 60px;
  width: 100%;
  margin-bottom: 12px;
`;

const Header = () => {
  return (
    <>
      <StyledHeader>Container Header</StyledHeader>
      <Pusher />
    </>
  );
};

export default Header;
