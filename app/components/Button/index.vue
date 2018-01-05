<template>
  <div
    class='container'
    :class="[btnSize]"
    @click="$emit('click')"
    >
    <slot></slot>{{btnSize}}
  </div>
</template>

<style scoped>
  .middle {
    font-size: 16px;
  }

  .large {
    font-size: 28px;
  }

  .small {
    font-size: 12px;
  }

  .container {
    margin: .5em .75em;
    border-radius: 0.25em;
    display: inline-block;
    padding: .3em 0.6em;
    border: solid 1px #aaa;
  }
</style>

<script>
  export default {
    data: function () {
      const btnSize = this.size || 'middle'
      return {
        btnSize
      }
    },
    methods: {
      click (msg) {
        this.$emit('click')
      }
    },
    props: [
      'size'
    ]
  }
</script>