const _ = require('lodash');
export const state = {
    debitCards: []
}

export const actions = {
  fetchAllCards ({commit}) {
    const dummyData = [
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
    commit('SET_DEBIT_CARDS', dummyData)
  },
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
  async addCard({commit, state}, cardName) {
    const allCards = _.cloneDeep(state.debitCards);
    const newCard = {
      id: Math.floor(Math.random() * 10),
      name: cardName,
      exp: {
        month: Math.floor(Math.random() * 10),
        year: Math.floor(Math.random() * 99)
      },
      cvv: Math.floor(Math.random() * 999),
      number: Math.random().toFixed(16).split('.')[1].toString(),
      frozen: false
    }
    allCards.push(newCard)
    await commit('SET_DEBIT_CARDS', allCards)
  },
}

export const mutations = {
  SET_DEBIT_CARDS(state, cards) {
    state.debitCards = cards
  },
}