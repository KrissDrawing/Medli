import React from "react";
import styled from "styled-components";
import Input from "Components/Input/Input";
import Logo from "assets/img/logo/logoLight.svg";
import FooterList from "./FooterList";
import { H5 } from "Components/Utility/Utility";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.tertiary};
    z-index: -1;
  }
`;

const MidFooter = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 80px;
  }
`;

const LogoImg = styled.img`
  width: 173px;
  margin: 64px 0 56px;
`;

const StyledH5 = styled(H5)`
  margin-bottom: 16px;
`;

const UnderlineSection = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Hr = styled.hr`
  color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 1px;
  opacity: 0.2;
  margin-bottom: 16px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <LogoImg src={Logo} alt="Medli Logo" />
      <MidFooter>
        <div>
          <StyledH5>Try Medli for free</StyledH5>
          <Input label="Try Medli for free" placeholder="Enter your email" type="email" />
        </div>
        <FooterList />
      </MidFooter>
      <UnderlineSection>
        <Hr />
        <StyledH5>Terms & Conditions</StyledH5>
      </UnderlineSection>
    </StyledFooter>
  );
};

export default Footer;
