<template>
  <div class="relative z-10 debit__main-container">
    <div class="debit__tappable-container" @click="toggleEyeClick">
      <img
        :src="showCardNumber ? hideEye : showEye"
        alt="eye-icon"
        class="debit__eye-icon"
      />
      <div class="ml-1">
        {{ showCardNumber ? "Hide card number" : "Show card number" }}
      </div>
    </div>

    <div
      class="debit__card-container"
      :class="{ 'debit__card-container--frozen': card.frozen }"
    >
      <img class="debit__card-logo" src="~/static/aspireLong.svg" alt="aspire-logo" />
      <h1 class="debit__default-margin">
        {{ card.name }}
      </h1>
      <div class="debit__default-margin debit__number-container">
        <div
          v-for="(group, index) in arrayOfCardNumbers"
          :key="index"
          class="debit__number"
        >
          {{ group }}
        </div>
      </div>

      <div class="debit__bottom-container">
        <div>Thru: {{ card.exp.month }} / {{ card.exp.year }}</div>
        <div class="debit__cvv">CVV: {{ showCardNumber ? card.cvv : "* * *" }}</div>
      </div>

      <img class="debit__card-logo" src="~/static/visaLogo.svg" alt="visa-logo" />
    </div>
  </div>
</template>
<script>
import hideEye from "~/static/hideEye.svg";
import showEye from "~/static/showEye.svg";
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
    this.hiddenArray = ["••••", "••••", "••••"];
    this.hiddenArray.push(this.allNumbers[3]);
    this.arrayOfCardNumbers = this.hiddenArray;
    this.hideEye = hideEye;
    this.showEye = showEye;
  },
  methods: {
    toggleEyeClick() {
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

.debit__main-container {
  width: 366px;
  height: 220px;
}

.debit__tappable-container {
  background-color: white;
  width: 150px;
  height: $default-size-unit;
  margin-left: auto;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-size: 12px;
  color: $aspire-green;
  display: flex;
  padding-top: 4px;
  padding-left: 12px;
  cursor: pointer;
}

.debit__eye-icon {
  @include square(16px);
}

.debit__card-container {
  background-color: $aspire-green;
  border-radius: 12px;
  color: white;
  padding: $default-spacing-unit;
}

.debit__card-container--frozen {
  background-color: grey;
}

.debit__default-margin {
  margin-top: $default-spacing-unit;
}

.debit__card-logo {
  margin-left: auto;
}

.debit__number-container {
  @include mediumText;
  display: flex;
  font-weight: bold;
}

.debit__number {
  margin-right: $default-spacing-unit;
}

.debit__bottom-container {
  @include mediumText;
  font-weight: 600;
  display: flex;
  margin-top: 14px;
}

.debit__cvv {
  margin-left: $default-spacing-unit;
}
@media only screen and (max-width: 768px) {
  .debit__main-container {
    width: 320px;
    height: 220px;
  }
}
</style>
