import React from 'react';
import {NavbarStyle, CallToAction} from './navbar.style';
import {Link} from 'gatsby';
import Box from '../box';
import Text from '../text';
import {Icon} from 'react-icons-kit';
import {ic_arrow_forward} from 'react-icons-kit/md/ic_arrow_forward';

const Navbar = ({row, logo}) => {
  return (
    <NavbarStyle>
      <Link href="/" style={logo}>
        <Text className="page-title" content="Log" color="mainText" />
        <Text className="page-title" content="o" color="accent" />
      </Link>
      <Box {...row} justifyContent="space-evenly" flex="0.5">
        <Link href="/services">
          <Text content="Services" />
        </Link>
        <Link href="/work">
          <Text content="Work" />
        </Link>
        <Link href="/about">
          <Text content="About" />
        </Link>

        <CallToAction>
          <Link href="/contact" style={logo}>
            <Text content="Start your project" mb="0px" />
            <Icon icon={ic_arrow_forward} size={24} />
          </Link>
        </CallToAction>
      </Box>
    </NavbarStyle>
  );
};

Navbar.defaultProps = {
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
  },
};

export default Navbar;
