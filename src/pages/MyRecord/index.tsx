import React, { useEffect } from 'react';
import styled from 'styled-components';
import {DiaryCard,ExcerciseRecord, BodyFatChart,BodyRecord} from './components';
import { BackToTop,BrowseMoreButton,Layout,Listing } from '../../components';
import { useMyRecordService } from '../../hooks';

const StyledContainer = styled.div`
  max-width: ${(props) => props.theme.metrics.breakpoints.lg};
  margin: 0 auto;
`;

const StyledHeader = styled.div`
  font-family: ${(props) => props.theme.typo.family.inter};
  ${(props) => props.theme.typo.style.l4Header}
  font-size: 22px;
  line-height: 27px;
`

const MyRecord = () => {
  const { fetchMyRecord, myRecordState } = useMyRecordService();
  const { isLoading, excerciseList, diaryRecord,totalDiary } =
    myRecordState || {};

  useEffect(() => {
    fetchMyRecord({ isAppendList: false });
  }, []);

  const renderHeader = ()=> <StyledHeader>MY DIARY</StyledHeader>

  const onBrowseMoreClick = () => {
    fetchMyRecord({ isAppendList: true });
  };

    const hasBrowseMoreButton = !isLoading && diaryRecord.length < totalDiary;
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
          header={renderHeader()}
          Component={DiaryCard}
          marginTop="56px"
          marginBottom='28px'
        />
        <BrowseMoreButton
          onBrowseMoreClick={onBrowseMoreClick}
          hasBrowseMoreButton={hasBrowseMoreButton}
          isLoading={isLoading}
          content="自分の日記をもっと見る"
        />
        <BackToTop offsetBottom={'50vh'} offsetRight={'96px'} />
      </StyledContainer>
    </Layout>
  );
};

export default MyRecord;
