const _ = require('lodash');
export const state = {
    debitCards: [
      {
        name: "Sidhanth Surana",
        number: "4111111111111111",
        exp: {
          month: "03",
          year: "22"
        },
        cvv: 233,
        frozen: false,
        id: 1
      },
      {
        name: "Aspire App",
        number: "1234456712344567",
        exp: {
          month: "08",
          year: "25"
        },
        cvv: 812,
        frozen: false,
        id: 2
      },
      {
        name: "Aspire Test",
        number: "4555722293337555",
        exp: {
          month: "12",
          year: "23"
        },
        cvv: 432,
        frozen: false,
        id: 3
      }
    ]
}

export const actions = {
  toggleCardFreeze({commit, state}, cardId) {
    const allCards = _.cloneDeep(state.debitCards);
    const findByIdFilter = card => card.id === cardId
    const index = allCards.findIndex(findByIdFilter)
    allCards[index].frozen = !allCards[index].frozen 
    commit('SET_DEBIT_CARDS', allCards)
  },
  async removeCard({commit, state}, cardId) {
    const allCards = _.cloneDeep(state.debitCards);
    const findByIdFilter = card => card.id === cardId
    const index = allCards.findIndex(findByIdFilter)
    allCards.splice(index,1)
    await commit('SET_DEBIT_CARDS', allCards)
  },
}

export const mutations = {
  SET_DEBIT_CARDS(state, cards) {
    state.debitCards = cards
  },
}