import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
);

export const options = {
  responsive: true,
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
      },

      // to remove the x-axis grid
      // grid: {
      //   drawBorder: false,
      //   display: false,
      // },
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

const labels = ["6月", "7月", "8月", "9月", "10月", "11月", "12月","1月","2月","3月","5月"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1000,1200,700,900,800,600,500,300,200,400,500,800],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
    {
      label: "Dataset 2",
      data: [1000,800,800,600,650,500,450,300,250,100,80,10],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)"
    }
  ]
};

export default function ChartBanner() {
  return <Line options={options} data={data} />;
}
