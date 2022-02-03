<template>
    <div class="app_header__main-container">
        <fa
          v-if="showBackButton"
          class="app_header__back-button"
          :icon="['fas', 'chevron-left']" />
        <img src="~/assets/images/Logo.png" class="app_header__logo" />
    </div>
</template>
<script>
export default {
    props: {
        showBackButton: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>
<style>
@import '~/assets/styles/app-header.scss'
</style>