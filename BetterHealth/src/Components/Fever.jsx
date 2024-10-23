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
  { month: 'Monday', Fever: 30 },
  { month: 'Tuesday', Fever: 130 },
  { month: 'Wednesday', Fever: 130 },
  { month: 'Thursday', Fever: 70 }
];

const Fever = () => {
  return (
    <Box sx={{ width: '90%', height: 150 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={false} />
          <YAxis
          
          />
          <Tooltip />
          <Line type="linear" dataKey="Fever" stroke="#8884d8" activeDot={{ r: 10 }}  style={{text:"red"}}/>
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Fever;