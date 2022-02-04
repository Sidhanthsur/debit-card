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
        <add-new-card @onClick="showModal = true" />
      </div>
    </div>
    <div v-if="debitCards && debitCards.length" class="card-action__container">
      <agile
        v-if="showCarousel"
        ref="carousel"
        :dots="true"
        :infinite="false"
        :nav-buttons="false"
        class="carousel-container mr-4"
        @after-change="setCurrentSlide($event)"
      >
        <debit-card v-for="card in debitCards" :key="card.id" :card="card" />
      </agile>
      <bottom-options-bar
        :current-card-frozen="currentCardFrozen"
        :class="{ 'mx-auto': isMobile }"
        @cancel-card="showCancelModal = true"
        @freeze-card="onToggleFreeze"
      />
    </div>
    <Dialog v-if="showModal">
      <add-new-card-modal
        @on-submit="onAddNewCard"
        @cancel="showModal = false"
      />
    </Dialog>
    <Dialog v-if="showCancelModal">
      <cancel-card
        @remove-card="onRemoveCard"
        @cancel="showCancelModal = false"
      />
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
import Dialog from "~/components/Dialog.vue";
import AddNewCardModal from "~/components/AddNewCardModal.vue";
import CancelCard from "~/components/CancelCard.vue";
export default {
  name: "IndexPage",
  components: {
    DebitCard,
    AddNewCard,
    agile: VueAgile,
    Dialog,
    AddNewCardModal,
    CancelCard
  },
  data() {
    return {
      showModal: false,
      currentCard: null,
      showCarousel: true,
      showCancelModal: false
    };
  },
  computed: {
    ...mapState("cards", ["debitCards"]),
    currentCardFrozen() {
      return this.currentCard?.frozen || false;
    }
  },
  methods: {
    ...mapActions("cards", ["toggleCardFreeze", "removeCard", "addCard"]),
    setCurrentSlide(event) {
      this.currentCard = this.debitCards[event.currentSlide];
    },
    async onRemoveCard() {
      this.showCarousel = false;
      await this.removeCard(this.currentCard.id);
      this.showCarousel = true;
      this.showCancelModal = false;
    },
    async onAddNewCard(name) {
      this.showCarousel = false;
      await this.addCard(name);
      this.showCarousel = true;
      this.showModal = false;
    },
    onToggleFreeze() {
      this.toggleCardFreeze(this.currentCard.id);
      this.currentCard.frozen = !this.currentCard.frozen;
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
