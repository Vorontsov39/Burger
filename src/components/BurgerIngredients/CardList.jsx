import Card from "./Card";
import Styles from "./CardList.module.css";

function CardList({data, type, name}) {
    return (
        <>
            <h2 className={'text text_type_main-medium'}>{name}</h2>
            <ul className={`${Styles.list} pt-6`}>
                {data.map((card) => (
                    card.type === type &&
                    <Card image={card.image} name={card.name} price={card.price} key={card._id}/>
                ))}
            </ul>
        </>
    )
}

export default CardList;
