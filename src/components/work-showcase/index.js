import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Container from '../container';
import HoverPicture from '../hover-picture';
import {ShowcaseWrapper} from './showcase.style';

const WorkShowcase = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: {regex: "/(png)/"}
          relativeDirectory: {regex: "/work/"}
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            base
          }
        }
      }
    }
  `);

  return (
    <Container noGutter mobileGutter width="1200px">
      <ShowcaseWrapper>
        {data.allFile.edges.reverse().map(({node}) => {
          let description;
          switch (node.base.split('.')[0]) {
            case 'deepstash': {
              description =
                'Deepstash. An app for learning and self improvement';
              break;
            }
            case 'framey': {
              description = 'Framey. The perfect travel companion';
              break;
            }
            default: {
              description = '';
            }
          }
          return (
            <HoverPicture
              imageNode={node}
              key={node.base.split('.')[0]}
              description={description}
            />
          );
        })}
      </ShowcaseWrapper>
    </Container>
  );
};

WorkShowcase.defaultProps = {};

export default WorkShowcase;
