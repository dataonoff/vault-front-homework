import styled, { keyframes } from 'styled-components';

import ledgerLogo from 'url:../../../../../static/images/ledger_spinner.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.img.attrs({
  src: ledgerLogo,
})`
  margin: 10px;
  height: 30px;
  animation: ${rotate} 2s linear infinite;
`;

export default Spinner;
