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
          fluid {
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
            width={['100%', '80%', '80%', '50%', '50%']}
            // ml={['10px', '10px', '-20px', '-50px', '0px']}
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
    flex: 1,
  },
  textContainer: {
    width: ['100%', '80%', '80%', '45%', '45%'],
    ml: ['0', '0', '0', '15px', '15px'],
    mt: ['10px', '10px', '10px', '0px', '0px'],

    flexBox: true,
    alignItems: 'flex-start',
    flexDirection: 'column',
    p: '10px',
  },
};

export default AboutMe;
