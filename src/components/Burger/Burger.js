import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import Logo from '../Layout/Logo/Logo2';
import {withRouter} from 'react-router-dom';

const burger = (props) => {
    

     let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
          return  <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []); 

    if (transformedIngredients.length === 0) {
transformedIngredients = <Logo />;
;
    }

return(
    <div class="BurgerContainer">
    <div className="Burger">
<BurgerIngredient type="bread-top" />
{transformedIngredients}
<BurgerIngredient type="bread-bottom" />
    </div>
    </div>
);
};

export default burger;