import React from 'react';
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';
import Container from '../container';
import {AboutMeWrapper} from './aboutMe.style';
import Box from '../box';
import Text from '../text';

const AboutMe = ({row, textContainer}) => {
  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: {eq: "ovidiu.png"}) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <AboutMeWrapper>
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box
            width={['550px', '550px', '6000px', '400px', '450px']}
            ml={['10px', '10px', '-20px', '-50px', '0px']}
          >
            <Img fluid={data.about.childImageSharp.fluid} />
          </Box>
          <Box {...textContainer}>
            <Text content="My mission" as="h2" color="mainText" />
            <Text
              className="about-description"
              color="mainText"
              content="I believe in people over profit and strive to operate my business with integrity and trust. Always, the strongest assets and greatest resources are the relationships we build."
            />
            <Text
              className="description"
              color="secondaryText"
              content="When you choose to work with me, you're not just choosing a developer. You're choosing to grow your business to its full potential."
            />
          </Box>
        </Box>
      </Container>
    </AboutMeWrapper>
  );
};

AboutMe.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    width: ['550px'],
    height: ['400px'],
    flexBox: true,
    alignItems: 'flex-start',
    flexDirection: 'column',
    p: '10px',
  },
};

export default AboutMe;
