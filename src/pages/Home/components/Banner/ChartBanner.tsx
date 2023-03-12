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
    // to remove the labels
    x: {
      ticks: {
        display: true,
        color:'#FFFFFF',
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
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
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
