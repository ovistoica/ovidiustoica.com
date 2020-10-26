import React from 'react';
import Box from '../box';
import Container from '../container';
import Text from '../text';
import {ThankyouWrapper} from './style';
import Button from '../button';
import {Link} from 'gatsby';

const ThankYou = () => {
  return (
    <ThankyouWrapper>
      <Container noGutter mobileGutter width="600px">
        <Box
          py="100px"
          flexBox={true}
          justifyContent="center"
          flexDirection="column"
        >
          <Text
            as="h2"
            content="Thanks for introducing yourself."
            color="mainText"
          />
          <Text
            className="description"
            content="I appreciate the opportunity to discuss your project. You can expect to hear from me soon."
            color="secondaryText"
          />
          <Link href="/">
            <Button title="Back to home" />
          </Link>
        </Box>
      </Container>
    </ThankyouWrapper>
  );
};

export default ThankYou;
