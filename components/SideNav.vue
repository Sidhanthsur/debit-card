<template>
    <div class="side__main-container">
      <img src="~/assets/images/AspireGreen.svg" alt="aspire-logo" />
      <div class="side__sub-title mt-4">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </div>
      
      <div class="flex flex-col mt-12">
          <button v-for="(option, index) in navOptions" :key="index" class="flex items-center p-4 mt-4">
              <img class="side__option-logo" :src="option.logo"/>
              <span class="ml-4 text-white">{{ option.label }}</span>
          </button>
      </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.side__main-container {
    width: 340px;
    height: 770px;
    background-color: #0C365A;
    padding: 48px;
}

.side__sub-title {
    font-size: 15px;
    color: #FFFFFF30
}

.side__option-logo {
    @include square(24px)
}
</style>