import React from 'react';
import AppHeader from '../AppHeder/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import data from '../../utils/data';
import Styles from './App.module.css';

function App() {
  return (
    <div className={Styles.App}>
    <AppHeader/>
    <main className={Styles.main}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
    </main>
</div>
);
}

export default App;
