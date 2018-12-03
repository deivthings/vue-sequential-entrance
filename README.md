# vue-sequential-entrance
Vuejs Plugin for creating epic sequential animation entrances with a list of elements. Zero effort.


# Installation
In order to use into your vue project
```
npm install vue-sequential-entrance
```



# How to use ( Global Usage )
Add to your main.js file
```javascript
import SequentialEntrance from 'vue-sequential-entrance'
Vue.use(SequentialEntrance);
```
And now, in your component file, wrap a list of elements with sequential-entrance tag
```html
<template>
  <section>
    <sequential-entrance>
      <div class="box" v-for="app in apps" :key="app">{{ app }}</div>
    </sequential-entrance>
  </section>
</template>
```


# Customize with the following Props
```
comming soon
```
