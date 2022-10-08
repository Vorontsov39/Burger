import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Style from './Card.module.css';
import PropTypes from 'prop-types';
import { propType } from '../../utils/propTypes';
const Ingredient = (props) => {
    return (
        <li className={`${Style.items} mt-6 mb-4 ml-2 mr-2`}>
            <img className="ml-5 mr-5 mb-1" src={props.image_mobile} alt={'Булка'} />
            <div className={Style.price}>
                <span className={`${Style.span} 
                mr-2 text text_type_digits-default`}>{props.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${Style.name} 
            mt-2 mb-5 text text_type_main-default`}>{props.name}</p>
            <Counter count={1} size="default" />
        </li>
    )
}

Ingredient.propTypes = {
    props: PropTypes.arrayOf(propType.isRequired)
}

export default Ingredient;
