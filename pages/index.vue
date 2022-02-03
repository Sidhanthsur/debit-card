<template>
  <div class="debit-card__main-container">
   <div class="debit-card__top_container">
      <app-header />
    <div class="mt-2">
      <h1>
        Debit Card
      </h1>
      <div class="debit-card__balance-title text-white">
        Available Balance
      </div>
      <currency-unit />
    </div>
   </div>

    <!-- <div class="flex mx-auto debit-card__card-container">
      <debit-card :card="card" class="mx-auto" />
    </div> -->
    <div class="relative">
       <debit-card :card="card" class="mx-auto" />
    <background-curved />
    </div>
 
  </div>
</template>

<script>
import BackgroundCurved from '~/components/BackgroundCurved.vue'
import DebitCard from '~/components/DebitCard.vue'
export default {
  name: 'IndexPage',
  components: { DebitCard, BackgroundCurved },
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
