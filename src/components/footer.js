import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const style = { color: "white", textDecoration: "none" };

  return (
    <FooterContainer>
      <FooterTextWrap>
        &copy; 2020 Helix
        <NavLink to="/eCommerceStore/privacy" style={style}>
          Privacy
        </NavLink>
      </FooterTextWrap>
    </FooterContainer>
  );
};

/** Styles */
const FooterContainer = styled.div`
  display: flex;
  height: 35px;
  width: 100vw;
  background-color: #049287;
  align-items: flex-end;
`;

const FooterTextWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 8px;
  color: white;
`;

export default Footer;
