<template>
  <div class="flex">
    <side-nav v-if="!isMobile" />
    <div class="w-full">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import global from '~/mixins/gloabl'
import SideNav from '~/components/SideNav.vue'
Vue.mixin(global)
export default {
    name: 'DefaultLayout',
  components: { SideNav }
}
</script>
