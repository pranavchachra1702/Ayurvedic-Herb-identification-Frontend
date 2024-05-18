import React from 'react'
import {Link} from 'react-router-dom'
import './card.css'

function CardItem(props) {
  return (
    <>
    <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
            <figure className={(props.homePage == 'true') ? 'cards__item__pic__wrap' : 'cards__item__pic__wrap_inner'} data-category={props.label}>
                <img src={props.src} alt='Ayurveda Image' className='cards__item__img'></img>
            </figure>
            <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
            </div>
        </Link>
    </li>
    </>
  )
}

export default CardItem