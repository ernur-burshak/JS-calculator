# SuperSimpleDev - JS calculator

This is a mini-project from the [JavaScript Tutorial Full Course - Beginner to Pro (2024)](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=29617s). The course helped improve my coding skills by creating realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/ernur-burshak/JS-calculator)
- Live Site URL: [Add live site URL here](https://ernur-burshak.github.io/JS-calculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JS

### What I learned

```html
<button
  class="calculator-button gray-button"
  onclick="
  updateCalculation('1');
"
>
  1
</button>
```

```js
let calculation = localStorage.getItem("calculation") || "0";
localStorage.setItem("calculation", calculation);
```

```js
eval(calculation);
```

```js
let lastNumber = calculation.split(/[\+\-\*\/]/).pop();
```

### Continued development

In the future, I want to be fluent in the JS programming language, and use it confidently for DOM.

### Useful resources

- [the JS course](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=29617s) - The course helped improve my coding skills by creating realistic projects.
- [auxiliary for studying](https://github.com/SuperSimpleDev/javascript-course/tree/main/1-exercise-solutions) - There are solutions for the entire course task.

## Author

- Website - [Ernur](https://ernur-burshak.github.io/JS-calculator/)

## Acknowledgments

In this project, I am very grateful to the author of the SuperSimpleDev course, he explains it very clearly, he taught me the basics of JS. I am glad that I met such a teacher, thank you!
