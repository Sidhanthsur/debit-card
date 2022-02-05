<template>
  <div class="modal-container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "DialogBox"
};
</script>
<style lang="scss" scoped>
.modal-container {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
