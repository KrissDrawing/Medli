import styled, { css } from "styled-components";

export const PrimaryButton = css`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;

export const H2 = styled.h2`
  font-family: "Rozha One", serif;
  color: ${({ theme }) => theme.colors.fontPrimaryDark};
  font-size: 50px;
  line-height: 117%;

  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    font-size: 80px;
  }
`;

export const H2Light = styled.h2`
  font-family: "Rozha One", serif;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 6px;
  font-size: 80px;

  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    margin-bottom: 16px;
  }
`;

export const H4 = styled.h4`
  font-family: "Rozha One", serif;
  font-size: 24px;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.fontPirmaryLight};

  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    font-size: 24px;
    line-height: 36px;
  }
`;
