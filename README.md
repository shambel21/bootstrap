
## Introduction

Notifyme is the front-end application for alert management system -- it has the web application for logged in/public users.


##Folder structure and organization

```
Notifyme
|-- app.js
|-- package.json 
|-- node_modules
|      |- npm package folders 
|--src
|    |- lib
|    |- models
|    |- routes
|    |- views
|--test
|--public

```


- `public` : the public folder has all the static files that will be use to render the web application -- such as css, image and html files

- `app.js`: It is conventional to have the main app.js file in the root directory. The app.js is the entry point of our application and will be used to launch the server.
- package.json: As with any Node.js app, we have package.json in the root folder specifying our application name and version as well as all of our npm dependencies.
- node_modules: The node_modules folder and its content are generated via npm installation and ignored by version control.



- `src`: The src folder contains all the logic of the application.
- `lib`: Within the src folder, we have the lib folder, which contains the core of the application. This includes the middleware, routes, and creating the database connection.
- `models`: The models folder contains our mongoose models, which defines the structure and logic of the models we want to manipulate and save.
- `routes`: The routes folder contains the code for all the endpoints the API is able to serve.
- `test`: The test folder will contain our functional tests using Mocha as well as two other node modules, `should` and `supertest`, to make it easier to aim for 100 percent coverage.



## Start the application

**Start the app in docker**

1. from the repo main directory build the app in terminal ` docker build -t notifyme .`
2. run the app `docker run -p 8500:8500 notifyme`

**Start the app for non docker env**

1. `npm install`
2. `node app.js`