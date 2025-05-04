import React, { useEffect, useState } from 'react';

const DeviceDateTime = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setDate(now.toLocaleDateString());  // e.g., 5/5/2025
      setTime(now.toLocaleTimeString());  // e.g., 3:25:45 PM
    };

    updateDateTime(); // initial call
    const interval = setInterval(updateDateTime, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="navbar">
      <div className="date">{date}</div>
      <div className="time">{time}</div>
    </div>
  );
};

export default DeviceDateTime;
