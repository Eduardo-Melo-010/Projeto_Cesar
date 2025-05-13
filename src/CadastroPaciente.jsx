import './CadastroPaciente.css';
import Sidebar from './Sidebar.jsx';
import { useState } from 'react';

const Calendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const weeks = [];
  let day = 1 - startingDay;

  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if (day > 0 && day <= daysInMonth) {
        week.push(day);
      } else {
        week.push(null);
      }
      day++;
    }
    weeks.push(week);
  }

  const isToday = (d) => {
    return (
      d === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="calendar">
        <div className="header">
          <button onClick={prevMonth}>◀</button>
          <h2>{currentDate.toLocaleString('default', { month: 'long' })} {year}</h2>
          <button onClick={nextMonth}>▶</button>
        </div>
        <div className="weekdays">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day, index) => (
            <div key={index} className="weekday">{day}</div>
          ))}
        </div>
        <div className="days">
          {weeks.map((week, i) => (
            <div className="week" key={i}>
              {week.map((day, j) => (
                <div key={j} className={`day ${isToday(day) ? 'today' : ''}`}>
                  {day || ''}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
