<template>
  <div class="flx-container">
    <BudgetsContainer
      :budgets="budgets"
      style="flex-basis: 60%;"
    />
    <NewBudgetForm
      style="flex: 1; margin-left: 1.5rem;"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BudgetsContainer from '~/components/BudgetsContainer'
import NewBudgetForm from '~/components/NewBudget'

export default {
  components: {
    BudgetsContainer,
    NewBudgetForm
  },
  computed: {
    ...mapGetters({
      budgets: 'budgets/budgetsList'
    })
  },
  async fetch ({ store }) {
    await store.dispatch('budgets/getBudgets')
  }
}
</script>

<style lang="scss" scoped>
  .flx-container {
    display: flex;
    align-items: flex-start;
  }
</style>
