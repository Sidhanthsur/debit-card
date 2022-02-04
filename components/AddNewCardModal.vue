<template>
    <div class="new-card__main-container">
        <h1 class="mb-6">Adding a new card</h1>
        <input v-model="name" class="input-container p-2" placeholder="Enter card holder name" type="text">
        <div class="mt-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            <button
             class="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded"
              @click="$emit('cancel')">Cancel</button>
        </div>
    </div>
</template>
<script>
export default {
  data () {
      return {
          name: ''
      }
  } 
}
</script>
<style lang="scss" scoped>
.new-card__main-container {
    background-color: white;
    width: 60%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 14px;
}

.input-container {
    border: 1px solid black;
    border-radius: 4px;
    width: 90%;
}
   @media only screen and (max-width: 600px) {
   .new-card__main-container {
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