import { css } from "styled-components";

export const PrimaryButton = css`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;

export const H2 = styled.h2`
  font-family: "Rozha One", serif;
  color: ${({ theme }) => theme.colors.fontPrimaryDark};
  font-size: 50px;

  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    font-size: 80px;
  }
`;

export const H2Light = styled.h2`
  font-family: "Rozha One", serif;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 80px;
`;

export const H4 = styled.h4`
  font-family: "Rozha One", serif;
  font-size: 24px;
`;
