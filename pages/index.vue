<template>
  <div :class="isMobile ? 'main-container--mobile' : 'main-container--desktop'">
    <div class="debit-card__top_container">
      <app-header v-if="isMobile" />
      <div class="mt-2 flex justify-between items-center">
        <div>
          <div
            class="debit-card__balance-title"
            :class="isMobile ? 'text-white' : 'text-black'"
          >
            Available Balance
          </div>
          <currency-unit />
        </div>
        <add-new-card @onClick="showModal=true" />
      </div>
    </div>

    <agile :dots="true" :nav-buttons="false" class="carousel-container mr-4">
      <debit-card v-for="(card, index) in debitCards" :key="index" :card="card" />
    </agile>
        <Dialog v-if="showModal">
          <add-new-card-modal @cancel="showModal=false" />
        </Dialog>
  </div>
</template>

<script>
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { VueAgile } from "vue-agile";

import "vue-carousel-card/styles/index.css";
import { mapState } from "vuex";
import AddNewCard from "~/components/AddNewCard.vue";

import DebitCard from "~/components/DebitCard.vue";
import Dialog from '~/components/Dialog.vue';
import AddNewCardModal from '~/components/AddNewCardModal.vue';
export default {
  name: "IndexPage",
  components: { DebitCard, AddNewCard, agile: VueAgile, Dialog, AddNewCardModal },
  data () {
    return {
      showModal: false
    }
  },
  computed: {
    ...mapState('cards',['debitCards'])
  },

};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/debit.scss";

.carousel-container {
  width: 400px;
  height: 280px;
  margin-left: 24px;
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 600px) {
  .carousel-container {
    width: 366px;
    display: flex;
    justify-content: center;
    height: 280px;
    margin: 0 auto;
  }
}
</style>
