<template>
  <div class="cancel-card__main-container">
    <div class="cancel-card__header-title mb-6 text-center">Do you want to cancel the card ?</div>
    <div class="mt-4">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="$emit('remove-card')"
      >
        Yes
      </button>
      <button
        class="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded"
        @click="$emit('cancel')"
      >
        No
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.cancel-card__main-container {
  background-color: white;
  width: 40%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 14px;
}

.cancel-card__header-title {
  font-weight: bold;
  font-size: 24px;
}

@media only screen and (max-width: 768px) {
  .cancel-card__main-container {
    background-color: white;
    width: 90%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
  }

  .cancel-card__header-title {
    font-weight: bold;
    font-size: 20px;
  }
}
</style>
