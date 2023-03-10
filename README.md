# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).




### Problem and solution
Problem: 
As a user who struggled with weight and heath issues, I wanted to track my progress on a personalized nutrition plan.

User Story:
As a user following a personalized nutrition plan. I want to track my diet rate to monitor my progress towards achieving my goal weight.

Acceptance Criteria:
Create a custom field in to track diet rate (percentage of days following the nutrition plan).
Create a custom field in to track my Body fat percentage .
Create a custom field in to see the histories of meal that User consume.
Monitor my progress towards achieving my goal weight based on my diet rate trend all in one.




Technical Note:
## Using import styled from "styled-components/macro";
Due to this app is using create-react-app, so we need to use [import styled from "styled-components/macro"] instead of [import styled from "styled-components/macro"] to display the component name on the devtool for debuging easily.

## Using react-lazy-load-image-component to optimize image loading performance

## Using nanoid to generate unique string ID for JavaScript in somecase we don't have uniqe key.

#For the Browsemore button, it should be shown only when the number of listing < total remained meals

#For the Back To Top button, to keep user at the page more longer. The logic should be, it will be hide, till the user want to scroll up. Need to find the logic to make it.