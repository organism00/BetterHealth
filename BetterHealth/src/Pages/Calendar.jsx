import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const eventsList = [
  { id: '1', title: 'Check-up' },
  { id: '2', title: 'Surgery' },
  { id: '3', title: 'Consultation' },
  { id: '4', title: 'X-ray' },
  { id: '5', title: 'Lab Test' }
];

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);

  const handleEventDrop = (event) => {
    const newEvent = {
      title: event.draggableId,
      start: event.destination.droppableId // Date selected from calendar
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Draggable Events List */}
      <DragDropContext onDragEnd={handleEventDrop}>
        <Droppable droppableId="eventList">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {eventsList.map((item, index) => (
                <Draggable key={item.id} draggableId={item.title} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        padding: '8px',
                        margin: '4px',
                        backgroundColor: '#e3e3e3',
                        borderRadius: '4px'
                      }}
                    >
                      {item.title}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Calendar */}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        editable={true}
        droppable={true}
      />
    </div>
  );
};

export default CalendarComponent;