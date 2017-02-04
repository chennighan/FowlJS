# ![FowlJS](https://raw.githubusercontent.com/chennighan/FowlJS/master/FowlJS.png) FowlJS #
FowlJS is a JavaScript library for filtering profanity.
  
  
## Wiki and Other Resources ##
* [FowlJS Wiki](https://github.com/chennighan/FowlJS/wiki)

## Usage ##
* download `/dist/fowl.js` and include in your project, for example:  
```
<script src="path/to/your/fowl.js" type="text/javascript"></script> 
```

## Development Getting Started ##
* `npm install` - installs the needed module dependencies.
* `npm test` - runs the unit tests via **phantomjs**, **karma**, **mocha**, and **chai**
* `grunt` - runs the following tasks in order <sub><sup>(note, grunt does this for you, you don't have to)</sup></sub>:
    * `clean` - deletes the JavaScript files out of the dist folder.
    * `jshint` - lints the given JavaScript files for warnings, errors, and general syntax.
    * `browserify` - loads all the required modules the library needs, concatenates everything, and places the finished **fowl.js** file inside the **dist** folder.
  
    
## Contribution Guidelines ##
### Editor ###
We have a .editorConfig file that contains all of our styling for any editor. Whatever editor you choose to use, please download the extension/addon/plugin you need in order for your editor to pick up and implement the file.

### Code/Syntax/Logic ###
* We follow JSDoc specifications for comments so for example, please try and adapt/mimic the following:
```javascript
/**
 * TypeOfFunction(utility, constructor, factory) for doing x,y,z
 * @param {type} nameOfParam: what the param does.
 */
this.explanationFactory = function(nameOfParam) {

};
```
### Branching ###
* Our workflow revolves around 2 main branches: **master** and **develop**.
* **develop** is a direct branch off of **master**.
* All `feature` and `bugfix` branches will branch off of **develop** and be prepended with `feature/` for feature branches and `bugfix/` for bugfix branches. The name of your feature or bugfix must be dash separated, for example:  
```
$ git checkout -b feature/<name-of-my-feature> develop

$ git checkout -b bugfix/<name-of-my-bugfix> develop
```

### Suggested Workflow ###
* create a branch for your work:  
 `$ git checkout -b <type of branch>/<name-of-feature-or-bugfix> develop`
 
* run the unit tests, ensuring that 100% test coverage is maintained:  
`$ npm test`  

* run the tasks you need, ensuring no errors occur and that the dist folder is updating with the correct files locally:  
 `$ grunt`

* commit your work and push to your feature/bugfix branch.
* create a pull request to merge your feature/bugfix branch into develop.

### Please Note ###
* All new functions must be accompanied by the appropriate unit testing, and PR's will only be approved if all tests pass, and the addition maintains 100% test coverage across the board.
* All new code must pass through the jshint linter (automatically run when you run grunt).

### Finally ###
* Have fun, write some quality code, and innovate!