import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' >
          <div className='cards__item__pic-wrap' >
            <img
              className='cards__item__img'
              alt='Image'
              src={props.src}
            />
          </div>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
