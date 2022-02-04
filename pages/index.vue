<template>
  <div :class="isMobile ? 'main-container--mobile' : 'main-container--desktop'">
   <div class="debit-card__top_container">
      <app-header v-if="isMobile"/>
    <div class="mt-2 flex justify-between items-center">
      <div>
        <div class="debit-card__balance-title" :class="isMobile ? 'text-white': 'text-black'">
        Available Balance
      </div>
      <currency-unit />
      </div>
            <add-new-card />
    </div>
   </div>

    <debit-card :card="card" class="mx-auto" />

 
  </div>
</template>

<script>
import AddNewCard from '~/components/AddNewCard.vue'

import DebitCard from '~/components/DebitCard.vue'
export default {
  name: 'IndexPage',
  components: { DebitCard, AddNewCard },
  data () {
   return {
      card: {
        name: 'Sidhanth Surana',
        number: '4111111111111111',
        exp: {
          month: '03',
          year: '22'
        },
        cvv: 233
      }
    }
  }
}
</script>
<style>
@import '~/assets/styles/debit.scss'
</style>
