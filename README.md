# Overview

The project feeds off the django backend and is connected to it via rest API. The react fronented is written in typescript, a superset of javascript
to make the development experience better and having errors appear before runtime.

The application uses Json web tokens for authentication and communicates with the server via https for safety. 

In the dashboard, institutions sign up and sign in to the dashboard. Here they can add their website. They can also view explicit suggestions from users on
how they can improve their website. 

The code base uses primereact and the aid of chakra UI for asthetics and visual representation of the data via graphs. 

The  data tables implement lazy loading for perfomance considerations.



## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all dependencies in the package.json file.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
