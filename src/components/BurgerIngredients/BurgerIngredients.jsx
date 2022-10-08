import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Style from './BurgerIngredients.module.css';
import CardList from './CardList';
import typeFood from '../../utils/typeFood'


const BurgerIngredients = () => {
    const [current, setCurrent] = React.useState('one')
    return(
        <section className={`${Style.section} mr-5`}>
            <h1 className={`${Style.title} 
            mt-10 mb-5 text text_type_main-default`}>Соберите бургер
            </h1>

            <div className={`${Style.tab} mb-2`}>
                <a className={Style.link} href="#bun">
                    <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                        Булки
                    </Tab>
                </a>
                <a className={Style.link} href="#sauce">
                    <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                        Соусы
                    </Tab>
                </a>
                <a className={Style.link} href="#main">
                    <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                        Начинки
                    </Tab>
                </a>
                </div>
            <article className={Style.article} >
                {typeFood.map(e => (
                <CardList key={e.type} type={e.type} text={e.text}/>
                    ))}
            </article>
        </section>
    )
}

export default BurgerIngredients;
