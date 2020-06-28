# Breathing Mindfulness App

A mindfulness/breathing app but meant as simple app I can play about / experiment with. I will use this app with other technologies to build 
and maintain it. Ultimately the goal is to learn these other technologies through it.

Technologies (Goals) to include in the build and front end:

- [Gulp](https://gulpjs.com/) Toolkit  & Task Runner (Although overkill for this app just a basic understanding and use of Task building and SASS/LESS compiler)
- SASS / LESS (Take the current CSS and refactor into CSS preprocessor. I'll compile with Gulp to create the CSS)
- jQuery (DOM manipulation for frontend UX)

---

## Audit

- Gulp version 4.0.2 added 28/06/20 - Can now build from source to public folder
    - All JS files are concatenated and minified into one file into the public folder
    - Decided on LESS. All LESS files are concatenated and minified and complied into one CSS file into the public folder

## Commands Available

`npm run start-dev` will run both `npm i` and `gulp build` to get up and started.

Both `gulp build` & `npm run build` to build source code to dist/public folder.

Both `gulp watch` & `npm run watch` to watch JS and LESS files for change. On change files are put through
there respective Gulp task. 

---

## TODO

- Check that JS is also converted to ES5 JS syntax
- Update app so that we have 1 Start/Stop sound button (not separate) use jQuery