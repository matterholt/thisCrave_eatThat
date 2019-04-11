import React, { Component } from 'react';
import './App.css';
import WantEat from './component/WantEat'
import EatThis from './component/EatThis'
import NutrientsNeed from './component/NutrientsNeed'

const want_example = "Chocolate"
const eatThis_example = "Nuts,Seeds"
const nutrient_example ="Magnesium"


class App extends Component {
  render() {
    return (
      <div className="App">
      <WantEat />
      <EatThis/>
      <NutrientsNeed />
      </div>
    );
  }
}

export default App;
