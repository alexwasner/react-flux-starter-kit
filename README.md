#React Native Flux Starter (WIP)
---
This is a starter kit of variuos tools I like to use for React projects. It uses the following tools:

- [React](https://facebook.github.io/react/) for overall view architecture
	- [Alt.js](http://alt.js.org/) for the [flux](https://facebook.github.io/flux/) implementation with React
	- [React Router](https://github.com/rackt/react-router) for routing within the app
- [LESS](http://lesscss.org/) for CSS pre-processing
- [Gulp](http://gulpjs.com/) for building, watching and minifying code
- [npm](https://www.npmjs.com/) as a package manager

---

##Getting Started
1. After downloading the source, you will need to get all of the required packages to run the local server. 
	- Run `npm install` (For more information on npm, see [npmjs.com](https://www.npmjs.com/))
2. After install completes, you can run `gulp watch` to start the live-reload server. If a browser did not open, you can go to `localhost:8085` to view the base page. 
3. To build the minified version of the code, use `gulp build`


##Gulp Tasks
`gulp` - Build local code and start a server  
`gulp watch` - Build local code and start server with LiveReload  
`gulp build` - Build the code and uglify it for deployment to firebase