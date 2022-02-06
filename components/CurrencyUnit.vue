<template>
  <div
    class="currency-unit__main-container"
    data-test="main-container">
    <div class="currency-unit__currency-container text-center">
      S$
    </div>
    <h1 class="ml-2" :class="isMobile ? 'text-white' : 'text-black'">
      {{ currencyValueFormatted }}
    </h1>
  </div>
</template>
<script>
export default {
  props: {
    currencyValue: {
      type: Number,
      required: false,
      default: 3000 // TODO: make it 0
    }
  },
  computed: {
    currencyValueFormatted() {
      return new Intl.NumberFormat("en-IN", {
        maximumSignificantDigits: 3
      }).format(this.currencyValue);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/scss/colors";

.currency-unit__main-container {
  display: flex;
  align-items: center;
}

.currency-unit__currency-container {
  background-color: $aspire-green;
  width: 40px;
  height: 22px;
  border-radius: 4px;
  font-weight: bold;
  color: white;
}
</style>
