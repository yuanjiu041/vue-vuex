<template>
  <div class="container">
    <h4>it's page 1</h4>
    <p>hello {{name}}</p>
  </div>
</template>

<style scoped></style>

<script>
  import axios from 'axios'

  export default {
    beforeMount: async function () {
      const result = await axios.get('/api/index')
      this.name = result.data
    },
    data: function () {
      return {
        name: 'yexun'
      }
    }
  }
</script>