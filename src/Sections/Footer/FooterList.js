import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { H5 } from "Components/Utility/Utility";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 63px 0 55px;

  & > div:nth-of-type(1) {
    margin-right: 58px !important;
  }
  & > div:nth-of-type(2) {
    margin-right: 118px !important;
  }

  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    flex-direction: row;
    margin: 0;
  }
`;
const StyledUl = styled.ul`
  list-style: none;
  margin: 19px 0 31px 0;
  &:last-of-type {
    margin: 19px 0 0 0;
  }
`;
const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.fontSecondaryLight};
  text-decoration: none;
`;

const FooterList = () => {
  return (
    <Wrapper>
      <div>
        <H5>Products</H5>
        <StyledUl>
          <li>
            <StyledNavLink to="/updates">Updates</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/security">Security</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/chrome-extension">Chrome Extension</StyledNavLink>
          </li>
        </StyledUl>
      </div>
      <div>
        <H5>Company</H5>
        <StyledUl>
          <li>
            <StyledNavLink to="/about">About</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/blog">Blog</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/join-us">Join Us</StyledNavLink>
          </li>
        </StyledUl>
      </div>
      <div>
        <H5>Help</H5>
        <StyledUl>
          <li>
            <StyledNavLink to="/talk-to-support">Talk to Support</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/support-docs">Support Docs</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/api-docs">API Docs</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/system-status">System Status</StyledNavLink>
          </li>
        </StyledUl>
      </div>
    </Wrapper>
  );
};

export default FooterList;
