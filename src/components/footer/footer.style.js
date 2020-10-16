import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  $animate: all 0.2s ease-in-out;

  display: border-box;
  max-width: 1216px;
  margin: 10px auto 10px auto;

  a {
    padding: 0px;
  }

  .web-icon {
    width: 394px;
    @media (max-width: 768px) {
      align-self: center;
      width: 300px;
    }
  }

  .center-footer-col {
    align-items: center;

    @media (max-width: 768px) {
      align-items: flex-start;
    }
  }
`;
