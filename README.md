
### HEALTH APP

## Description
This project is a healthcare application that helps users track their fitness progress by monitoring their achievement rate, body fat percentage, meal history, exercise record, and diary.

## Problem
Many fitness tracking applications are too complex and overwhelming, making it difficult for users to set and achieve their fitness goals. We wanted to create a simple and user-friendly fitness tracking application that focuses on the essentials.

## Solution
Our fitness tracking application allows users to monitor their achievement rate, body fat percentage, meal history, exercise record, and diary. It has a simple and intuitive interface that makes it easy to use. Users can set fitness goals, log meals and exercise, track their progress, and view graphs and charts to visualize their data.
The application is built using React as framework for building the UI.
To handle state management we use Redux for handling those.
For Building the Graph chart, we use 3rd library react-chartjs-2 for implemening the chart as it stability.

## Operation Verification Procedure
To verify that the application is working correctly, follow these steps:

# Setup project
1. Clone the repository to your local machine.
2. Install the dependencies by running `yarn`.
3. Add the ENV file:
    REACT_APP_PUBLIC_APP_ENV=staging
    REACT_APP_PUBLIC_ARENT_DOMAIN=http://localhost:3000
3. Start the application by running `yarn start`.
Open your web browser and go to http://localhost:3000.

# Testing App working flow
At TOP PAGE:
View your achievement rate.
View your body fat percentage .
View your Meal history .
- For the browsemore button of history: Will appear when the showing list is not shown full list. 
- For the Back to Top button: to keep user at the page more longer. The logic should be, it will be hide, untill the user want to scroll up.

At MY RECORD PAGE:
View your body fat percentage .
View your Exercise record .
View your Diary record .
- For the browsemore button of history: Will appear when the showing list is not shown full list. 
- For the Back to Top button: to keep user at the page more longer. The logic should be, it will be hide, untill the user want to scroll up.

At COLUMN PAGE:
View your Recommend items.
View your recommended meals .
- For the browsemore button of history: Will appear when the showing list is not shown full list. 
- For the Back to Top button: to keep user at the page more longer. The logic should be, it will be hide, untill the user want to scroll up.

If all of these steps completed successfully, the application is working correctly.


### Technical Note:
## Using import styled from "styled-components/macro";
Due to this app is using create-react-app, so we need to use [import styled from "styled-components/macro"] instead of [import styled from "styled-components/macro"] to display the component name on the devtool for debuging easily.

## Using react-lazy-load-image-component to optimize image loading performance

