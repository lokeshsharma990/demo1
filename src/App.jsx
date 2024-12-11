import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FoodSelector from './FoodSelector';
import NutritionInfo from './NutritionInfo';
import Cart from './Cart';
import SuccessMessage from './SuccessMessage';




const foodData = {
  roti: {
    caloriesPer100g: 300,
    carbPer100g: 46.13,
    proteinPer100g: 7.85,
    fatPer100g: 9.2,
  },
  rice: {
    caloriesPer100g: 358,
    carbPer100g: 79,
    proteinPer100g: 6.5,
    fatPer100g: 0.5,
  },
  sugar: {
    caloriesPer100g: 387,
    carbPer100g: 99.91,
    proteinPer100g: 0,
    fatPer100g: 0,
  },
  flour: {
    caloriesPer100g: 340,
    carbPer100g:72,
    proteinPer100g: 13.2,
    fatPer100g: 2.5,
  },
  banana: {
    caloriesPer100g: 89,
    carbPer100g: 22.84,
    proteinPer100g: 1.09,
    fatPer100g: 0.33,
  },
  milk: {
    caloriesPer100g: 42,
    carbPer100g: 4.5,
    proteinPer100g: 3.2,
    fatPer100g: 0.5,
  },
  peanut: {
    caloriesPer100g: 567,
    carbPer100g: 16.13,
    proteinPer100g: 25.8,
    fatPer100g: 49.2,
  },
  chaiSeed: {
    caloriesPer100g: 490,
    carbPer100g: 42.1,
    proteinPer100g: 21.2,
    fatPer100g: 30.7,
  },
  sattu: {
    caloriesPer100g: 385,
    carbPer100g: 58,
    proteinPer100g: 22,
    fatPer100g: 5,
  },
  oats: {
    caloriesPer100g: 407,
    carbPer100g: 68.5,
    proteinPer100g: 11.8,
    fatPer100g: 9.5,
  },
  curd: {
    caloriesPer100g: 61,
    carbPer100g: 4.7,
    proteinPer100g: 3.5,
    fatPer100g: 3.3,
  },
  soya: {
    caloriesPer100g: 345,
    carbPer100g: 33,
    proteinPer100g: 52,
    fatPer100g: 1,
  },
  paneer: {
    caloriesPer100g: 343,
    carbPer100g: 6.1,
    proteinPer100g: 18,
    fatPer100g: 33,
  },
  whey: {
    caloriesPer100g: 366.4,
    carbPer100g: 7.5,
    proteinPer100g: 76,
    fatPer100g: 3.6,
  },
  besan: {
    caloriesPer100g: 387,
    carbPer100g: 57.8,
    proteinPer100g: 22.4,
    fatPer100g: 6.7,
  },
  wholeEgg: {
    caloriesPer100g: 143,
    carbPer100g: 1.12,
    proteinPer100g: 12.6,
    fatPer100g: 9.5,
  },
  cucumber: {
    caloriesPer100g: 15,
    carbPer100g: 3.63,
    proteinPer100g: 0.65,
    fatPer100g: 0.11,
  },
  cauliflower: {
    caloriesPer100g: 25,
    carbPer100g: 4.97,
    proteinPer100g: 2,
    fatPer100g: 0.3,
  },
  bellPepper: {
    caloriesPer100g: 28,
    carbPer100g: 6.7,
    proteinPer100g: 1,
    fatPer100g: 0.2,
  },
  ghee: {
    caloriesPer100g: 876,
    carbPer100g: 0,
    proteinPer100g: 0,
    fatPer100g: 99.48,
  },
  oil: {
    caloriesPer100g: 900,
    carbPer100g: 0,
    proteinPer100g: 0,
    fatPer100g: 100,
  },
  tomato: {
    caloriesPer100g: 18,
    carbPer100g: 3.9,
    proteinPer100g: 0.9,
    fatPer100g: 0.2,
  },
  onion: {
    caloriesPer100g: 40,
    carbPer100g: 9,
    proteinPer100g: 1.1,
    fatPer100g: 0.1,
  },
  spinach: {
    caloriesPer100g: 23,
    carbPer100g: 3.6,
    proteinPer100g: 3,
    fatPer100g: 0.4,
  },
};

function App() {
  const [selectedFood, setSelectedFood] = useState('');
  const [weight, setWeight] = useState('');
  const [cart, setCart] = useState([]);
  const [nutrition, setNutrition] = useState({
    calories: 0,
    protein: 0,
    carb: 0,
    fat: 0,
  });
  const [showSuccess, setShowSuccess] = useState(false);

 
  const handleFoodChange = (food) => {
    setSelectedFood(food);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };


  const addToCart = () => {
    if (!selectedFood || !weight || weight <= 0) {
      alert('Please select a food and enter a valid weight.');
      return;
    }

    const food = foodData[selectedFood];
    const calculatedNutrition = {
      calories: (food.caloriesPer100g * weight) / 100,
      protein: (food.proteinPer100g * weight) / 100,
      carb: (food.carbPer100g * weight) / 100,
      fat: (food.fatPer100g * weight) / 100,
    };

    const newItem = {
      name: selectedFood,
      weight,
      ...calculatedNutrition,
    };

    setCart([...cart, newItem]);
    setNutrition(calculatedNutrition);
    setShowSuccess(true);


    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (

    <Router>
      <div className='container'>
      
        <div className="header">
        <h1>Food Calories Calculator</h1>
          <Link to="/cart">
            <button className='add-button'><span className="cart-icon">🛒</span>View Cart</button>
          </Link>
        </div>


        <Routes>
          <Route path="/" element={
            <div className="">
              <div className="section-1">
              <FoodSelector
                selectedFood={selectedFood}
                weight={weight}
                onFoodChange={handleFoodChange}
                onWeightChange={handleWeightChange}
              /></div>
              <div className="section-2">
              <NutritionInfo nutrition={nutrition} />
              <SuccessMessage show={showSuccess} />
              </div>
              <div className="section-3">
              <button onClick={addToCart} className='addbtn'>Add to Cart</button>
              </div>
            </div>
          } />

          <Route path="/cart" element={
            <Cart cart={cart} setCart={setCart}/>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
