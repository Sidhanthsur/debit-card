<template>
  <div class="item__main-container">
    <!-- left side -->
    <div class="flex">
      <div
        class="item__image-container"
        :style="{ 'background-color': themeProperties.colour }"
      >
        <img class="item__image" :src="themeProperties.image" />
      </div>
      <div class="ml-2">
        <div class="item__label">
          {{ item.label }}
        </div>
        <div class="item__date">
          {{ item.date }}
        </div>
        <div class="flex mt-3">
          <div class="item__mini-card-container">
            <img
              class="item__mini-card"
              src="~/assets/images/miniCard.svg"
              alt="mini-card"
            />
          </div>
          <div class="item__mini-card-label">
            {{ item.charge }}
          </div>
        </div>
      </div>
    </div>
    <!-- right side -->
    <div class="flex items-baseline">
      <div class="item__value" :class="{ 'item__value--credit': item.credit }">
        {{ item.credit ? "+" : "-" }} S$ {{ item.value }}
      </div>
      <fa class="item__arrow" :icon="['fas', 'chevron-right']" />
    </div>
  </div>
</template>
<script>
import cardTheme from "~/assets/images/file-storage.svg";
import travelTheme from "~/assets/images/flights.svg";
import announcementTheme from "~/assets/images/megaphone.svg";
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    themeProperties() {
      switch (this.item.notificationType) {
        case "card":
          return {
            image: cardTheme,
            colour: "#009DFF1A"
          };
        case "travel":
          return {
            image: travelTheme,
            colour: "#00D6B51A"
          };
        case "announcement":
          return {
            image: announcementTheme,
            colour: "#F251951A"
          };
        default:
          return {
            image: cardTheme,
            colour: "#009DFF1A"
          };
      }
    }
  },
  created() {
    this.cardTheme = cardTheme;
    this.travelTheme = travelTheme;
    this.announcementTheme = announcementTheme;
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/colors";

.item__main-container {
  padding: 24px;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
}

.item__main-container:last-child {
  border-bottom: none;
}
.item__image-container {
  @include square(48px);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item__image {
  @include square(16px);
}

.item__label {
  font-weight: 600;
  font-size: 14px;
  color: #222222;
}

.item__date {
  color: #aaaaaa;
  font-size: 13px;
}

.item__mini-card-container {
  background-color: #325baf;
  width: 24px;
  height: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item__mini-card {
  @include square(10px);
}

.item__mini-card-label {
  color: #325baf;
  font-size: 12px;
  margin-left: 8px;
  font-weight: 600;
}

.item__value {
  font-size: 14px;
  font-weight: bold;
}
.item__value--credit {
  color: $aspire-green;
}

.item__arrow {
  @include square(12px);
  color: lightgray;
  margin-left: 6px;
}
</style>
