<template>
  <div class="bottom-options-bar__container">
    <button
      v-for="(option, index) in options"
      :key="index"
      class="bottom-options-bar__action-container"
      @click="option.action"
    >
      <img class="bottom-options-bar__action-image" :src="option.image" />
      <div class="bottom-options-bar__label-container">{{ option.label }}</div>
    </button>
  </div>
</template>
<script>
import deactivate from "~/assets/images/DeactivateCard.svg";
import freeze from "~/assets/images/freeze.svg";
import gpay from "~/assets/images/GPay.svg";
import replace from "~/assets/images/replace.svg";
import spendlimit from "~/assets/images/spendlimit.svg";
export default {
  props: {
    currentCardFrozen: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    options() {
      return [
        {
          label: this.currentCardFrozen ? "Unfreeze Card" : "Freeze Card",
          image: freeze,
          action: () => this.$emit("freeze-card")
        },
        {
          label: "Set spend limit",
          image: spendlimit,
          action: () => {}
        },
        {
          label: "Add to GPay",
          image: gpay,
          action: () => {}
        },
        {
          label: "Replace card",
          image: replace,
          action: () => {}
        },
        {
          label: "Cancel card",
          image: deactivate,
          action: () => this.$emit("cancel-card")
        }
      ];
    },
    freezeLabel() {
      return this.currentCardFrozen ? "Unfreeze Card" : "Freeze Card";
    }
  }
};
</script>
<style lang="scss" scoped>
.bottom-options-bar__container {
  width: 400px;
  background-color: #edf3ff;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  border-radius: 16px;
}

.bottom-options-bar__action-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bottom-options-bar__action-image {
  @include square(32px);
}

.bottom-options-bar__label-container {
  font-size: 13px;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  .bottom-options-bar__container {
    width: 100%;
    background-color: #edf3ff;
    display: flex;
    justify-content: space-around;
    padding: 20px;
    border-radius: 16px 16px 0px 0px;
  }
}
</style>
