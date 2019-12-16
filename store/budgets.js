// import { budgetsMock } from './budgets-mock'
export const state = () => ({
  all: {}
})

export const getters = {
  budgetsList: (state) => {
    return state.all
  }
}

export const actions = {
  async getBudgets ({ commit }) {
    const messageRef = this.$fireDb.ref('budgets')
    try {
      const messageDoc = await messageRef.once('value')
      if (messageDoc) {
        commit('set', messageDoc.val())
      }
    } catch (e) {
      throw (e)
    }
  },
  async addBudget ({ commit }, budget) {
    const db = this.$fireDb.ref('budgets')
    const budgetExpenses = budget.expenses
      .map(({ amount }) => parseInt(amount))
      .reduce((prev, next) => prev + next, 0)
    const newBudget = {
      ...budget,
      days: parseInt(budget.days),
      amount: parseInt(budgetExpenses)
    }
    try {
      await db.push({ ...newBudget })
    } catch (e) {
      throw (e)
    }
    await commit('add', newBudget)
  }
}

export const mutations = {
  set (state, budgets) {
    state.all = budgets
  },
  add (state, budget) {
    state.all = {
      ...state.all,
      budget
    }
  }
}
