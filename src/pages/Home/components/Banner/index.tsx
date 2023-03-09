import React from 'react';
import styled from 'styled-components';
import ChartBanner from './ChartBanner';
import ImageBanner from './ImageBanner';

const StyledContainer = styled.div`
  display: flex;

  .image-banner {
    width: 40%;
  }
  .chart-banner {
    width: 60%;
  }
`;

interface BannerSliceProps {
  isLoading: boolean;
  data: any;
  error: any;
}
const Banner = ({ bannerState }: { bannerState: BannerSliceProps }) => {
  const { isLoading, data } = bannerState || {}

  return (
    <StyledContainer>
      <div className="image-banner">{isLoading ? <p>Loading...</p> : <ImageBanner data={data?.imageBanner}/>}</div>
      <div className="chart-banner">
        <ChartBanner />
      </div>
    </StyledContainer>
  );
};

export default Banner;
