<template>
  <div 
    class="flex mt-3 justify-around bottom-bar__main-container"
    data-test="main-container">
    <button
      v-for="(option, index) in navOptions"
      :key="index"
      class="flex flex-col items-center"
      data-test="buttons-container"
    >
      <img class="bottom-bar__option-logo" :src="option.mobileLogo" />
      <span class="bottom-bar__option-text">{{ option.label }}</span>
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.bottom-bar__main-container {
  background-color: white;
  position: fixed;
  bottom: 0px;
  height: 56px;
  padding-top: 4px;
  left: 0px;
  right: 0px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);
}

.bottom-bar__option-logo {
  @include square(24px);
}

.bottom-bar__option-text {
  font-size: 9px;
  color: #dddddd;
}
</style>
