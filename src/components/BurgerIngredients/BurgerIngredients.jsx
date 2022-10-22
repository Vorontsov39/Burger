import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import CardList from "../CardList/CardList";
import PropTypes from 'prop-types';
import {propType} from "../../utils/propTypes";
import styles from './BurgerIngredients.module.css';
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

function BurgerIngredients({data, addIngredientToCart}) {
    const [current, setCurrent] = useState('Булки')
    const [card] = useState({})
    const [isOpen, setIsOpen] = useState(false)

    const handeCardClick = (item) => {
        addIngredientToCart(item)
    }

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <section className={styles.burgerIngredients}>
            <h1 className={`text text_type_main-large pt-10`}>Соберите бургер</h1>
            <nav className={`${styles.tabs} pt-5 pb-10`}>
                <Tab active={current === 'Булки'} value={'Булки'} onClick={setCurrent}>Булки</Tab>
                <Tab active={current === 'Соусы'} value={'Соусы'} onClick={setCurrent}>Соусы</Tab>
                <Tab active={current === 'Начинки'} value={'Начинки'} onClick={setCurrent}>Начинки</Tab>
            </nav>
            <div className={`${styles.ingredientsLists}`}>
                <CardList data={data} name={'Булки'} type={'bun'} handeCardClick={handeCardClick}/>
                <CardList data={data} name={'Соусы'} type={'sauce'} handeCardClick={handeCardClick}/>
                <CardList data={data} name={'Начинки'} type={'main'} handeCardClick={handeCardClick}/>
            </div>
            {isOpen && <Modal isOpen={isOpen} toggleModal={toggleModal}>
                <IngredientDetails card={card}/>
            </Modal>}
        </section>
    )
}


BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(propType).isRequired,
};

export default BurgerIngredients;
