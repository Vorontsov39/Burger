import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import Styles from './Card.module.css'

function Card({image, price, name}) {
    return (
        <li className={`${Styles.card}`}>
            <Counter count={1} size="default"/>
            <img className={`${Styles.image} pl-4 pr-4`} src={image} alt={name}/>
            <div className={`${Styles.price}`}>
                <p className={`text text_type_digits-default mr-2`}>{price}</p>
                <CurrencyIcon type={'primary'}/>
            </div>
            <p className={`text text_type_main-default ${Styles.wordBreak}`}>{name}</p>
        </li>
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

export default Card;
