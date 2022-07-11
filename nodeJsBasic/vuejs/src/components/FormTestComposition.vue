<script setup  >
import { ref } from 'vue'
const message = ref('hello')
function doubleValue() {
  message.value+=message.value;
}
</script>"allowJs": true
"allowJs": true
<template>
  <p>Message is: {{ message }}</p>
	<input v-model="message" placeholder="edit me" />
  <button @click="doubleValue" >Double value</button>
</template>