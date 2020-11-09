import React from 'react';
import Box from '../box';
import Text from '../text';
import QuoteIcon from './quoteIcon';
import Container from '../container';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import {QuoteWrapper} from './quote.style';

const QuoteCard = ({
  container,
  authorName,
  authorDescription,
  imageContainer,
  nameContainer,
  authorContainer,
}) => {
  const data = useStaticQuery(graphql`
    query {
      author: file(relativePath: {eq: "robert.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <QuoteWrapper>
      <Container noGutter mobileGutter width="1200px">
        <Box {...container}>
          <QuoteIcon />
          <Text
            className="quote"
            content="Ovidiu helped me build Framey, the travel app that I was dreaming about for years. His work is performant, transparent and on time! I would absolutely recommend his services"
          />

          <Box {...authorContainer}>
            <Box {...imageContainer}>
              <Img fluid={data.author.childImageSharp.fluid} />
            </Box>
            <Box {...nameContainer}>
              <Text as="h3" content={authorName} mb="0px" color="mainText" />
              <Text
                content={authorDescription}
                mb="0px"
                color="secondaryText"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </QuoteWrapper>
  );
};

QuoteCard.defaultProps = {
  authorImage: 'costumer.png',
  container: {
    backgroundColor: 'accentFaded',
    flexBox: true,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    p: '20px',
  },
  authorName: 'Robert Preoteasa',
  authorDescription: 'Founder at Framey',
  imageContainer: {
    width: ['60px', '96px', '96px', '96px', '96px'],
    height: ['60px', '96px', '96px', '96px', '96px'],
    backgroundColor: '#c4c4c4',
    borderRadius: '100px',
  },
  nameContainer: {
    flexBox: true,
    flexDirection: 'column',
    alignItems: 'flex-start',
    pl: '30px',
  },
  authorContainer: {
    flexBox: true,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default QuoteCard;
