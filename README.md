# Full Stack Development Test

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a simple app built with React.js and Node.js. It is part of a test for a position as a Full Stack Developer for an international project.

## Available scripts

### In the "/API" directory, you can run:

`npm install`

Install de required dependencies.

`npm start` or `nodemon server.js`

Runs the API.\
[http://localhost:4000](http://localhost:4000) is the port where the API starts listening.

_The database access URL is declared in a .env file (for security reasons). It won't be functional if you clone the repo but the database is configured with Mongo.db and Mongoose. To make it work, you'll have to replace create a .env file with the following variables:_

```
DATABASE_ACCESS = <paste here your MongoDB connection string>
SALT = <with a number, indicate here the salt rounds for the password encryption>
```

### In the project directory (root of the project), you can run:

`npm install`

Install de required dependencies.

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser (This is the default port for the app).
