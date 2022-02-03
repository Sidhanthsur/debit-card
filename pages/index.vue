<template>
  <div class="debit-card__main-container">
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

    <div>
      <debit-card :card="card" />
    </div>
  </div>
</template>

<script>
import DebitCard from '~/components/DebitCard.vue'
export default {
  name: 'IndexPage',
  components: { DebitCard },
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
