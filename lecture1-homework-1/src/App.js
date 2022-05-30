import './App.css';

import React, {useState} from 'react';
import Store from './components/Store'

/* Светлана Чиндяева, 2022 */
/* Функциональный компонент приложения */
function App() {  
  // стейт, хранящий флаг текущего представления: true - список, false - карточки
  const [state, setState] = useState(false);

  // товары
  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];


  const onSwitchHandler = (event) => {
      // предотвращаем любую прочую обработку этого события
      if (event)
      {
        event.preventDefault();
        event.stopPropagation();
      }
      
      // меняем стейт, указывая режим отображения на противоположный
      // с помощью отрицания "не" ("!чтото")
      setState((previousState) => { return !previousState; });
  };

  return (
    <>
      <Store listMode={state} products={products} onSwitch={onSwitchHandler} />
    </>
  );
}

export default App;
