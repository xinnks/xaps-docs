---
contributors: true
prev:
  text: Installation
  link: /guide/installation.html
next:
  text: Props
  link: /guide/props.html
---

# Getting Started

## Vue 2
Inside your entry js file
```js
import Vue from "vue"
import App from "./App.vue"
import XnsAudioPlayerSimple from "xns-audio-player-simple"

Vue.use(XnsAudioPlayerSimple)

...
```

## Vue 3

Import & initiate plugin and its styles on your entry js file

```js
import { createApp } from "vue";
import App from "./App.vue";
import XnsAudioPlayerSimple from "xns-audio-player-simple";
import "xns-audio-player-simple/styles.css"

const app = createApp(App);
app.use(XnsAudioPlayerSimple);
app.mount("#app");
```

### Using the plugin in a Vue SFC component
Import plugin and its styles inside a Vue Single File Component

```vue
<script>
import { XnsAudioPlayerSimple } from "xns-audio-player-simple";
import "xns-audio-player-simple/styles.css";

export default {
  components: { XnsAudioPlayerSimple },
  data(){
    return {
      playlist: [...]
    }
  }
}
</script>
```

### Using the plugin in Vue SFC component with the script-setup sugar
Import plugin and its styles inside a Vue Single File Component with the script-setup sugar

```vue
<script setup>
import XnsAudioPlayerSimple from 'xns-audio-player-simple';
import "xns-audio-player-simple/styles.css";
import { ref } from "vue";  
const playlist = ref([...]);
</script>
```

## Display Player on the Template
Inside your templates both in Vue 2 and 3

```vue
<template>
  <xns-audio-player-simple :playlist="playlist"></xns-audio-player-simple>
</template>
```
