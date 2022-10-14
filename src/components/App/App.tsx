import React, { useEffect, useState } from 'react';
import AppHeader from '../AppHeder/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
//import data from '../../utils/data';
import Styles from './App.module.css';
import {api, parseResponse} from "../../utils/api";


function App() {
  function getData () {
    return fetch(`${api.url}`)
        .then(parseResponse)
        .then((json) => {setIngredients(json.data)})
        .catch(err => {console.log(err)});
  }
  
  useEffect(() => {
    getData();
  }, []);
  
  const [ingredients, setIngredients] = useState([])
  return (
    <div className={Styles.App}>
    <AppHeader/>
    <main className={Styles.main}>
        <BurgerIngredients data={ingredients}/>
        <BurgerConstructor data={ingredients}/>
    </main>
</div>
);
}

export default App;
