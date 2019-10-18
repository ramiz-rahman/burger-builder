import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('[ORDER SUMMARY] WillUpdate');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(type => (
      <li key={type}>
        {type}: {this.props.ingredients[type]}
      </li>
    ));
    return (
      <Aux>
        <h3>Your Order:</h3>
        <p>A delicious burger with the following ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>
          Total price: <strong>${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
