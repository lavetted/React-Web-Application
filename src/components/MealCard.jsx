function MealCard({ meal, onSave }) {
  return (
    <div className="meal-card">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>
        {meal.strCategory} • {meal.strArea}
      </p>
      <button onClick={onSave}>Save for Date Night ❤️</button>
    </div>
  );
}

export default MealCard;
