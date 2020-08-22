import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'itc-avant-garde-gothic-pro', sans-serif;
  font-weight: 600;
  src: url('../assets/fonts/itc-avantgarde-gothic-bold.ttf');
  font-style: normal;
}

@font-face {
  font-family: 'itc-avant-garde-gothic-pro', sans-serif;
  font-weight: 500;
  src: url('../assets/fonts/itc-avantgarde-gothic-regular.ttf');
  font-style: normal;
}

@font-face {
  font-family: 'minion-pro', serif;
  font-weight: 400;
  src: url('../assets/fonts/minion-pro-regular.ttf');
  font-style: normal;
}
  body{
    font-family: 'monion-pro', serif;
    background-color: ${props => props.theme.mainBrand};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'itc-avant-garde-gothic-pro', sans-serif;
    margin-top: 0;
  }

`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  .sticky-nav-active {
    .portfolio_navbar {
      background: #fff;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 15px 0;

      .main-logo {
        display: none;
      }
      .logo-alt {
        display: block;
      }
    }
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
`;
