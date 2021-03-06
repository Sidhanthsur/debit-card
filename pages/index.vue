<template>
  <div class="landing__container">
    <div class="landing__top_container">
      <app-header v-if="isMobile" />
      <div class="mt-2 flex justify-between items-center">
        <div>
          <div
            class="landing__top_container__balance-title"
            :class="isMobile ? 'text-white' : 'text-black'"
          >
            Available Balance
          </div>
          <currency-unit />
        </div>
        <add-new-card @onClick="showModal = true" />
      </div>
    </div>
    <div class="flex flex-col lg:flex-row justify-center">
      <div
        v-if="debitCards && debitCards.length"
        class="lading__card-action-container"
      >
        <agile
          v-if="showCarousel"
          ref="carousel"
          :dots="true"
          :infinite="false"
          :nav-buttons="!isMobile"
          class="landing__carousel-container mr-4"
          @after-change="setCurrentSlide($event)"
        >
         <template slot="prevButton">
           <fa
            class="landing__carousel-nav-button"
            :icon="['fas', 'chevron-left']"
          />
         </template>
        <template slot="nextButton"> 
          <fa
            class="landing__carousel-nav-button"
            :icon="['fas', 'chevron-right']"
          /></template>
          <debit-card v-for="card in debitCards" :key="card.id" :card="card" />
        </agile>
        <bottom-options-bar
          :current-card-frozen="currentCardFrozen"
          class="lg:mx-auto"
          @cancel-card="showCancelModal = true"
          @freeze-card="onToggleFreeze"
        />
      </div>
      <div class="landing__drop-down-container sm:mx-auto">
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

import { VueAgile } from "vue-agile";
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
    async onToggleFreeze() {
      await this.toggleCardFreeze(this.currentCard.id);
      this.currentCard.frozen = !this.currentCard.frozen;
    }
  }
};
</script>
<style lang="scss">

.landing__container {
  background-color: white;
  margin-bottom: 80px;
}

.landing__top_container {
  padding: $default-spacing-unit;
}

.landing__top_container__balance-title {
  @include mediumText;
}

.landing__card-container {
  margin-top: $default-spacing-unit;
}

.lading__card-action-container {
  margin-left: $default-spacing-unit;
}

.landing__carousel-container {
  width: 400px;
  height: 280px;
  margin-bottom: $default-spacing-unit;
  /* display: flex;
  justify-content: center; */
  .agile__list {
    height: 260px;
  }
  .agile__actions {
    height: 12px;
    align-items: center;
    .agile__nav-button--prev:disabled {
      .landing__carousel-nav-button {
        color: $aspire-green-light;
      }
    }
    .agile__nav-button--next:disabled {
      .landing__carousel-nav-button {
        color: $aspire-green-light;
      }
    }
    .agile__dots {
      .agile__dot {
        @include square(8px);
        border-radius: 50%;
        background-color: $aspire-green-light;
        margin: 0 4px;
      }
      .agile__dot--current {
        width: 16px;
        height: 8px;
        border-radius: 8px;
        background-color: $aspire-green;
      }
    }
  }
}

.landing__carousel-nav-button {
  @include square($default-size-unit);
  color: $aspire-green;
}

.landing__drop-down-container {
  margin-top: $default-spacing-unit;
  margin-left: $default-spacing-unit * 2;
}

@media only screen and (max-width: 768px) {
  .landing__container {
    background-color: $aspire-dark-blue;
    margin-bottom: 80px;
  }

  .landing__carousel-container {
    width: 366px;
    height: 280px;
    margin: 0 auto;
  }

  .lading__card-action-container {
    margin-left: 0px;
  }

  .landing__drop-down-container {
    background-color: white;
    margin: 0px;
    flex-direction: column;
    display: flex;
    justify-content: center;
  }
}
</style>
