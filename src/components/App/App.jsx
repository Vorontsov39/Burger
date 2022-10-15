import React, { useEffect, useState } from 'react';
import AppHeader from '../AppHeder/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styles from './App.module.css';
import {getIngredients} from "../../utils/api";



function App() {
  const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        getIngredients().then(res => {
            setIngredients(res.data)
        })
            .catch(console.log)
    }, [])

  return (
    <div className={styles.App}>
    <AppHeader/>
    <main className={styles.main}>
        <BurgerIngredients data={ingredients} />
        <BurgerConstructor data={ingredients} />
    </main>
</div>
);
}

export default App;
