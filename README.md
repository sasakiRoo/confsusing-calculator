# Confusing Calculator - confusedlator

## Introduction

confusedlator is a simple vue calculator web app. <br>
this app will randomly moves its operators and numbers when it's clicked.

## Project's setup VUE + TAILWIND CSS

### Create your vue project: <br>
```
npm create vite@latest my-project -- --template vue
cd my-project
```
### Install tailwind css:
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
### Configure your template paths:
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
### Add the Tailwind directives to your CSS:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### Start your build process:
```
npm run dev
```
### Start using Tailwind in your project:
```
<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>
```

<br>


## Visit the web:
https://confusedlator.netlify.app/
