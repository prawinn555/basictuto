<script >
export default {
  data() {
    return {
      message: 'hello'
    }
  },
  methods: {
    doubleValue() {
      this.message+=this.message
    }
  },
}
</script>

<template>
  <p>Message is: {{ message }}</p>
	<input v-model="message" placeholder="edit me" />
  <button @click="doubleValue" >Double value</button>
</template>