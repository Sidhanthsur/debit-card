<template>
  <div
    class="flex items-center new-card__container new-card__container--responsive"
    @click="$emit('onClick')"
  >
    <img class="logo" :src="isMobile ? addMobile : add" alt="add-card" />
    <span class="ml-2">New Card</span>
  </div>
</template>
<script>
import add from "~/assets/images/add.svg";
import addMobile from "~/assets/images/addMobile.svg";

export default {
  created() {
    this.add = add;
    this.addMobile = addMobile;
  }
};
</script>
<style lang="scss">
.new-card__container {
  height: 35px;
  padding: 10px;
  font-weight: bold;
  font-size: 12px;
}
.new-card__container--responsive {
  height: 35px;
  background-color: #325baf;
  border-radius: 4px;
  padding: 10px;
  color: white;
}

.logo {
  @include square(16px);
}

@media only screen and (max-width: 600px) {
  .new-card__container--responsive {
    background-color: transparent;
    color: #23cefd;
  }
}
</style>
