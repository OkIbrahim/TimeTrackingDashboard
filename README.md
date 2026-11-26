# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://frontendmentor.io). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Getting Started](#getting-started)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links

- Solution URL: [https://github.com](https://github.com/OkIbrahim/TimeTrackingDashboard.git)
<!-- - Live Site URL: [https://vercel.app](https://vercel.app) -->

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox & CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org) - JS library
- [Vite](https://vitejs.dev) - Frontend build tool

### What I learned

Building this dashboard helped reinforce clean component architecture and state management in React:

- **Lifting State Up:** Managing the active `timeframe` (`daily`, `weekly`, `monthly`) in `App.jsx` allowed `ProfileCard` to trigger updates while `ActivityCard` components dynamically re-rendered their metrics.
- **Dynamic Data Mapping:** Extracting timeframe keys directly from `data.json` with `Object.keys()` and using bracket notation (`item.timeframes[timeframe]`) kept the UI decoupled from hardcoded values.
- **Overlapping Card Architecture:** Using a two-layer card layout with `overflow: hidden` on the colored top banner and a negative top margin on the dark content card prevented background color bleed at the bottom corners while clipping the decorative SVG icons cleanly.

```jsx
{
  data.map((item) => (
    <ActivityCard
      key={item.title}
      title={item.title}
      current={item.timeframes[timeframe].current}
      previous={item.timeframes[timeframe].previous}
      timeframe={timeframe}
    />
  ));
}
```

### Continued development

In future iterations, I would like to:

- Add smooth number transition animations when toggling between Daily, Weekly, and Monthly stats.
- Persist the user's selected timeframe in `localStorage` so it stays selected across page reloads.
- Add interactive options to the three-dot ellipsis menu on each activity card.

## Getting Started

To run this project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/OkIbrahim/TimeTrackingDashboard.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## Author

- Frontend Mentor - [@OkIbrahim](https://frontendmentor.io/profile/OkIbrahim)
- GitHub - [@OkIbrahim](https://github.com/OkIbrahim)
