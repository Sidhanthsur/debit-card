<template>
  <div class="relative z-10 main-container">
    <div class="tappable-container" @click="toggleEyeClick">
        <img :src="showCardNumber ? hideEye : showEye" alt="eye-icon" class="eye-icon">
        <div></div>
        <div class="ml-1">
            {{ showCardNumber ? "Hide card number" : "Show card number" }}
        </div>
    </div>
   
    <div class="card-container" :class="{'card-container--frozen': card.frozen}">
      <img
        class="card-logo"
        src="~/static/aspireLong.svg"
        alt="aspire-logo"
      />
      <h1 class="default-margin">
        {{ card.name }}
      </h1>
      <div class="default-margin number-container">
        <div
          v-for="(group, index) in arrayOfCardNumbers"
          :key="index"
          class="number"
        >
          {{ group }}
        </div>
      </div>

      <div class="bottom-container">
        <div>Thru: {{ card.exp.month }} / {{ card.exp.year }}</div>
        <div class="cvv">CVV: {{ showCardNumber ? card.cvv : '* * *' }}</div>
      </div>

      <img class="card-logo" src="~/static/visaLogo.svg" alt="visa-logo" />
    </div>
  </div>
</template>
<script>

import hideEye from '~/static/hideEye.svg'
import showEye from '~/static/showEye.svg'
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      arrayOfCardNumbers: [],
      showCardNumber: false
    };
  },
  created() {
    this.allNumbers = this.card.number.match(/.{1,4}/g);
    this.hiddenArray = ['••••','••••','••••']
    this.hiddenArray.push(this.allNumbers[3])
    this.arrayOfCardNumbers = this.hiddenArray;
    this.hideEye = hideEye;
    this.showEye = showEye;
  },
  methods: {
      toggleEyeClick () {
          this.showCardNumber = !this.showCardNumber;
          if (this.showCardNumber) {
            this.arrayOfCardNumbers = this.allNumbers;
          } else {
            this.arrayOfCardNumbers = this.hiddenArray;
          }
      }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/scss/colors";
@import "~assets/scss/variables";

.main-container {
  width: 366px;
  height: 220px;
}

.tappable-container {
    background-color: white;
    width: 150px;
    height: 24px;
    margin-left: auto;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    right: 0;
    top: -$default-spacing;
    bottom: 10px;
    z-index: -1;
    font-size: 12px;
    color: $aspire-green;
    display: flex;
    padding-top: 4px;
    padding-left: 12px;
    cursor: pointer;
}

.eye-icon {
  @include square(16px)
}

.card-container {
  background-color: $aspire-green;
  border-radius: 12px;
  color: white;
  padding: $default-spacing;
}

.card-container--frozen {
  background-color: #403a3b3c
}

.default-margin {
  margin-top: $default-spacing;
}

.card-logo {
  margin-left: auto;
}

.number-container {
  @include mediumText;
  display: flex;
  font-weight: 600;
}

.number {
  margin-right: $default-spacing;
}

.bottom-container {
  @include mediumText;
  font-weight: 600;
  display: flex;
  margin-top: 14px;
}

.cvv {
  margin-left: $default-spacing;
}
@media only screen and (max-width: 600px) {
  .main-container {
  width: 320px;
  height: 220px;
}
}

</style>
