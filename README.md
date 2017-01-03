Stellar Wind
============

### technologies
- NPM
- Webpack
- Angular 1.5
- Express 4
- ES6 / Babel
- SASS / Bourbon

### installation

Install dependencies:

```
$ npm install
```

Install webpack globally

```
$ npm install -g webpack
```

### development

Run server with:

```
$ npm start
```

It runs express server on localhost on port 3000 and webpack-dev-server on port 3001 with proxing requests from the first one to the second one.

You can specify host of the application:

```
$ APP_HOST=appdomain.com npm start
```

Application has two separate directory `app` and `public`. The entry point for frontend is `public/app.js` file and for backend it is `app/index.js`.

### production

Build assets for the application and run distribution build:

```
$ npm run dist
```
