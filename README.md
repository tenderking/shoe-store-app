# Shoe Store

This project is a simple shoe store application built with Vue.js. You can easily switch between using a local JSON file for data or fetching data from an API by renaming a folder in `main.js`.

## Switching Data Sources

In `main.js`, you can toggle between using local fake data and data from an API. Rename the folder to switch data sources:

```javascript
// To use local JSON file
import App from "./app-fake-data/App.vue";
import router from "./app-fake-data/router";

// To use data from a database server
import App from "./app-api/App.vue";
import router from "./app-api/router";
```

## Project Setup

Follow these instructions to set up and run the project:

### Install Dependencies

```bash
npm install
```

### Compiles and Hot-Reloads for Development

```bash
npm run dev
```

### Compiles and Minifies for Production

```bash
npm run build
```

### Lints and Fixes Files

```bash
npm run lint
```

## Directory Structure

Here's a brief overview of the project's directory structure:

```

├── public/
├── src/
|    ├── app-api/
|    │   ├── router/
|    │   ├── views/
|    │   ├── components/
|    │   ├── App.vue
|    │   └── ...
|    └── app-fake-data/
|       ├── assets/
|       ├── components/
|       ├── views/
|       ├── store/
|       ├── App.vue
|       ├── fake-data.js
|       ├── router/
│       └── ...
├── .eslint.config.js
├── .gitignore
├── vite.config.js
├── main.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.


