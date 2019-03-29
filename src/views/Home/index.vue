<template>
  <div class="wrapper-content">
    <div class="instruction">
      <h3>Split Money will help you to check and split your total money for give to someone. Just try it and you will see a Magic here. Example, you can type "Rp 575.000" or something.</h3>
    </div>
    <div class="input-value">
      <InputComponent :onEnter="generateValue" v-model="money"/>
      <BtnComponent msg="Generate" :onClick="generateValue"/>
    </div>
    <div v-if="errorMessage" class="error-message">
      Something Wrong with your Input Currency, Please input correct currency
    </div>
    <div class="wrapper-tag">
      <div class="content-tag" v-for="(totalMoney, key) in this.splitCurrency" :key="key">
        <TagComponent :splitCurrency="totalMoney"/>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from '@/components/InputSplit'
import BtnComponent from '@/components/ButtonSplit'
import TagComponent from '@/components/TagSplit'
import { mapActions } from 'vuex'
export default {
  name: 'home',
  components: {
    InputComponent, BtnComponent, TagComponent
  },
  data () {
    return {
      money: '',
      splitCurrency: [],
      errorMessage: false
    }
  },
  methods: {
    ...mapActions([
      'setSplitCurrency'
    ]),
    splitMoneyHere (money) {
      let temp = 0
      let data = {}
      if (money >= 100000) {
        temp = Math.floor(money / 100000)
        data = {
          count: temp,
          coler: 'red',
          currency: 100000
        }
        this.splitCurrency.push(data)
        this.splitMoneyHere(money % 100000)
      } else if (money >= 50000) {
        temp = Math.floor(money / 50000)
        data = {
          count: temp,
          coler: 'blue',
          currency: 50000
        }
        this.splitCurrency.push(data)
        this.splitMoneyHere(money % 50000)
      } else if (money >= 20000) {
        temp = Math.floor(money / 20000)
        data = {
          count: temp,
          coler: 'green',
          currency: 20000
        }
        this.splitCurrency.push(data)
        this.splitMoneyHere(money % 20000)
      } else if (money >= 10000) {
        temp = Math.floor(money / 10000)
        data = {
          count: temp,
          coler: 'orange',
          currency: 10000
        }
        this.splitCurrency.push(data)
        this.splitMoneyHere(money % 10000)
      } else if (money >= 5000) {
        temp = Math.floor(money / 5000)
        data = {
          count: temp,
          coler: 'lightYellow',
          currency: 5000
        }
        this.splitCurrency.push(data)
        this.splitMoneyHere(money % 5000)
      } else if (money >= 1000) {
        temp = Math.floor(money / 1000)
        data = {
          count: temp,
          coler: 'blueOld',
          currency: 1000
        }
        this.splitCurrency.push(data)
        this.splitMoneyHere(money % 1000)
      } else if (money >= 500) {
        temp = Math.floor(money / 500)
        data = {
          count: temp,
          coler: 'Bigcoin',
          currency: 500
        }
        this.splitCurrency.push(data)
        this.splitMoneyHere(money % 500)
      } else if (money >= 100) {
        temp = Math.floor(money / 100)
        data = {
          count: temp,
          coler: 'mediumCoin',
          currency: 100
        }
        this.splitCurrency.push(data)
        this.splitMoneyHere(money % 100)
      } else if (money >= 50) {
        temp = Math.floor(money / 50)
        data = {
          count: temp,
          coler: 'smallCoin',
          currency: 50
        }
        this.splitCurrency.push(data)
        this.splitMoneyHere(money % 50)
      } else if (money > 0) {
        data = {
          count: 'Sisa',
          coler: 'sisa',
          currency: money
        }
        this.splitCurrency.push(data)
      }
    },
    generateValue () {
      var upperValue = this.money.toUpperCase()
      var validationChecked = this.validationGenerator(upperValue)
      if (validationChecked) {
        this.errorMessage = false
        this.splitCurrency = []
        var currencyNumber = upperValue.replace('RP', '')
        this.splitMoneyHere(currencyNumber.replace(/[^0-9]/g, ''))
      } else {
        this.errorMessage = true
      }
    },
    validationGenerator (value) {
      if (value) {
        var checkSymbol = value.replace('RP', '').split(' ')
        var checkCharacter = value.indexOf('RP')
        var checkValue = value.replace(/[^0-9]/g, '')
        var checkNaN = value.replace('RP', '')
        var desimalValue = value.split(',')
        let isWrongValue
        if (desimalValue[1] !== undefined) {
          if (desimalValue[1].length !== 2) {
            isWrongValue = true
          } else {
            isWrongValue = false
          }
        }
        if (checkSymbol.length > 2) {
          return false
        } else if (checkCharacter > 1) {
          return false
        } else if (checkValue === '') {
          return false
        } else if (isNaN(parseInt(checkNaN))) {
          return false
        } else if (isWrongValue) {
          return false
        } else {
          return true
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.input-value {
  display: inline-block;
  width: 100%;
  text-align: center;
}
.wrapper-content {
  background-color: white;
  min-height: 100vh;
  .instruction {
    h3 {
      width: 800px;
      display: inline-block;
    }
  }
  .wrapper-tag {
    width: 900px;
    display: inline-block;
    padding: 20px;
  }
  .content-tag {
    display: inline-block;
    margin: 0 10px;
  }
}
.error-message {
  color:#E92B2B;
  padding: 10px 0;
}
</style>
