import styles from './BurgerConstructor.module.css'
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import PropTypes from "prop-types";
import {propType} from "../../utils/propTypes";

const img = 'https://code.s3.yandex.net/react/code/bun-02-mobile.png'

function BurgerConstructor({data}) {
    return (
        <section className={`${styles.burgerConstructor} pt-25`}>
            <div className='mb-4 pl-8'>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={data[0].name + " (верх)"}
                    price={200}
                    thumbnail={img}
                />
            </div>
            <ul className={styles.container}>
                {data.map((item => (
                   item.type !== 'bun' && <li className={styles.constructorItem} key={item._id}>
                        <DragIcon type="primary"/>
                        <ConstructorElement
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image_mobile}/>
                    </li>
                )))}
            </ul>
            <div className='mt-4 pl-8'>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={data[0].name + " (низ)"}
                    price={200}
                    thumbnail={img}
                />
            </div>
            <div className={styles.price}>
                <div className={styles.currency}>
                    <p className={`${styles.text} text text_type_digits-medium`}>
                        0
                    </p>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button htmlType={'button'} type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>

        </section>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(propType).isRequired,
};
export default BurgerConstructor;
