import React, { FC, useMemo} from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import { isEmpty } from 'lodash';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
);

const StyledContainer = styled.div`
  max-height: 264px;
  position: relative;
  background-color: ${(props) => props.theme.color.dark500};
  margin-top: 56px;
  padding: 56px 24px 16px 24px;
  color: ${(props) => props.theme.color.light};

  .info {
    position: absolute;
    top: 16px;
    left: 24px;
    display: flex;
    font-family: ${(props) => props.theme.typo.family.inter};
    ${(props) => props.theme.typo.style.small2ButtonOrLink}

    .body {
      width: 96px;
    }

    .date {
      font-size: 22px;
      line-height: 27px;
    }
  }

  .excercise {
    height: 192px;
    overflow-y: scroll;
  }
`;

const StyledExcercise = styled(Row)`
  height: 192px;
  overflow-y: scroll;

  //Handle custom overflow scroll bar
  /* width */
  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background:${(props) => props.theme.color.gray400};
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background:${(props) => props.theme.color.primary300};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background:${(props) => props.theme.color.primary300};
    cursor: pointer;
  }
`;

const StyledActivity = styled(Col)`
  height: 48px;
  padding-left: 0px;
  padding-right: 0px;

  .sub-container {
    display: flex;
    align-items: center;
    font-family: ${(props) => props.theme.typo.family.hiraginoKakuGothic};
    ${(props) => props.theme.typo.style.small3ButtonOrLink}

    .excercise-dot {
      width: 5px;
      height: 5px;
      background-color: ${(props) => props.theme.color.light};
      border-radius: 50%;
    }

    .excercise-name {
      margin-left: 8px;
    }

    .duration {
      margin-left: auto;
      font-family: ${(props) => props.theme.typo.family.inter};
      ${(props) => props.theme.typo.style.l2Header}
      color:${(props) => props.theme.color.primary300};
    }
  }

  .consume {
    font-family: ${(props) => props.theme.typo.family.inter};
    ${(props) => props.theme.typo.style.small2ButtonOrLink}
    color:${(props) => props.theme.color.primary300};
    padding-left: 14px;
    border-bottom: 1px solid ${(props) => props.theme.color.gray400};
  }
`;

interface ActivitiesProps {
  activity:string
  consume:string
  duration:string
}
interface ExcerciseRecordProps {
  date:string
  activities: ActivitiesProps[]
}
const ExcerciseRecord:FC<{data:ExcerciseRecordProps}> = ({ data }) => {
  const { date, activities } = data || {};

  const excerciseItems = useMemo(() => {
    return activities?.map((item: ActivitiesProps, index: number) => (
      <StyledActivity
        key={`excercise-${index}`}
        xs={{ span: 24 }}
        md={{ span: 12 }}
      >
        <div className="sub-container">
          <div className="excercise-dot"></div>
          <div className="excercise-name">
            <div>{item.activity}</div>
          </div>
          <div className="duration">{item.duration}</div>
        </div>
        <div className="consume">{item.consume}</div>
      </StyledActivity>
    ));
  }, [activities]);

  if (isEmpty(data)) return null;

  return (
    <StyledContainer>
      <div className="info">
        <div className="body">
          BODY
          <br /> RECORD
        </div>
        <div className="date">{date}</div>
      </div>

      <StyledExcercise gutter={40}>{excerciseItems}</StyledExcercise>
    </StyledContainer>
  );
};

export default ExcerciseRecord;
