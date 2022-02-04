<template>
    <div class="options-container">
       <button v-for="(option, index) in options" :key="index" class="action-container" @click="option.action">
            <img class="action-image" :src="option.image">  
            <div class="label-container">{{ option.label }}</div> 
        </button> 
    </div>
</template>
<script>
import deactivate from '~/assets/images/DeactivateCard.svg'
import freeze from '~/assets/images/freeze.svg'
import gpay from '~/assets/images/GPay.svg'
import replace from '~/assets/images/replace.svg'
import spendlimit from '~/assets/images/spendlimit.svg'
export default {
  created () {
      this.options = [
          {
              label: 'Freeze Card',
              image: freeze,
              action: () => this.$emit('freeze-card')
          },
           {
              label: 'Set spend limit',
              image: spendlimit,
              action: () => {}
          },
           {
              label: 'Add to GPay',
              image: gpay,
              action: () => {}
          },
           {
              label: 'Replace card',
              image: replace,
              action: () => {}
          },
           {
              label: 'Cancel card',
              image: deactivate,
              action: () => {}
          }
      ]
  }
}
</script>
<style lang="scss" scoped>
.options-container {
  width: 400px;
  background-color: #EDF3FF;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  border-radius: 16px;
}

.action-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.action-image {
    @include square(32px)
}

.label-container {
    font-size: 13px;
    text-align: center;
}

@media only screen and (max-width: 600px) {
  .options-container {
  width: 366px;
  background-color: #EDF3FF;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  border-radius: 16px;
}  
}
</style>