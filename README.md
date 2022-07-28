# book-search-api-refactor

![language](https://img.shields.io/github/languages/top/struelensc/book-search-api-refactor?style=flat-square)

## Description

This project was to refactor a fully fuctioning Google Books API search engine built with a RESTful API to be a GraphQL API built with Apollo Server. This app was created using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API.

To complete this project I had to set up an Apollo Server using to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API. I had to modify the existing authentication middleware so that it works in the context of a GraphQL API and create an Apollo Provider so that requests can communicate with an Apollo Server. Then finally I had to deploy the refactored application to Heroku with a MongoDB database using MongoDB Atlas.

This app uses:

- Node.js
- Express.js
- React
- MongoDB and Mongoose
- Apollo Server and GraphQL

## Table of Contents

- [Startup](#startup)
- [Appearance](#appearance)
- [License](#license)
- [Questions](#questions)

## Startup

`npm i`

`npm run develop`

## Appearance

You can launch the deployed Heroku site [here](https://book-search-api-refactor.herokuapp.com/).

![gif](./demo.gif)

## License

See the ISC License for license rights and limitations (ISC License).

## Questions

Feel free to reach me on [GitHub](https://github.com/struelensc).
