import React from 'react';
import Box from '../box';
import Text from '../text';
import Arrow from './arrow';
import {HoverWrapper} from './picture.style';

const HoverPicture = ({container, hoverButton}) => {
  return (
    <HoverWrapper {...container}>
      <Box className="bottom-banner" {...hoverButton}>
        <Text
          as="h5"
          content="From idea to final product. Find out more"
          color="mainText"
          mb="0px"
        />
        <Arrow />
      </Box>
    </HoverWrapper>
  );
};

HoverPicture.defaultProps = {
  container: {
    width: '570px',
    height: '388px',
    backgroundColor: '#c4c4c4',
    margin: '12px',
  },

  hoverButton: {
    backgroundColor: 'white',
    height: '50px',
    width: '100%',
    flexBox: true,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: '5px',
  },
};

export default HoverPicture;
