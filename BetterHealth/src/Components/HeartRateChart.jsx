import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { Box } from '@mui/material';


const data = [
  { month: 'January', heartRate: 150 },
  { month: 'February', heartRate: 50 },
  { month: 'March', heartRate: 50 },
  { month: 'April', heartRate: 145 }
];

const HeartRateChart = () => {
  return (
    <Box sx={{ width: '90%', height: 150 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={false} />
          <YAxis
          style={{ fill: 'white' }} 
          />
          <Tooltip />
          <Line type="linear" dataKey="heartRate" stroke="#8884d8" activeDot={{ r: 10 }}  style={{text:"red"}}/>
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default HeartRateChart;