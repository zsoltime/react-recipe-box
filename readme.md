# React Recipe Box

This is my recipe box for Free Code Camp's [third React challenge](https://www.freecodecamp.com/challenges/build-a-recipe-box). Demo is available on [my site](https://zsolti.co/fcc/recipes/).

## User Stories

- [x] I can create recipes that have names and ingredients.
- [x] I can see an index view where the names of all the recipes are visible.
- [ ] I can click into any of those recipes to view it.
- [ ] I can edit these recipes.
- [x] I can delete these recipes.
- [x] All new recipes I add are saved in my browser's local storage. If I refresh the page, these recipes will still be there.

## Tools Used

- [React.js library](https://facebook.github.io/react/)
- [Webpack module bundler](https://webpack.js.org/)
- [Babel.js compiler](https://babeljs.io/)
- [ESLint linter](http://eslint.org/) with [Airbnb's JS config](https://github.com/airbnb/javascript)
- [Sass](http://sass-lang.com/) preprocessor with [PostCSS' Autoprefixer](https://github.com/postcss/autoprefixer)
- [Karma](https://karma-runner.github.io) test runner
- [Mocha](https://mochajs.org/) test framework
- [Expect](https://github.com/mjackson/expect) assertion library

## Install and Build

You need to have `yarn` [installed](https://yarnpkg.com/lang/en/docs/install/) on your computer, or you can use `npm`.

#### Clone this repo

``` bash
git clone https://github.com/zsoltime/react-recipe-box
cd react-recipe-box
```

#### Install dependencies

``` bash
yarn
# OR
npm install
```

#### Start dev server with hot reload

It builds HTML, CSS, and the JavaScript bundle, starts a dev server and refreshes the browser on every saved changes.

``` bash
yarn start
# OR
npm start
```

#### Build production bundle

It builds production bundle, uglifies JS, minifies CSS - ready to upload.

``` bash
yarn build
# OR
npm run build
```

#### Run unit tests

Run unit tests with Karma and Mocha

``` bash
yarn test
# OR
npm run test
```
