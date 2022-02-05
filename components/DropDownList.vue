<template>
    <div class="drop-down__main-container">
        <div class="drop-down__header-container">
       <div class="flex">
            <img class="drop-down__image" :src="dropDownObject.image"/>
            <div class="drop-down__title">{{ dropDownObject.title }}</div>
       </div>
       <button @click="expandList = !expandList">
           <img  :src="expandList ? arrowUp : arrowDown" class="drop-down__arrow-image"/>
       </button>
    </div>
    <div v-show="expandList && list && list.length">
        <drop-down-item v-for="(item, index) in list" :key="index" :item="item" />
    </div>
    </div>
</template>
<script>
import DropDownItem from './DropDownItem.vue'
import arrowUp from "~/assets/images/down-arrow-1.svg"
import arrowDown from "~/assets/images/down-arrow.svg"
export default {
  components: { DropDownItem },
    props: {
        dropDownObject: {
            type: Object,
            required: true
        },
        list: {
            type: Array,
            required: true
        }
    },
  data () {
      return {
          expandList: true
      }
  },
  created () {
      this.arrowUp = arrowUp
      this.arrowDown = arrowDown
  }   
}
</script>
<style lang="scss" scoped>

.drop-down__main-container {
       width: 366px;

}
.drop-down__header-container {
    width: 366px;
    height: 72px;
    border-radius: 8px;
    background-color: #F5F9FF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
}

.drop-down__image {
    @include square(24px)
}

.drop-down__title {
    color: #0C365A;
    font-size: 14px;
    margin-left: 12px;
}

.drop-down__arrow-image {
    @include square(20px)
}

@media only screen and (max-width: 600px) {
   .drop-down__container {
       margin: 12px auto;
   } 
}
</style>