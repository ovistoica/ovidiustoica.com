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
    margin: 0px;
  }

  h1 {
    /* Page Title */
    font-family: 'itc-avant-garde-gothic-pro', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 46px;
    line-height: 63px;
  };

  h2 {
    /* Second header */
    font-family: 'itc-avant-garde-gothic-pro', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
    margin-top: 0;
  }
 
 h3 {
   /* Card Title */
    font-family: 'itc-avant-garde-gothic-pro', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 27px;
    /* identical to box height, or 112% */
    text-align: center;
 }

  h4 {
    /* Footer title */
    font-family: 'itc-avant-garde-gothic-pro', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
  }


  h5 {
     /* Modal Action */
     font-family: 'itc-avant-garde-gothic-pro', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
  }


  h6 {
    font-family: 'itc-avant-garde-gothic-pro', sans-serif;
    margin-top: 0;
  }

  a {
    /* Link */
    font-family: 'itc-avant-garde-gothic-pro', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: ${props => props.theme.colors.mainBrand};
    padding: 8px 12px 8px 12px;
    transition: 0.4s;

    &:hover {
      color: ${props => props.theme.colors.mainText};
      transition: 0.4s;
    }
  }

`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  .sticky-nav-active {
    .portfolio_navbar {
      background: #fff;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 15px 0;
    }
  }

  .nav-item {
    font-family: 'itc-avant-garde-gothic-pro', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
  }

  .page-title {
    font-family: 'itc-avant-garde-gothic-pro', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 46px;
    line-height: 63px;
  }

  .description {
    /* description */
    font-family: 'monion-pro', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
  }

  .page-subtitle {
    /* Page Subtitle */
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    /* or 133% */
    text-align: center;
  }

  .quote {
    /* Quote */
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 42px;
    /* or 131% */

    text-align: center;
  }
`;
