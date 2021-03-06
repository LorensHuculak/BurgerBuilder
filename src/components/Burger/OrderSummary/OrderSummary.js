import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {


    render () {

        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return <li key={igKey}>
               {this.props.ingredients[igKey] === 0 ? 'No' : this.props.ingredients[igKey]+'x'} <span style={{textTransform: 'capitalize'}}>{igKey}</span>
                </li>;
        });
        return(
            <Aux>
            <h3>
               Order Summary
            </h3>
            <hr />
            <p className="paragraph">You have ordered the following toppings</p>
            <ul>
        {ingredientSummary}
            </ul>
        
        <p style={{marginBottom: '35px'}}>Total Price <span className="PriceSpan"> {this.props.price.toFixed(2)} <i className="fab fa-ethereum "> </i> </span> </p>
        
        
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}><i className="fas fa-arrow-left"></i></Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued }>Continue <i className="fas fa-arrow-right" style={{paddingLeft: '15px'}}></i></Button>
            </Aux>
        );
    }
} 

export default OrderSummary;