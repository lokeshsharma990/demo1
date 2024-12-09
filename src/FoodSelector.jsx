import React from 'react';


function FoodSelector({ selectedFood, weight, onFoodChange, onWeightChange }) {
  return (
    <div className="food-selector">
      <label className="label">Select Food</label>
      <select onChange={(e) => onFoodChange(e.target.value)} value={selectedFood}>
        <option value="">Select Food</option>
        <option value="roti">Roti</option>
<option value="rice">Rice</option>
<option value="sugar">Sugar</option>
<option value="cheese">Cheese</option>
<option value="banana">Banana</option>
<option value="milk">Milk</option>
<option value="peanut">Peanut</option>
<option value="chaiSeed">Chai Seed</option>
<option value="sattu">Sattu</option>
<option value="oats">Oats</option>
<option value="curd">Curd</option>
<option value="soya">Soya</option>
<option value="paneer">Paneer</option>
<option value="whey">Whey</option>
<option value="besan">Besan</option>
<option value="wholeEgg">Whole Egg</option>
<option value="cucumber">Cucumber</option>
<option value="cauliflower">Cauliflower</option>
<option value="bellPepper">Bell Pepper</option>
<option value="ghee">Ghee</option>
<option value="oil">Oil</option>
<option value="tomato">Tomato</option>
<option value="onion">Onion</option>
<option value="spinach">Spinach</option>

      </select>
      <label className="label">Amount (grams)</label>

      <input
        type="number"
        value={weight}
        onChange={onWeightChange}
        placeholder="Enter weight in grams"
      />
    </div>
  );
}

export default FoodSelector;
