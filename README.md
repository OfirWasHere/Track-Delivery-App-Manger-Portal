## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `firebase emulators:start --only auth` 

This lets you run firebase auth on your own system, make sure .env files are updated to latest version and in useFirebase hook uncomment connectAuthEmulator

### todo:

1. upgrade navbar to v2 - done

2. finish welcome page design v2 - in work,

3. fix welcome page scroll effect - in work

4. update log in modal - in progress

5. fix auth with google provider, if user logs in with email and password, google log in removes that option not letting user log in again, block users who try to log in using google auth when they used email and password unless they merge their account 

6. global ltr rtl

7. optimize loading times, remove toolkit, remove unused imports, remove v1 navbar, v1 welcome page

8. finish log in page, if user tries to go into dashboard and is not logged in.

9. notifications, fix all page errros with toasty, currently it shows "a lot of text from firebase auth"

10. Fix fonts


todo think of a name for the app. 
OnTrack
SoftFox
SwiftFox
FleetFox
TrackFlow 
FleetMaster etc