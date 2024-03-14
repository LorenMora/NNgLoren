# NN/g Senior Frontend Technical Exercise - Loren Mora
*** 
## How to view
Please clone this repo and run `npm install` then you can run the project with `npm start`
***
## Solution description
This is a prototype of an interact panel widget using React. The CSS is organized by css modules to keep the style sheets modular, organized, and to prevent clashing styles in the future. There is a `global.css` where I store variables for our color themes and standard spacing and font sizing. As the endpoints aren't available, I have a skeleton of a hook that is serving the purpose of an api call to GET courses. There are helper functions within `utils/timeAndDates.js` that parse and configure the EST unix timestamps. All buttons are in `components/buttons.js`. These can be made more reusable in the future depending on what our other components and larger design system look like, I kept them more simple for this prototype. 
***
## Questions and thoughts
1. The radio tiles work with the native keyboard functionality of radio buttons, i.e. you can tab to the first one, use arrow keys to move between them, and use the spacebar to select. Should we add more keyboard functionality that some users might expect in addition to these? I'm thinking some might expect to be able to tab between radio buttons and hit enter to select.

2. Should we consider storing unix timespaces in UTC time instead of local time to make them easier to work with?
