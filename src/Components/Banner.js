import React from 'react';
import '../css/Banner.css';
import img from '../img/img.jpg'

function Banner() {
  return (
    <div className='Banner'>
      <img src={img} alt='travel' />
      <h1>Adventure Awaits</h1>
      <h3> Take a Break</h3>
      <p>What are you waiting for?</p>
    </div>
  );
}

export default Banner;