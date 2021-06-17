import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

export default createGlobalStyle`
  *, *:after, *:before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    border: none;
  }

  html {
    box-sizing: border-box;
  }

  body {
    padding: 24px;
    background-color: ${({ theme }): string => theme.palette.main.primary};
  }
`;
