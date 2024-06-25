import React, { useState, useEffect } from 'react';

const DateUpdater = () => {
  const [date, setDate] = useState(new Date().toString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date().toString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p className='dateDisplay'>{date}</p>
    </div>
  );
}

export default DateUpdater;

