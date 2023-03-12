import React, { useRef, useState } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js';
import { getDatasetAtEvent, getElementAtEvent, Line } from 'react-chartjs-2';
import styled from 'styled-components/macro';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
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
  width: 100%;
  height: 304px;
  position: relative;
  color: ${(props) => props.theme.color.light};

  .period {
    position: absolute;
    bottom: 16px;
    left: 32px;
    display: flex;
    gap: 16px;
  }

  .info {
    position: absolute;
    top: 16px;
    left: 32px;
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
`;

const StyledButton = styled.div<{ isActive?: boolean }>`
  width: 56px;
  height: 24px;
  border-radius: 11px;
  background-color: ${(props) =>
    props.isActive ? props.theme.color.primary300 : props.theme.color.dark600};
  color: ${(props) =>
    props.isActive ? props.theme.color.light : props.theme.color.primary300};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const options = {
  responsive: true,
  onClick: (e: any, elements: any) => {},
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: {
      top: 15,
    },
  },

  // Modify the axis by adding scales
  scales: {
    x: {
      ticks: {
        display: true,
        color: '#FFFFFF',
        font: {
          size: 12,
        }
      },

      // to remove the x-axis grid
      grid: {
        // drawBorder: false,
        // display: false,
        color: '#777777',
      },
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
        color: 'red',
        fontSize: 20,
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};
export default function BodyFatChart({ data }: any) {
  const [activePeriod, setActivePeriod] = useState('year');

  const ListPeriod = [
    { period: '日', value: 'day' },
    { period: '週', value: 'week' },
    { period: '月', value: 'month' },
    { period: '年', value: 'year' },
  ];

  if (isEmpty(data)) return null;

  return (
    <StyledContainer>
      <Line
        options={options}
        data={data[activePeriod]}
        style={{
          width: '100%',
          paddingLeft: 50,
          paddingRight: 50,
          paddingTop: 54,
          paddingBottom: 50,
          backgroundColor: '#414141',
        }}
      />
      <div className="period">
        {ListPeriod?.map((item) => (
          <StyledButton
            onClick={() => {
              setActivePeriod(item.value);
            }}
            key={item.value}
            isActive={activePeriod === item.value}
          >
            {item.period}
          </StyledButton>
        ))}
      </div>
      <div className="info">
        <div className="body">
          BODY
          <br /> RECORD
        </div>
        <div className="date">2021.05.21</div>
      </div>
    </StyledContainer>
  );
}
