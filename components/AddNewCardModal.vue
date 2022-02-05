<template>
  <div data-test="main-container" class="new-card-modal__main-container">
    <h1 class="mb-6">Adding a new card</h1>
    <input
      v-model.trim="name"
      class="new-card-modal__input-container p-2"
      placeholder="Enter card holder name"
      type="text"
      data-test="input-container"
      @input="error = false"
    />
    <div v-if="error" class="text-red-600">
      Please enter a first name and a last name
    </div>
    <div class="mt-4">
      <button
        data-test="submit-button"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="onSubmit"
      >
        Submit
      </button>
      <button
        data-test="cancel-button"
        class="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded"
        @click="$emit('cancel')"
      >
        Cancel
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      error: false
    };
  },
  methods: {
    onSubmit() {
      if (/\s/g.test(this.name)) {
        this.$emit("on-submit", this.name);
      } else {
        this.error = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.new-card-modal__main-container {
  background-color: white;
  width: 40%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 14px;
}

.new-card-modal__input-container {
  border: 1px solid black;
  border-radius: 4px;
  width: 90%;
}
@media only screen and (max-width: 600px) {
  .new-card-modal__main-container {
    background-color: white;
    width: 90%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
  }
}
</style>
