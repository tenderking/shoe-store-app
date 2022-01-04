# shoe-store

in main.js you can switch between getting data from an api or a local json file called fake data. All you need to is rename the folder

```
// local json file
import App from "./app-fake-data/App.vue";
import router from "./app-fake-data/router";
// or from a database server
import App from "./app-api/App.vue";
import router from "./app-api/router";
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
