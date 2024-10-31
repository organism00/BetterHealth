import React from 'react';
import { FaChevronLeft,  FaChevronRight, FaCalendarAlt   } from "react-icons/fa";

const Datess = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th'; 
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const navigate = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() + (direction === 'next' ? 1 : -1));
      return newDate;
    });
  };

  const getDates = () => {
    const dates = [];
    for (let i = -2; i <= 2; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const buttonClasses = "group p-4 text-gray-600 transition-colors hover:bg-[#5156be]";

  return (
    <div className="flex items-center max-w-3xl mt-4 shadow-sm ">
      <button 
        onClick={() => navigate('prev')}
        className={`${buttonClasses} rounded-l-lg`}
      >
        <FaChevronLeft className="w-4 h-5 group-hover:text-white"/>
      </button>
      
      {getDates().map((date, index) => {
        const isSelected = index === 2;

        const dayOfMonth = date.getDate();
        const shortDate = `${dayOfMonth}${getOrdinalSuffix(dayOfMonth)}`;

        const day = date.toLocaleString('default', { weekday: isSelected ? 'long' : 'short' });

        const fullDate = date.toLocaleString('default', { 
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });

        return (
          <div
            key={date.toISOString()}
            className={`flex-1 py-2 text-center cursor-pointer whitespace-nowrap transition-colors
              ${isSelected 
                ? 'bg-[#5156be] text-white hover:bg-[#5156be]' 
                : 'hover:bg-[#5156be] hover:text-white'
              }`}
          >
            <div className="flex items-center gap-x-3 justify-center mb-1">
              <div className="text-sm">{day}</div>
              {isSelected && <FaCalendarAlt className="w-4 h-4 mr-1 " /> } 
            </div>
            <div className="text-xs mt-1">
              {isSelected ? fullDate : shortDate}
            </div>
          </div>
        );
      })}
      
      <button 
        onClick={() => navigate('next')}
        className={`${buttonClasses} rounded-r-lg`}
      >
        <FaChevronRight className="w-5 h-5 group-hover:text-white"/>
      </button>
    </div>
  );
};

export default Datess;
