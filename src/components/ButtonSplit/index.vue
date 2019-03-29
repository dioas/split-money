<template>
  <div class="button-split">
    <button @click="onClick">{{msg}}</button>
  </div>
</template>
<script>
export default {
  name: 'button-split',
  props: {
    msg: String,
    onClick: {
      type: Function
    }
  }
}
</script>
<style lang="less" scoped>
.button-split {
  display: inline-block;
  padding: 0 15px;
  button {
    width: 150px;
    height: 32px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #1BD060;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    border: none;
    &:hover {
      background-color: #1BD060 - 20;
    }
    &:active {
      background-color: #1BD060 - 40;
    }
  }
}
</style>
