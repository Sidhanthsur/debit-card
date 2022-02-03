<template>
    <div class="main-container">
      <img class="logo" src="@/assets/images/aspireLong.svg" alt="aspire-logo">
      <h1 class="default-margin">
          {{ card.name }}
      </h1>
     <div class="default-margin number-container">
        <div v-for="(group, index) in arrayOfCardNumbers" :key="index" class="number">
          {{ group }}
      </div>
     </div>

     <div class="bottom-container">
         <div>
             Thru: {{ card.exp.month }} / {{ card.exp.year }}
         </div>
         <div class="cvv">
             CVV: {{ card.cvv }}
         </div>
     </div>

      <img class="logo" src="@/assets/images/visaLogo.svg" alt="aspire-logo">
    </div>
</template>
<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            arrayOfCardNumbers: []
        }
    },
    created () {
        this.arrayOfCardNumbers =  this.card.number.match(/.{1,4}/g)
    }
}
</script>
<style lang="scss" scoped>
@import "~assets/scss/colors";
@import "~assets/scss/variables";

.main-container {
    background-color: $aspire-green;
    width: 366px;
    height: 220px;
    border-radius: 12px;
    color: white;
    padding: $default-spacing;
}

.default-margin {
    margin-top: $default-spacing;
}

.logo {
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
</style>