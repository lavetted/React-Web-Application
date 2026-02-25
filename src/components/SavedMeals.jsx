function SavedMeals({ meals }) {
  return (
    <div>
      <h2>Final Dinner Options</h2>
      {meals.map((meal) => (
        <p key={meal.idMeal}>{meal.strMeal}</p>
      ))}
    </div>
  );
}

export default SavedMeals;
