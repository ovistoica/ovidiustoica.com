import React from 'react';
import Container from '../container';
import Box from '../box';
import {ServicesWrapper} from './services.style';
import ServiceCard from '../service-card';
import DesignIcon from '../../assets/svg/design-icon';
import PhoneIcon from '../../assets/svg/phone-icon';
import MacIcon from '../../assets/svg/mac-icon';
import RocketIcon from '../../assets/svg/rocker-icon';

const ServicesSection = ({row}) => {
  const rocketTextContainer = {
    flexDirection: 'column',
    flexBox: true,
    alignItems: 'flex-start',
    flex: 1,
    mt: '-40px',
  };
  return (
    <ServicesWrapper>
      <Container noGutter mobileGutter width="1400px">
        <Box {...row}>
          <ServiceCard
            image={<DesignIcon />}
            title="Custom design"
            description="From the beginning, I listen, brainstorm, and discuss ideas to bring out the full potential of your vision. This step informs and educates you on what is possible and what the final product will look."
          />
          <ServiceCard
            image={<PhoneIcon />}
            title="Build an entire new app"
            description="If you have an idea that you want to turn into reality, wether it is the final version or just a proof of concept, I am here to help. After the initial design phase, I implement the core features with full transparency."
          />
          <ServiceCard
            image={<MacIcon />}
            title="Fix an existing app"
            description="No app is perfect, this is why, my services include building new features, fixing old features of already existing apps and full review of the performance of your application (start time, TTI, caching, user experience)"
          />
          <ServiceCard
            contentContainer={rocketTextContainer}
            image={<RocketIcon />}
            title="Test. Deploy. Grow"
            description="Deploying and growing your app, wether it is on the web or in the Google Play and App Store, can be tricky. I can help throughout all the process. Services include deployment, growth through SEO and ASO and performance optimizations to make your app blazing fast."
          />
        </Box>
      </Container>
    </ServicesWrapper>
  );
};

ServicesSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contentArea: {
    width: ['100%', '100%', '100%', '100%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
};

export default ServicesSection;
