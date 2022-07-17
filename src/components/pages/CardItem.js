import React from 'react';
import "../pages/WhyCa.css"

function CardItem(props) {
  return (
    <>
     <link rel="stylesheet" href="../pages/WhyCa.css"/> 
      <li className='cards__item'>
           <div id="imagebox">
            <img
            height={props.height}
            width={props.width}
              className='cards__item__img'
              alt=''
              src={props.src}
            />
        </div>
          <div className='cards__item__title'> {props.title} </div>
            <div className='cards__item__text'>{props.text}</div>
        
       
      </li>
    </>
  );
}

export default CardItem;