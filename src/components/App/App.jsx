import React, { useEffect, useState } from 'react';
import AppHeader from '../AppHeder/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styles from './App.module.css';
import {getIngredients} from "../../utils/api";
import Preloader from "../Preloader/Preloader";

import {DataContext} from "../../context/dataContext";

function App() {
  const [ingredients, setIngredients] = useState([])
  const [selectedBun, setSelectedBun] = useState(null)
  const [otherIngredients, setOtherIngredients] = useState([])
  const [onLoad, setOnLoad] = useState(false)

    useEffect(() => {
      setOnLoad(true)
        getIngredients().then(res => {
          setIngredients(res.data)
          const bun = res.data.find(item => item.type === 'bun')
          setSelectedBun(bun)
        })
        .catch((res) => {
          console.log(res)
        })
        .finally(()=>{
            setOnLoad(false)
        })
}, [])

const addIngredientToCart = (ingredient) => {
  if (ingredient.type === 'bun') {
      setSelectedBun(ingredient)
      return
  }
  setOtherIngredients([...otherIngredients, ingredient])
}


  return (
    <div className={styles.App}>
    <AppHeader/>
    <main className={styles.main}>
    {
        onLoad ? <Preloader/> :
        <>
    <BurgerIngredients data={ingredients} addIngredientToCart={addIngredientToCart}/>
    <DataContext.Provider value={{ otherIngredients, selectedBun }}>

        <BurgerConstructor />
    </DataContext.Provider>
    </>
}
    </main>
</div>
);
}

export default App;
