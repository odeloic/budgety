<template>
  <div class="budgets">
    <h4 class="budgets__title">
      All your Budgets
    </h4>
    <Budget
      v-for="(budget, key) in budgets"
      :key="key"
      :title="budget.title"
      :days="budget.days"
      :amount="budget.amount"
    />
  </div>
</template>
<script>
import Budget from '~/components/Budget'

export default {
  name: 'BudgetsContainer',
  components: {
    Budget
  },
  props: {
    budgets: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .budgets__title {
    margin-bottom: 3rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    color: #4A90E2;
    font-weight: 500;
    letter-spacing: -.5px;

  }
</style>
