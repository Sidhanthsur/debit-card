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
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style>
@import '~/assets/styles/debit.scss'
</style>
