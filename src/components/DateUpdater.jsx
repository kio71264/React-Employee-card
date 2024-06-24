import React, {useState} from 'react';
import { Button } from 'react-bootstrap'; 

const DateUpdater = () => {
  const [date, setDate] = useState (new Date ().toString());
  const updateDate = () => {
    setDate(new Date().toString())
  };
  return (
    <div>
      <p className='dateDisplay'>{date}</p>
      <Button variant="secondary" onClick={updateDate}>Reset</Button>
    </div>
  );
}

export default DateUpdater;
