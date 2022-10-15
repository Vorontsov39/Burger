import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import styles from './Card.module.css'
import { propType } from '../../utils/propTypes';
function Card({card, handeCardClick}) {
    return (
        <li onClick={() => handeCardClick(card)} className={`${styles.card}`}>
            <Counter count={1} size="default"/>
            <img className={`${styles.image} pl-4 pr-4`} src={card.image} alt={card.name}/>
            <div className={`${styles.price}`}>
                <p className={`text text_type_digits-default ${styles.wordBreak}`}>{card.price}</p>
                <CurrencyIcon type={'primary'}/>
            </div>
            <p className={`text text_type_main-default ${styles.wordBreak}`}>{card.name}</p>
        </li>
    )
}

Card.propTypes = {
    card: propType.isRequired,
    handeCardClick: PropTypes.func.isRequired
};

export default Card;
