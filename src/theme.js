import { createGlobalStyle, css } from "styled-components";

export const Fonts = createGlobalStyle`
body {
    font-family: 'Play';
    color: ${({ theme }) => theme.color};
}

* {
  border: none;
  outline: none;

  &:hover,
  &:link,
  &:target,
  &:active,
  &:visited,
  &:focuse,
  &:focuse-visible,
  &:focuse-within {
    border: none;
    outline: none;
  }
}

`;

export const breakpoints = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
};

export const biggerThen = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

const theme = {
  color: "#fff",
  border: "0.4rem",
  spacing: "0.25rem",
  controlBackground: "#29bb89cc",
  gradient: "linear-gradient(152deg, #8BC6EC 0%, #9599E2 100%)",
  oldGradient:
    "background-image: linear-gradient(76.3deg,rgba(44, 62, 78, 1) 12.6%,rgba(69, 103, 131, 1) 82.8%)",
  mediaQuery: { biggerThen },
};

export default theme;
