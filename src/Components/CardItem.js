import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <div className='cards__item__pic-wrap' >
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
             <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;