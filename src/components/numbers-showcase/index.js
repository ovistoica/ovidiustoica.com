import React from 'react';
import Text from '../text';
import Box from '../box';
import {NumbersShowcaseWrapper} from './showcase.style';

/* Small element for statistics */
const NumberStatistic = ({title, description}) => {
  return (
    <Box
      flexBox={true}
      flexDirection="column"
      p="10px"
      px={['20px', '40px', '50px', '10px', '0px']}
      alignItems="center"
    >
      <Text content={title} as="h1" color="mainText" mb="5px" />
      <Text
        content={description}
        className="description"
        color="secondaryText"
      />
    </Box>
  );
};

const NumbersShowcase = () => {
  return (
    <NumbersShowcaseWrapper
      width={['350px', '450px', '650px', '700px', '1000px']}
    >
      <NumberStatistic title="2015" description="year founded" />
      <NumberStatistic title="1M+" description="users of projects" />
      <NumberStatistic title="98.7%" description="client satisfaction" />
      <NumberStatistic title="100k+" description="lines of code" />
    </NumbersShowcaseWrapper>
  );
};

NumbersShowcase.defaultProps = {};

export default NumbersShowcase;
