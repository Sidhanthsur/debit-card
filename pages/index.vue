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
    <div class="flex flex-col sm:flex-row">
      <div
        v-if="debitCards && debitCards.length"
        class="card-action__container"
      >
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
          class="sm:mx-auto"
          @cancel-card="showCancelModal = true"
          @freeze-card="onToggleFreeze"
        />
      </div>
      <div class="drop-down__container sm:mx-auto">
        <drop-down-list
          v-if="recentTransactions && recentTransactions.length"
          :drop-down-object="cardDropDown"
          :list="recentTransactions"
        />
        <drop-down-list
          v-if="recentTransactions && recentTransactions.length"
          :drop-down-object="transactionDropDown"
          :list="recentTransactions"
          class="mt-4"
        />
      </div>
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
import cardImage from "~/assets/images/Group11889.svg";
import transactionImage from "~/assets/images/Group 11889-1.svg";
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
    ...mapState("transactions", ["recentTransactions"]),
    currentCardFrozen() {
      return this.currentCard?.frozen || false;
    }
  },
  created() {
    this.transactionDropDown = {
      image: transactionImage,
      title: "Recent transactions"
    };
    this.cardDropDown = {
      image: cardImage,
      title: "Card Details"
    };
  },
  async mounted() {
    const promiseArray = [this.fetchAllCards(), this.fetchAllTransactions()];
    await Promise.all(promiseArray);
  },
  methods: {
    ...mapActions("cards", [
      "toggleCardFreeze",
      "removeCard",
      "addCard",
      "fetchAllCards"
    ]),
    ...mapActions("transactions", ["fetchAllTransactions"]),
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
<style lang="scss">
@import "~/assets/styles/debit.scss";

.card-action__container {
  margin-left: 24px;
}

.carousel-container {
  width: 400px;
  height: 280px;
  /* display: flex;
  justify-content: center; */
  .agile__list {
    height: 260px;
  }
  .agile__actions {
    height: 12px;
    .agile__dots {
      .agile__dot {
        @include square(8px);
        border-radius: 50%;
        background-color: #01d16780;
        margin: 0 4px;
      }
      .agile__dot--current {
        width: 16px;
        height: 8px;
        border-radius: 8px;
        background-color: #01d167;
      }
    }
  }
}

.drop-down__container {
  margin-top: 12px;
  margin-left: 48px;
}

@media only screen and (max-width: 600px) {
  .carousel-container {
    width: 366px;
    height: 280px;
    margin: 0 auto;
  }

  .card-action__container {
    margin-left: 0px;
  }

  .drop-down__container {
    background-color: white;
    margin: 0px;
    flex-direction: column;
    display: flex;
    justify-content: center;
  }
}
</style>
