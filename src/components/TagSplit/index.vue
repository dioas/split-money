<template>
  <div class="tag-split">
    <div :class="'tag-value ' + splitCurrency.coler">{{splitCurrency.count}} X Rp{{splitCurrency.currency}}</div>
  </div>
</template>

<script>
export default {
  name: 'tag-split',
  props: {
    splitCurrency: Object
  }
}
</script>

<style lang="less" scoped>
.tag-split {
  display: inline-block;
  .tag-value {
    display: inline-block;
    color: white;
    padding: 5px 10px;
    border-radius: 3px;
    &.red {
      background-color: #E92B2B;
    }
    &.blue {
      background-color: #00A4AD;
    }
    &.green {
      background-color: #00A838;
    }
    &.orange {
      background-color: #E1920F;
    }
    &.lightYellow {
      background-color: #FFBA37;
    }
    &.blueOld {
      background-color: #00A4AD;
    }
    &.Bigcoin {
      background-color: gray;
    }
    &.mediumCoin {
      background-color: #E2E2E2;
    }
    &.smallCoin {
      background-color: #424242;
    }
    &.sisa {
      background-color: white;
      color:black;
    }
  }
}
</style>
