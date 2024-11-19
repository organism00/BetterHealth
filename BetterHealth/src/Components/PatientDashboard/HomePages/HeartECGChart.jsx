import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
 
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
 
const HeartECGChart = () => {
  const periods = {
    "1 - 15 Jan": { data: [72, 75, 70, 68, 74, 76, 80, 73, 69, 77], average: 73 },
    "16 - 31 Jan": { data: [78, 77, 74, 79, 72, 76, 73, 80, 81, 75], average: 75 },
    "1 - 15 Feb": { data: [80, 82, 85, 78, 81, 79, 77, 83, 82, 80], average: 80 }
  };
 
  const [selectedPeriod, setSelectedPeriod] = useState("1 - 15 Jan");
  const [currentData, setCurrentData] = useState([periods[selectedPeriod].data[0]]);
  const [index, setIndex] = useState(0);
 
  // Create static x-axis labels for the entire period (e.g., 10 points).
  const xAxisLabels = Array(periods[selectedPeriod].data.length).fill("").map((_, idx) => `Day ${idx + 1}`);
 
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex >= periods[selectedPeriod].data.length) {
          return 0; // Restart the loop when we reach the end
        }
        return newIndex;
      });
    }, 500); // Update every 500ms (adjust this as needed)
 
    return () => clearInterval(timer); // Clean up timer on component unmount
  }, [selectedPeriod]);
 
  useEffect(() => {
    setCurrentData(periods[selectedPeriod].data.slice(0, index + 1));
  }, [index, selectedPeriod]);
 
  const data = {
    labels: xAxisLabels, // Static x-axis labels
    datasets: [
      {
        label: "ECG Signal",
        data: currentData,
        fill: false,
        backgroundColor: "blue",
        borderColor: "blue",
        tension: 0.2, // Creates a smoother curve for ECG effect
      }
    ]
  };
 
  const options = {
    scales: {
      x: {
        display: false, // Hides the x-axis
      },
      y: {
        display: true, // Hides the y-axis
      }
    },
    animation: {
      duration: 0, // Disable default chart.js animation
    },
    plugins: {
      legend: {
        display: false // Hides the legend
      }
    }
  };
 
  return (
<div>
{/* <h3>Heart ECG</h3> */}
{/* <select onChange={(e) => setSelectedPeriod(e.target.value)} value={selectedPeriod}>
<option>1 - 15 Jan</option>
<option>16 - 31 Jan</option>
<option>1 - 15 Feb</option>
</select> */}
<Line data={data} options={options} />
{/* <p>{`Average: ${periods[selectedPeriod].average} bpm`}</p> */}
</div>
  );
};
 
export default HeartECGChart;