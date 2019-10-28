# case2019s-frontend
Front-end React and Reedux web app for the Fall 2019 case

## How was the project created? (Naturally the creation happens only once, other developers clone the repo)
1. repository created at GitHub.com
2. gitignore improved to contain more things, like Windows and Mac temp files and folder cache files etc.
3. repository cloned to the desired local root root folder
4. create-react-app run in a different folder c:\temp so that it would create project with exactly same (folder) name as repo, but in a different place. For me the create-react-app did run only when referred from ~/AppData/Roaming/npm/ folder where it was installed.
5. contents of the create-reac-app generated React project template were carefully copied to the repo, and those additions committed, and pushed to remote as well.
6. npm install was run for the possible needed additional libraries/npm modules, to get at least these to the package.json

    "axios": "^0.18.1",
    "moment": "^2.24.0",
    "react": "^16.11.0",
    "react-dom": "^16.11.0",
    "react-redux": "^6.0.1",
    "react-router-dom": "^5.1.2",
    "react-scripts": "^3.2.0",
    "redux": "^4.0.4",
    "redux-thunk": "^2.3.0"

npm install axios

npm install react-router-dom

npm install redux react-redux redux-thunk

npm install moment
    
7. git commit again, and push. So that remote package.json would refer to the new dependencies as well.
8. creating folders action, components, constants, (models?), reducers, router, views (with some empty index.js for each)
9. adding the redux store creation function
10. calling there the rootreducer to get the combined reducers to the store
11. wrapping the Redux store Provider element around the the root React element so that all the elements get the same Redux store

... then how to add Router

... then how to add the Material-UI styling
