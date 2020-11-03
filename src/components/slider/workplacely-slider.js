/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {css} from 'styled-components';
import {themeGet} from '@styled-system/theme-get';

const WorkplacelySlider = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: {regex: "/(png)/"}
          relativeDirectory: {regex: "/work/"}
          name: {regex: "/workplace/"}
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };
  return (
    <div
      css={css`
        background-color: ${themeGet('colors.background')};
        margin-top: -40px;
        margin-bottom: 80px;
      `}
    >
      <Slider {...settings}>
        {data.allFile.edges.reverse().map(({node}) => (
          <Image
            title={node.base.split('.')[0]}
            fluid={node.childImageSharp.fluid}
            key={node.base.split('.')[0]}
          />
        ))}
      </Slider>
    </div>
  );
};

export default WorkplacelySlider;
