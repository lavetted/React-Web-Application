import { useState, useEffect } from "react";
import MealCard from "./components/MealCard";
import SavedMeals from "./components/SavedMeals";
import "./App.css";

function App() {
  const [meal, setMeal] = useState(null);
  const [savedMeals, setSavedMeals] = useState([]);

  const getRandomMeal = async () => {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php",
    );
    const data = await res.json();
    setMeal(data.meals[0]);
  };

  const saveMeal = () => {
    if (!savedMeals.find((m) => m.idMeal === meal.idMeal)) {
      setSavedMeals([...savedMeals, meal]);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("dinnerChoices");
    if (stored) setSavedMeals(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("dinnerChoices", JSON.stringify(savedMeals));
  }, [savedMeals]);

  return (
    <div className="App">
      <h1>Date Night Dinner Picker 🍽️</h1>

      <button onClick={getRandomMeal}>Pick Random Dinner 🎲</button>

      {meal && <MealCard meal={meal} onSave={saveMeal} />}

      <SavedMeals meals={savedMeals} />
    </div>
  );
}

export default App;
