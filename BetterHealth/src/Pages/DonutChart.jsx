import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
    const data = {
        labels: ['Operation', 'Theraphy', 'Medication', 'Cholestrol', 'Heart Beat'],
        datasets: [
          {
            data: [25.6, 32.0, 23.5, 9.7, 8.7],
            backgroundColor: [
              'rgba(54, 162, 235, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(153, 102, 255, 0.6)',
            ],
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        cutout: '70%', // This creates the 'donut' effect
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              
              generateLabels: (chart) => {
                const data = chart.data;
                return data.labels.map((label, index) => {
                  const meta = chart.getDatasetMeta(0);
                  const style = meta.controller.getStyle(index);
                  return {
                    text: label,
                    fillStyle: style.backgroundColor,
                    strokeStyle: style.borderColor,
                    lineWidth: style.borderWidth,
                    hidden: !chart.getDataVisibility(index),
                    index: index,
                  };
                });
              },
            },
          },
        },
      };
    
    
  return (
    <div>
 <div className=" w-[90%] h-[200px] ">
      <Doughnut data={data} options={options} />
    </div>
    </div>
  )
}

export default DonutChart