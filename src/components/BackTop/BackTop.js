import React from 'react';
import { Button } from 'react-bootstrap';

const BackTop = () => {
  const goToBtn = () => {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }
  return (
    <div className='top-btn' onClick={goToBtn}>
     <Button variant='outline-dark mt-4 p-2'>BACK TO TOP</Button>
    </div>
  );
};

export default BackTop;