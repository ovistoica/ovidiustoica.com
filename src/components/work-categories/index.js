import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Container from '../container';
import {WorkWrapper} from './work.style';
import Button from '../button';
import {themeGet} from '@styled-system/theme-get';
import {graphql, useStaticQuery} from 'gatsby';
import {ShowcaseWrapper} from '../work-showcase/showcase.style';
import HoverPicture from './hover-category-picture';

const CATEGORIES = [
  'all',
  'mobile',
  'react',
  'javascript',
  'react-native',
  'cross-platform',
  'animations',
  'typescript',
  'nodejs',
  'fullstack',
  'UX',
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
            <Button
              title={`#${category}`}
              icon={null}
              key={`category$${category}`}
              className="hashtag"
              m="10px"
              p="0px"
              bg={selected[category] ? 'secondaryText' : null}
              hoverColor={
                selected[category] ? themeGet('colors.mainText') : null
              }
              onClick={() => {
                const currentVal = !!selected[category];
                setSelected({...selected, [category]: !currentVal});
              }}
            />
          ))}
        </Box>
        <ShowcaseWrapper>
          {data.allFile.edges.reverse().map(({node}) => {
            let description;
            switch (node.base.split('.')[0]) {
              case 'deepstash-web-main': {
                description =
                  'Deepstash. An app for learning and self improvement';
                break;
              }
              case 'framey-main': {
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
