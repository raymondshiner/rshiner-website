import { css } from "styled-components";

export const theme = {
  primary: "#2bc5e0",
  dark: "#191919",
  secondaryText: "#dddddddd",
  backgroundHighlight: "#424242",
  fadeIn: css`
    animation: fade 2s;
    @keyframes fade {
      from {
        opacity: 0;
      }
    }
  `,
};
