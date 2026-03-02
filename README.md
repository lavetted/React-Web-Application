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

## 📸 Features

- Generate a random dinner with one click

- View meal name, image, cuisine, and category

- Save favorite dinner options

- Randomly select a final dinner from saved meals

- Persistent saved list using localStorage

- Responsive dark-themed UI

## 🔄 Reset Application State

The application includes a Reset button that clears all user selections and returns the interface to its initial state.

When activated, the reset feature:

- Removes all saved dinner choices

- Clears the currently displayed meal

- Removes the selected final winner

- Deletes stored data from browser localStorage

- Plays a smooth fade-out animation before clearing the UI

This functionality ensures users can restart the decision-making process at any time without manually refreshing the page.