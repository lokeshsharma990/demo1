import React from 'react';

function NutritionInfo({ nutrition }) {
  return (
    <div className="nutrition-info">
      <h1 className='nutri-title'>Nutrition Information</h1>
      <div className="grid">
      <p className='hey'>Calories <br></br><p className='value'>{nutrition.calories} kcal</p></p>
      <p className='hey'>Protein <br></br><p className='value'>{nutrition.protein} g</p></p>
      <p className='hey'>Carbs <br></br><p className='value'>{nutrition.carb} g</p></p>
      <p>Fat <br></br><p className='value'>{nutrition.fat} g</p></p>
      </div>
    </div>
  );
}

export default NutritionInfo;
