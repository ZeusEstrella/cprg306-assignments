import React, { useEffect, useState } from 'react';

const MealIdeas = ({ ingredient }) => {
  // Define a state variable to hold the list of meal ideas fetched from the API.
  const [meals, setMeals] = useState([]);

  // Define a function to fetch meal ideas from the API based on the ingredient.
  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      // Extract the list of meals from the response data.
      const mealList = data.meals;
      if (mealList) {
        setMeals(mealList);
      } else {
        setMeals([]); // If no meals are found for the ingredient, set meals to an empty array.
      }
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
      setMeals([]); // Handle errors by setting meals to an empty array.
    }
  };

  // Define a function to load meal ideas when the ingredient prop changes.
  const loadMealIdeas = () => {
    fetchMealIdeas(ingredient);
  };

  // Use the useEffect hook to call loadMealIdeas when the ingredient prop changes.
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  // Render the component with a list of meal ideas.
  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
