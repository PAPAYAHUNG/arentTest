import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Colors
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Colors
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },

  // Modify the axis by adding scales
  scales: {
    x: {
      ticks: {
        display: true,
        color:'#FFFFFF',
      },

      grid: {
        color: '#777777',
      },
    },

    y: {
      ticks: {
        display: false,     // to remove the y-axis labels
        beginAtZero: true,
      },
     
      grid: {
        drawBorder: false,  // to remove the y-axis grid
        display: false,
      },
    },
  },
};

export default function ChartBanner({ chartBanner }: any) {
  return (
    <Line
      options={options}
      data={chartBanner}
      style={{
        width: '100%',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 20,
        paddingBottom:10,
        backgroundColor:'#2E2E2E',
        color:'#FFFFFF'
      }}
    />
  );
}
