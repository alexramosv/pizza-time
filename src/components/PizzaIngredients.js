import React from "react";
import PizzaIngredient from "./PizzaIngredient";

class PizzaIngredients extends React.Component {
  render() {
    return (
      <div className="menu">
        <ul className="ingredients">
          {Object.keys(this.props.ingredients).map(ingredientsKey => (
            <PizzaIngredient
              key={ingredientsKey}
              ingredientKey={ingredientsKey}
              ingredient={this.props.ingredients[ingredientsKey]}
            />
          ))}
        </ul>
      </div>
    );
  }
}

/*  const PizzaIngredients = () => <h1>Pizza Ingredient</h1>;
 */
export default PizzaIngredients;

/* TODO: Create the PizzaIngredients Component consisting of:
  - An `ul` where you `map` over `ingredients` to create a `PizzaIngredient` per `ingredientKey`
*/
