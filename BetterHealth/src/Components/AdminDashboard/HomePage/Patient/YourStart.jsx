import { fontSize, style } from "@mui/system";
import React from "react";
import Chart from "react-apexcharts";

const YourStart = () => {
  // Dataset with the actual values
  const actualData = [55, 41, 17, 15, 44];
  
  // Sum of the data for percentage calculations
  const totalData = actualData.reduce((acc, val) => acc + val, 0);
  
  const chartOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Therapy", "Mediation", "Cholesterol", "Heart Beat", "Operation"],
    colors: [
      "rgb(50, 70, 211)",
      "rgb(0, 208, 255)",
      "rgb(238, 49, 88)",
      "rgb(255, 168, 0)",
      "rgb(5, 130, 95)",
    ], // Custom colors
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '9px'
      },
      formatter: function (val, opts) {
        // Calculate percentage of each value relative to the total
        const percentage = ((opts.w.config.series[opts.seriesIndex] / totalData) * 100).toFixed(2);
        return percentage + "%"; // Display percentage inside the donut
      },
    },
    tooltip: {
      y: {
        formatter: function (val, opts) {
          // Show the actual data value when hovering
          return actualData[opts.seriesIndex];
        },
      },
      style: {
        fontSize: '12px'
      }
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: '9px'
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  // Series data for the donut chart
  const chartSeries = actualData;

  return (
    <div className="donut-chart">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        width="350"
      />
    </div>
  );
};

export default YourStart;
