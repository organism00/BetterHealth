import React, { useState } from 'react';
import { Button, IconButton, Paper, Chip } from '@mui/material';
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

// Css
import '../../Style/customScrollbar.css'


const questionsData = [
  { id: 1, question: 'What are the symptoms of COVID-19?', status: 'new' },
  { id: 2, question: 'How do I know if my injury is serious?', status: 'unread' },
  { id: 3, question: 'Can I schedule a consultation online?', status: 'read' },
];

function RecentQuestions() {
  const [filter, setFilter] = useState('all');

  const filteredQuestions = questionsData.filter((q) => filter === 'all' || q.status === filter);

  return (
    <div className='rounded-lg bg-[white] shaadow-md border overflow-hidden '>
      <div className='flex justify-between gap-2 items-center bg-[white] px-4 py-6 border-b '>
        <p className='text-[14px] font-medium '>Recent Question</p>
        <div className='flex gap-1'>
          <Chip label="All" onClick={() => setFilter('all')} clickable
            sx={{
              backgroundColor: filter === 'all' ? '#5156be' : '#c8c9ee',
              '&:hover': { backgroundColor: '#5156be', color: '#fff' },
              '&.MuiChip-clickable:active': { backgroundColor: '#5156be', color: '#fff' },
              color: filter === 'all' ? '#fff' : '#000', borderRadius: '5px'
            }}
          />
          <Chip label="Unread" onClick={() => setFilter('unread')} clickable
            sx={{
              backgroundColor: filter === 'unread' ? '#5156be' : '#c8c9ee',
              '&:hover': { backgroundColor: '#5156be', color: '#fff' },
              '&.MuiChip-clickable:active': { backgroundColor: '#5156be', color: '#fff' },
              color: filter === 'unread' ? '#fff' : '#000', borderRadius: '5px'
            }}/>
          <Chip label="New" onClick={() => setFilter('new')} clickable
            sx={{
              backgroundColor: filter === 'new' ? '#5156be' : '#c8c9ee',
              '&:hover': { backgroundColor: '#5156be', color: '#fff' },
              '&.MuiChip-clickable:active': { backgroundColor: '#5156be', color: '#fff' },
              color: filter === 'new' ? '#fff' : '#000', borderRadius: '5px'
            }}/>
        </div>
      </div>

      <div className='scrollable-div px-3 py-2 h-[200px]  '>
        {filteredQuestions.map((q) => (
          <Paper key={q.id} style={{ padding: '10px', marginTop: '10px' }}>
            <p>{q.question}</p>
            <Button variant="outlined" size="small" style={{ marginRight: '5px' }}>Read More</Button>
            <Button variant="contained" size="small">Reply</Button>
            <IconButton size="small">
              <HiOutlineChatBubbleLeftRight />
            </IconButton>
          </Paper>
        ))}
      </div>
    </div>
  );
}
export default RecentQuestions