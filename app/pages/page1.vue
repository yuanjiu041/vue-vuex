<template>
  <div class="container">
    <h4>it's page 1</h4>
    <Button
      @click="getData"
      size="small"
      >say hello</Button>
    <p>{{info.value}}</p>
  </div>
</template>

<style scoped></style>

<script>
  import { mapState } from 'vuex'
  import Button from 'components/Button'
  import { CHANGE_TITLE } from '../store/mutation-types'
  import { GET_DATA } from '../store/action-types'

  export default {
    asyncData ({store, route}) {
      return store.dispatch({
        type: `common/${GET_DATA}`
      })
    },

    beforeMount: async function () {
      this.$store.commit({
        type: `common/${CHANGE_TITLE}`,
        value: 'page1....'
      })
    },

    mounted: function () {},

    methods: {
      getData () {
        this.$store.dispatch({
          type: `common/${GET_DATA}`
        })
      }
    },

    data: function () {
      return {
        name: 'yexun'
      }
    },

    computed: {
      ...mapState('common', [
        'info'
      ])
    },

    components: {
      Button
    }
  }
</script>
