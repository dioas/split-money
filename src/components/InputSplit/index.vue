<template>
  <div class="input-split">
    <input v-on:keyup.enter="onEnter" :value='value' @input="$emit('input', $event.target.value)" placeholder="Type something"/>
  </div>
</template>

<script>
export default {
  name: 'input-Split',
  props: {
    value: String,
    onEnter: Function
  }
}
</script>

<style lang="less" scoped>
.input-split {
  display: inline-block;
  input {
    width: 400px;
    height: 20px;
    border-radius: 5px;
    padding: 5px 10px;
    border: solid 1px #1BD060;
    &:focus {
      outline: none;
      border: solid 1px #009424;
    }
  }
}
</style>
