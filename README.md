# 🍽️ Date Night Dinner Picker

A React web application that helps users decide what to eat by generating random dinner ideas and selecting a final winner from saved choices. Built as a Single Page Application using React hooks, external API data, and browser local storage.

# 🚀 Live Demo

([My Netlify link here](https://datenight-dinner-picker.netlify.app/))


# ▶️ How to Use

1. Click Pick Random Dinner

2. Review the generated meal

3. Click Save for Date Night to store options

4. After saving multiple meals, click Pick Final Dinner

5. The app randomly selects the dinner choice

# 🧠 Application Approach

The application is structured using reusable React components and managed through React state and lifecycle hooks.

## Framework

- App manages global state and API requests

- MealCard displays the current meal

- SavedMeals displays saved dinner options

## State Management

- useState for meals, saved list, and winner

- useEffect for:

  - Fetch side effects

  - Local storage persistence