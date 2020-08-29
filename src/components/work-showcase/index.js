import React from 'react';
import Container from '../container';
import HoverPicture from '../hover-picture';
import {ShowcaseWrapper} from './showcase.style';

const WorkShowcase = () => {
  return (
    <Container noGutter mobileGutter width="1200px">
      <ShowcaseWrapper>
        <HoverPicture />
        <HoverPicture />
        <HoverPicture />
        <HoverPicture />
      </ShowcaseWrapper>
    </Container>
  );
};

WorkShowcase.defaultProps = {};

export default WorkShowcase;
