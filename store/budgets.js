import { budgetsMock } from './budgets-mock'
export const state = () => ({
  all: [
    ...budgetsMock
  ]
})

export const getters = {
  budgetsList: (state) => {
    return state.all
  }
}

export const mutations = {
  add (state, budget) {
    const budgetExpenses = budget.expenses
      .map(({ amount }) => parseInt(amount))
      .reduce((prev, next) => prev + next, 0)
    const newBudget = {
      ...budget,
      days: parseInt(budget.days),
      amount: parseInt(budgetExpenses)
    }
    state.all.push({
      ...newBudget
    })
  }
}
