export const state = () => ({
    recentTransactions: []
  })
  
  export const actions = {
    fetchAllTransactions({ commit }) {
      const dummyData = [{
          label: 'Hamleys',
          date: '20 May 2020',
          charge: 'Refund on debit card',
          notificationType: 'card',
          value: 500,
          credit: true
        },
        {
          label: 'Hamleys',
          date: '20 May 2020',
          charge: 'Charged to debit card',
          notificationType: 'travel',
          value: 500,
          credit: false
        },
        {
          label: 'Hamleys',
          date: '20 May 2020',
          charge: 'Charged to debit card',
          notificationType: 'announcement',
          value: 500,
          credit: false
        },
        {
          label: 'Hamleys',
          date: '20 May 2020',
          charge: 'Charged to debit card',
          notificationType: 'card',
          value: 500,
          credit: false
        }
      ]
      commit('SET_TRANSACTIONS', dummyData)
    }
  }
  
  export const mutations = {
    SET_TRANSACTIONS(state, data) {
      state.recentTransactions = data
    }
  }