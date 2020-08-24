import React from 'react';
import PropTypes from 'prop-types';
import Text from '../text';
import Box from '../box';
import Container from '../container';
import WebdevIcon from '../svg/webdev';
import {FooterWrapper} from './footer.style';
import Button from '../button';
import {ic_arrow_forward} from 'react-icons-kit/md/ic_arrow_forward';
import {Icon} from 'react-icons-kit';
import useBreakpoint from '../../hooks/useBreakpoint';

const Footer = ({row, col, iconContainer, footerCol}) => {
  const breakpoints = useBreakpoint();
  const svgWidth = breakpoints && breakpoints.lg ? 300 : null;
  const footerStyle = {
    ...footerCol,
    ...(breakpoints && breakpoints.lg && {maxWidth: '200px'}),
  };

  const buttonIcon = <Icon icon={ic_arrow_forward} size={25} />;
  return (
    <FooterWrapper>
      <Container noGutter mobileGutter width="1440px">
        <Box {...row}>
          <Box {...iconContainer}>
            <WebdevIcon width={svgWidth} />
          </Box>
          <Box
            {...col}
            width={[1, 1, 1, 1 / 2, 1 / 1.5]}
            ml={['0px', '0px', '30px', '30px', '50px']}
          >
            <Text
              as="h2"
              content="If you're eager to build your new application or have an old one redone, I am here and ready to work."
              color="mainText"
              textAlign="left"
              mb="10px"
            />
            <Text
              className="description"
              content="Since 2016, I've helped business owners like you to bring their ideas into reality."
              color="secondaryText"
              textAlign="left"
              mr="200px"
            />
            <Button title="Let's work together" icon={buttonIcon} />
          </Box>
        </Box>
        <Box {...row} justifyContent="space-evenly">
          <Box {...footerStyle}>
            <Text as="h4" content="Stoica Ovidiu " color="mainText" />
            <Text
              maxWidth={breakpoints && breakpoints.lg && '120px'}
              content="Handcrafted by me © 2020"
              color="mainText"
              classname="description"
              mb="10px"
            />
            <a href="https://www.iubenda.com/en/privacy-and-cookie-policy-generator?utm_source=adwords&utm_medium=ppc&utm_campaign=aw_general_restoftheworld_exact&utm_term=privacy%20policy&utm_content=326103716360&gclid=Cj0KCQjwp4j6BRCRARIsAGq4yMFYTzaOxOWhlYmiAg7mnMpPtgHBN2TLrDna7pQiWZ8Aq8ps0zQTjVEaArjuEALw_wcB">
              <Text content="Privacy Policy" />
            </a>
          </Box>
          <Box {...footerStyle}>
            <Text as="h4" content="Work together " color="mainText" />
            <Text
              content="If you have a passion for programming and want to learn how to build scalable web and mobile applications, go ahead and introduce yourself."
              color="mainText"
              classname="description"
              mb="10px"
            />
            <a href="mailto:ovidiu.stoica1094@gmail.com">
              <Text content="Say hello" />
            </a>
          </Box>
          <Box {...footerStyle}>
            <Text as="h4" content="Get Social" color="mainText" />
            <a href="https://www.facebook.com/stoica.ovidiu.3">
              <Text content="Facebook" mb="10px" />
            </a>
            <a href="https://www.instagram.com/stoica94/">
              <Text content="Instagram" mb="10px" />
            </a>
            <a href="https://www.linkedin.com/in/george-ovidiu-stoica-6b74b9123/">
              <Text content="LinkedIn" mb="10px" />
            </a>
          </Box>
          <Box {...footerStyle}>
            <Text as="h4" content="Contact" color="mainText" />
            <a href="mailto:ovidiu.stoica1094@gmail.com">
              <Text content="Send an email" mb="10px" />
            </a>
            <a href="tel:+40745901643">
              <Text content="+40 745901643" mb="10px" />
            </a>
          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  titleStyle: PropTypes.object,
  linkStyle: PropTypes.object,
  copyrightStyle: PropTypes.object,
  contactItem: PropTypes.object,
  flexBox: PropTypes.object,
  noMargin: PropTypes.object,
  iconContainer: PropTypes.object,
  footerCol: PropTypes.object,
};

Footer.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    mb: ['0', '70px', '80px', '100px', '100px'],
    justifyContent: 'center',
    width: '100%',
  },
  iconContainer: {
    pl: '15px',
    pr: '15px',
    mb: ['40px', '0', '0', '0', '0', '0'],
    flexBox: true,
    width: [1, 1, 1, 1 / 3, 1 / 3.5],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3, 1 / 3],
    pl: '15px',
    pr: '15px',
    mb: ['40px', '0', '0', '0', '0', '0'],
  },
  linkStyle: {
    fontSize: ['22px', '26px', '26px', '30px'],
    color: 'mainBrand',
    mb: 0,
  },
  copyrightStyle: {
    fontSize: '14px',
    color: '#fff',
  },
  footerCol: {
    width: [1, 1 / 2, 1 / 2, 1 / 4, 1 / 4],
    mb: ['40px', '0', '0', '0', '0', '0'],
  },
  flexBox: {
    flexBox: true,
    justifyContent: 'space-between',
    // flexWrap: 'wrap'
  },
  contactItem: {
    // width: 1 / 2
  },
  noMargin: {
    mb: '0',
  },
};

export default Footer;
