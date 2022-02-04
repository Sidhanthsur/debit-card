<template>
  <Nuxt />
</template>
<script>
import Vue from 'vue'
import global from '~/mixins/gloabl'
Vue.mixin(global)
export default {
    name: 'DefaultLayout'
}
</script>
