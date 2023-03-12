import React, { useEffect } from 'react';

import Layout from '../../components/Layout';

import useBannerService from '../../hooks/useBannerService';
import useMealHistoryService from '../../hooks/useMealHistoryService';
import Listing from '../../components/Listing';
import styled from 'styled-components';
import BrowseMoreButton from '../../components/BrowseMoreButton';
import BackToTop from '../../components/BackToTop';
import BodyRecord from './components/BodyRecord';
import useMyRecordService from '../../hooks/useMyRecordService';
import BodyFatChart from './components/BodyFatChart';
import ExcerciseRecord from './components/ExcerciseRecord';
import DiaryCard from './components/DiaryCard';

const StyledContainer = styled.div`
  max-width: ${(props) => props.theme.metrics.breakpoints.lg};
  margin: 0 auto;
`;

const MyRecord = () => {
  const { fetchMyRecord, myRecordState } = useMyRecordService();
  const { myRecordList, isLoading, excerciseList, diaryRecord } =
    myRecordState || {};
  //   const { isLoading, total, mealHistoryList,notification } = mealHistoryState || {};
  useEffect(() => {
    fetchMyRecord({ isAppendList: false });
  }, []);

  console.log({ myRecordState });
  //   console.log({ mealHistoryState });

  const onBrowseMoreClick = () => {
    // fetchMealHistory({ isAppendList: true });
  };

  //   const hasBrowseMoreButton = !isLoading && mealHistoryList.length < total;
  return (
    <Layout>
      <StyledContainer>
        <BodyRecord />
        <BodyFatChart data={myRecordState?.myRecordList} />
        <ExcerciseRecord data={myRecordState?.excerciseList} />
        <Listing
          listItems={diaryRecord}
          fullData={excerciseList}
          isLoading={isLoading}
          header="MY DIARY"
          Component={DiaryCard}
          marginTop="56px"
          marginBottom='56px'
        />
        {/* <BrowseMoreButton
          onBrowseMoreClick={onBrowseMoreClick}
          hasBrowseMoreButton={hasBrowseMoreButton}
          isLoading={isLoading}
        /> */}
        <BackToTop offsetBottom={'528px'} offsetRight={'96px'} />
      </StyledContainer>
    </Layout>
  );
};

export default MyRecord;
