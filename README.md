
### HEALTH APP

## Description
This project is a healthcare application that helps users track their fitness progress by monitoring their achievement rate, body fat percentage, meal history, exercise record, and diary.

## Problem
Many fitness tracking applications are too complex and overwhelming, making it difficult for users to set and achieve their fitness goals. We wanted to create a simple and user-friendly fitness tracking application that focuses on the essentials.

## Solution
Our fitness tracking application allows users to monitor their achievement rate, body fat percentage, meal history, exercise record, and diary. It has a simple and intuitive interface that makes it easy to use. Users can set fitness goals, log meals and exercise, track their progress, and view graphs and charts to visualize their data.
The application is built using React as a framework for building the UI. To handle state management, we use Redux.
For building the Graph chart, we use the 3rd-party library react-chartjs-2 for implementing the chart as it provides stability.

## Operation Verification Procedure
To verify that the application is working correctly, follow these steps:

# Setup project
1. Clone the repository to your local machine:
    git clone `https://github.com/PAPAYAHUNG/arentTest.git`
2.Change the node version to `v16.13.1`
    Can use nvm install v16.13.1 => nvm use v16.13.1
3. Install the dependencies by running `yarn`.
4. Add the ENV file:
    REACT_APP_PUBLIC_APP_ENV=staging
    REACT_APP_PUBLIC_ARENT_DOMAIN=http://localhost:3000
5. Start the application by running `yarn start`.
6. Open your web browser and go to http://localhost:3000.

## Testing App working flow
# At TOP PAGE:
- View your achievement rate.
- View your body fat percentage.
- View your meal history.
- For the Browse More button of history: it will appear when the showing list is not shown full list.
- For the Back to Top button: to keep the user on the page for a longer time. The logic should be that it will be hidden until the user wants to scroll up.

# At MY RECORD PAGE:
- View your body fat percentage graph:
Users can interact with the period item [day, week, month, year] to see their activities.
- View your exercise record.
Users can see their exercise record, if the exercise exceeds the height of the container, it can be scrollable.
- View your diary record.
- For the Browse More button of MY DIARY: it will appear when the showing list is not showing the full list (shown list < total list)
- For the Back to Top button: to keep the user on the page for a longer time. The logic should be that it will be hidden until the user wants to scroll up.

# At COLUMN PAGE:
- View your Recommend items.
- View your recommended meals .
- For the Browse More button of Recommend meals list: Will appear when the showing list is not showing the full list. 
- For the Back to Top button: to keep user at the page more longer. The logic should be, it will be hide, until the user want to scroll up.

If all of these steps completed successfully, the application is working correctly.


### Technical Note:
- Using import styled from "styled-components/macro";
Due to this app is using create-react-app, so we need to use `import styled from "styled-components/macro"` instead of `import styled from "styled-components"` to display the component name on the devtool for debugging easily.

- Using react-lazy-load-image-component to optimize image loading performance

