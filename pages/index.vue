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

   <div v-if="debitCards && debitCards.length" class="card-action__container">
      <agile ref="carousel" :dots="true" :nav-buttons="false" class="carousel-container mr-4" @after-change="setCurrentSlide($event)">
      <debit-card v-for="(card, index) in debitCards" :key="index" :card="card" />
    </agile>
    <bottom-options-bar :current-card-frozen="currentCardFrozen" :class="{'mx-auto': isMobile}" @freeze-card="toggleCardFreeze(currentCard.id)"/>
   </div>
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
import { mapState, mapActions } from "vuex";
import AddNewCard from "~/components/AddNewCard.vue";

import DebitCard from "~/components/DebitCard.vue";
import Dialog from '~/components/Dialog.vue';
import AddNewCardModal from '~/components/AddNewCardModal.vue';
import BottomOptionsBar from '~/components/BottomOptionsBar.vue';
export default {
  name: "IndexPage",
  components: { DebitCard, AddNewCard, agile: VueAgile, Dialog, AddNewCardModal, BottomOptionsBar },
  data () {
    return {
      showModal: false,
      currentCard: null,
    }
  },
  computed: {
    ...mapState('cards',['debitCards']),
    currentCardFrozen () {
      return this.debitCards[this.$refs?.carousel?.getCurrentSlide() || 0].frozen
    }
  },
  methods: {
  ...mapActions('cards',['toggleCardFreeze']),
  setCurrentSlide(event) {
    this.currentCard = this.debitCards[event.currentSlide]
  }
  }

};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/debit.scss";

.card-action__container {
  margin-left: 24px;
}

.carousel-container {
  width: 400px;
  height: 280px;
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
  .card-action__container {
    margin-left: 0px;
  }

}
</style>
