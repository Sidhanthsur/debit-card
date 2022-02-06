<template>
  <div class="drop-down__main-container cursor-pointer">
    <div class="drop-down__header-container" @click="expandList = !expandList">
      <div class="flex">
        <img class="drop-down__image" :src="dropDownObject.image" />
        <div class="drop-down__title">{{ dropDownObject.title }}</div>
      </div>
      <button>
        <img
          :src="expandList ? arrowUp : arrowDown"
          class="drop-down__arrow-image"
        />
      </button>
    </div>
    <div
      v-show="expandList && list && list.length"
      class="drop-drown__list-container"
    >
      <drop-down-item v-for="(item, index) in list" :key="index" :item="item" />
    </div>
  </div>
</template>
<script>
import DropDownItem from "./DropDownItem.vue";
import arrowUp from "~/assets/images/down-arrow-1.svg";
import arrowDown from "~/assets/images/down-arrow.svg";
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
  data() {
    return {
      expandList: false
    };
  },
  created() {
    this.arrowUp = arrowUp;
    this.arrowDown = arrowDown;
  }
};
</script>
<style lang="scss" scoped>
.drop-down__main-container {
  width: 366px;
}
.drop-down__header-container {
  width: 366px;
  height: 72px;
  border-radius: 8px;
  background-color: #f5f9ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $default-spacing-unit;
  box-shadow: 1px 1px 1px 1px lightgray;
}

.drop-down__image {
  @include square($default-size-unit);
}

.drop-down__title {
  color: $aspire-dark-blue;
  font-size: 14px;
  margin-left: 12px;
}

.drop-down__arrow-image {
  @include square(20px);
}

.drop-drown__list-container {
  border: 1px solid #f0f0f0;
  border-top: 0px;
  border-radius: 0px 0px 8px 8px;
}

@media only screen and (max-width: 768px) {
  .drop-down__main-container {
    margin: 12px auto;
  }
}
</style>
