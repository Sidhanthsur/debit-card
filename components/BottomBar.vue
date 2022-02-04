<template>
    <div class="flex mt-3 justify-around bottom__main-container">
          <button v-for="(option, index) in navOptions" :key="index" class="flex flex-col items-center">
              <img class="bottom__option-logo" :src="option.mobileLogo"/>
              <span class="bottom__option-text">{{ option.label }}</span>
          </button>
      </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

.bottom__main-container {
 position: absolute;
 bottom: 0px;
 height: 56px;
 padding-top: 4px;
 left: 0px;
 right: 0px;
 box-shadow: 0 2px 5px 0 rgba(0,0,0,0.40);
}

.bottom__option-logo {
    @include square(24px)
}

.bottom__option-text {
    font-size: 9px;
    color: #DDDDDD;
}
</style>