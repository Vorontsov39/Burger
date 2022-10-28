import styles from './BurgerConstructor.module.css'
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components"
// import PropTypes from "prop-types";
// import { propType } from '../../utils/propTypes';
import {useState, useContext, useMemo} from "react";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { DataContext } from '../../context/dataContext';
import { makeOrder } from "../../utils/api";

// const img = 'https://code.s3.yandex.net/react/code/bun-02-mobile.png'

function BurgerConstructor({data}) {

    const [isOpen, setIsOpen] = useState(false)
    const [orderDetails, setOrderDetails] = useState({})

    const {otherIngredients, selectedBun} = useContext(DataContext)

    const closeModal = () => {
        setIsOpen(!isOpen)
    }

    const handleMakeAnOrder = () => {
        const constructorData = [selectedBun, ...otherIngredients, selectedBun]
        const orderData = {ingredients: constructorData.map(item => item._id)}
        makeOrder(orderData).then(res => {
            setOrderDetails(res)
            setIsOpen(true)
        }).catch(console.log)
    }

    const memPrice = useMemo(() => {
        if (otherIngredients && selectedBun) {
            const constructorData = [selectedBun, ...otherIngredients, selectedBun]
            return constructorData.reduce((acc, item) => acc + item.price, 0)
        }
    }, [otherIngredients, selectedBun])

    return (
        <section className={`${styles.burgerConstructor} pt-25`}>
            {selectedBun && <div className='mb-4 pl-8'>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${selectedBun.name} (верх)`}
                    price={selectedBun.price}
                    thumbnail={selectedBun.image_mobile}
                />
            </div>}
            <ul className={styles.container}>
                {otherIngredients && otherIngredients.map(((item, index) => (
                    item.type !== 'bun' && <li className={styles.constructorItem} key={item._id}>
                        <DragIcon type="primary"/>
                        <ConstructorElement
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image_mobile}/>
                    </li>
                )))}
            </ul>
            {selectedBun && <div className='mt-4 pl-8'>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${selectedBun.name} (низ)`}
                    price={selectedBun.price}
                    thumbnail={selectedBun.image_mobile}
                />
            </div>}
            <div className={styles.price}>
               {memPrice && <div className={styles.currency}>
                    <p className={`${styles.text} text text_type_digits-medium`}>
                        {memPrice}
                    </p>
                    <CurrencyIcon type="primary"/>
                </div>}
                <Button onClick={handleMakeAnOrder} htmlType={'button'} type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
{  isOpen &&
  <Modal closeModal={closeModal}>
                <OrderDetails identifier={orderDetails.order.number}/>
            </Modal>
            }
        </section>
    )
}

export default BurgerConstructor;
