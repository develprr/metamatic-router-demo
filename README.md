# A Metamatic Router Demo
A demo app for showcasing the Metamatic framework and testing Metamatic in different real use cases.

### Introduction

A minimal demo app written in ES6 on React to demonstrate & test routing with [Metamatic](https://github.com/develprr/metamatic-framework) framework.

## Live Demo

Check out this demo built, deployed and hosted live [here](https://metamatic-demo.herokuapp.com/router/)!

## Installation

```js
git clone https://github.com/develprr/metamatic-router-demo.git
cd metamatic-router-demo
npm install
```

## Configuring IDE

The **import** statements in JS files in the project refer to other internal JS files using absolute paths assuming that **src-folder** 
is the root folder. Your IDE may not automatically grasp that so you have to mark src folder as **Resources Root**. If you use IntelliJ IDEA, 
right-click *src* folder and select from the context menu *Mark Directory As -> Resources Root".

## Starting the frontend

Make sure you have Node installed!

In project folder type:

```js
npm start
```

## Optional: Start CSS-Watcher

The CSS-styles in the project are defined in SASS files that end with **.scss** extension. To edit styles you have to edit those files.
The project uses a SASS compiler to transpile SASS files into final CSS files. To compile SASS files into CSS, type:

```js
npm run build-css
```

If you want to edit style on the fly when you develop the app it will ease your work if you don't need to explicitly type,
refresh or restart anything every time you have edited SASS files. Therefore start CSS-Watcher to automatically do it for you:

```js
npm run watch-css
```
## Author

Heikki Kupiainen / metamatic.net    
    
## License

Apache-2.0
