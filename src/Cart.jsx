import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook for navigation
import './Cart.css';

function Cart({ cart, setCart }) {
  const navigate = useNavigate(); // Initialize navigate function

  // Calculate the total macros in the cart
  const totalMacros = cart.reduce(
    (acc, item) => {
      acc.calories += item.calories;
      acc.protein += item.protein;
      acc.carb += item.carb;
      acc.fat += item.fat;
      return acc;
    },
    { calories: 0, protein: 0, carb: 0, fat: 0 }
  );

  // Function to handle navigation back to the home page
  const handleExitCart = () => {
    navigate('/'); // Navigate to the home page (can change to other route)
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]); // Set the cart state to an empty array, clearing the cart
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Please add some items.</p>
      ) : (
        <div className="cart-items">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Food Item</th>
                <th>Weight (g)</th>
                <th>Calories</th>
                <th>Protein</th>
                <th>Carbs</th>
                <th>Fats</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.weight}</td>
                  <td>{item.calories.toFixed(2)}</td>
                  <td>{item.protein.toFixed(2)}</td>
                  <td>{item.carb.toFixed(2)}</td>
                  <td>{item.fat.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="total-macros">
            <h3>Total Macros</h3>
            <p><strong>Total Calories:</strong> {totalMacros.calories.toFixed(2)} kcal</p>
            <p><strong>Total Protein:</strong> {totalMacros.protein.toFixed(2)} g</p>
            <p><strong>Total Carbs:</strong> {totalMacros.carb.toFixed(2)} g</p>
            <p><strong>Total Fat:</strong> {totalMacros.fat.toFixed(2)} g</p>
          </div>
        </div>
      )}

      <div className="cart-buttons">
        <button className="exit-cart-button" onClick={handleExitCart}>
          Exit Cart
        </button>
        <button className="clear-cart-button" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
