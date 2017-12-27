<template>
  <div class="container">
    <h4>it's page 2</h4>
    <p>hello {{name}}</p>
  </div>
</template>

<style scoped></style>

<script>
  import { CHANGE_TITLE } from '../store/mutation-types'

  export default {
    beforeMount: function () {
      this.$store.commit({
        type: `common/${CHANGE_TITLE}`,
        value: 'page2'
      })
    },
    mounted: function () {},
    data: function () {
      return {
        name: 'yexun'
      }
    }
  }
</script>
