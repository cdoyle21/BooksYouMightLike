# Perlego Assessment

A "Books You Might Like" grid component created using React, JS, NodeJS, MySql and styled-components for Perlego. User can scroll through to see what books are on offer. When using a mobile device, the grid will collapse to 2 columns.

## Table of Contents

- [Clone repo and install NPM packages](#clone-repo-and-install-npm-packages)
- [Run Server](#run-server)
- [Run Tests](#run-tests)

## Clone repo and install NPM packages

Clone repo into local folder

```
git clone git@github.com:cdoyle21/perlego-assessment.git perlego-assessment
```

Navigate to root folder

```
cd perlego-assessment
```

Install NPM packages

```
npm install
```

Start the react app

```
npm run start:client
```

## Run Server

Open new terminal. Run static server and fetch the books data from the mysql database

```
npm run start:server
```

The data from the database should then be viewable on the following endpoint:
http://localhost:3001/api/books

## Run Tests

Open new terminal. Navigate to client folder

```
cd client
```

Run tests

```
npm test
```

## Notes

Within the file /backend/server.js I have left in some commented out code. It would be code used if the data needed to be posted to the database through the server API. However, I did not see in the Task description that the dump of information needed to be added dynamically so I added it myself to use with the rest of my work.
