import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Container from '../container';
import {WorkWrapper} from './work.style';
import {graphql, useStaticQuery} from 'gatsby';
import {ShowcaseWrapper} from '../work-showcase/showcase.style';
import HoverPicture from './hover-category-picture';
import {WorkTag} from './work-tag';

const CATEGORIES = [
  'all',
  'mobile',
  'react',
  'react-native',
  'cross-platform',
  'animations',
  'typescript',
  'nodejs',
  'fullstack',
  'UX',
];

const WORK = [
  {
    name: 'Framey',
    tags: [
      'mobile',
      'cross-platform',
      'animations',
      'fullstack',
      'typescript',
      'react-native',
      'UX',
    ],
    description: 'Framey. The perfect travel companion',
  },
  {
    name: 'Deepstash Web',
    tags: ['react', 'typescript', 'animations', 'nodejs'],
    description: 'Deepstash. An app for learning and self improvement',
  },
  {
    name: 'Deepstash',
    tags: [
      'mobile',
      'cross-platform',
      'animations',
      'typescript',
      'react-native',
      'UX',
    ],
    description: 'Deepstash. An app for learning and self improvement',
  },
  {
    name: 'Workplace-ly',
    tags: ['fullstack', 'nodejs', 'UX'],
    description: 'Workplace-ly. Real time monitorisation of office spaces',
  },
];

const WorkWithCategories = ({row}) => {
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
                aspectRatio
                base64
                tracedSVG
                src
                srcSet
                sizes
              }
            }
            base
          }
        }
      }
    }
  `);

  const [selected, setSelected] = useState({});
  return (
    <WorkWrapper>
      <Container noGutter mobileGutter width="1200px">
        <Box {...row} width="80%" mx="auto" mb="50px">
          {CATEGORIES.map(category => (
            <WorkTag
              key={`category$${category}`}
              tagName={category}
              selected={selected[category]}
              onClick={() => {
                const currentVal = !!selected[category];
                setSelected({...selected, [category]: !currentVal});
              }}
            />
          ))}
        </Box>
        <ShowcaseWrapper>
          {data.allFile.edges.reverse().map(({node}, index) => {
            return (
              <HoverPicture
                imageNode={node}
                key={node.base.split('.')[0]}
                description={WORK[index].description}
                tags={WORK[index].tags}
                name={WORK[index].name}
              />
            );
          })}
        </ShowcaseWrapper>
      </Container>
    </WorkWrapper>
  );
};

WorkWithCategories.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
};

WorkWithCategories.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contentArea: {
    width: ['100%', '100%', '70%', '70%'],
    p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default WorkWithCategories;
