import React from 'react';
import styled from 'styled-components';
import Loading from '../../../../components/Loading';
import ChartBanner from './ChartBanner';
import ImageBanner from './ImageBanner';
const StyledWrapper = styled.div``;

const StyledContainer = styled.div`
  display: flex;
  height: 316px;

  .image-banner {
    width: 40%;
  }
  .chart-banner {
    width: 60%;
  }
`;

interface DatasetProps {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}

interface PercentageProps {
  current: number;
  total: number;
  percentage: number;
}
export interface DataProps {
  chartBanner: {
    lables: string[];
    datasets: DatasetProps[];
  };

  imageBanner: {
    url: string;
    percentage: PercentageProps;
  };
}
export interface BannerSliceProps {
  isLoading: boolean;
  data: DataProps;
  error: any;
}
const Banner = ({ bannerState }: { bannerState: BannerSliceProps }) => {
  const { isLoading, data } = bannerState || {};

  return (
    <StyledWrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledContainer>
          <div className="image-banner">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <ImageBanner data={data?.imageBanner} />
            )}
          </div>
          <div className="chart-banner">
            <ChartBanner chartBanner={data?.chartBanner} />
          </div>
        </StyledContainer>
      )}
    </StyledWrapper>
  );
};

export default Banner;
