<script setup >
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div >
    <p>
      HelloWorld component is receiving this message :
    </p>
    <div class="alert alert-info">
      {{msg}}
    </div>
  </div>
</template>

