<template>
  <form @submit.prevent="handleSaveBudget" class="new-budget-form">
    <h4 class="new-budget-form__title">
      New Budget
    </h4>
    <div class="new-budget-form__element">
      <label class="new-budget-form__label">Title</label>
      <input
        v-model="newBudget.title"
        type="text"
        class="new-budget-form__input"
      >
    </div>
    <div class="new-budget-form__element">
      <label class="new-budget-form__label">Number Of Days</label>
      <input
        v-model="newBudget.days"
        type="text"
        class="new-budget-form__input"
      >
    </div>
    <h4 class="new-budget-form__expenses-title">
      Expenses
    </h4>
    <div
      v-for="(expense, key) in newBudget.expenses"
      :key="key"
      class="new-expense"
    >
      <div class="new-expense__element">
        <label class="new-expense__label">Expense title</label>
        <input
          v-model="expense.title"
          type="text"
          class="new-expense__input"
        >
      </div>
      <div class="new-expense__element">
        <label class="new-expense__label">Expense Amount</label>
        <input
          v-model="expense.amount"
          type="number"
          class="new-expense__input"
        >
      </div>
      <!-- new budget expense element -->
    </div>
    <input
      type="submit"
      value="Add Budget"
      class="save-budget"
    >
  </form>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'NewBudgetForm',
  data () {
    return {
      newBudget: {
        title: '',
        days: 0,
        expenses: [
          {
            title: '',
            amount: 0
          },
          {
            title: '',
            amount: 0
          },
          {
            title: '',
            amount: 0
          }
        ]
      }
    }
  },
  methods: {
    ...mapMutations({
      saveBudget: 'budgets/add'
    }),
    handleSaveBudget () {
      const budget = this.newBudget
      this.$store.commit('budgets/add', budget)
    }

  }
}
</script>
<style lang="scss" scoped>
  input {
    border: 0px;
    outline: none;
    padding: .2rem .5rem .8rem;
    border-bottom: .5px solid rgba($color: #000, $alpha: .4);
    background-color: transparent;
    color: #000;
    &:active {
      outline: none;
    }
  }

  label {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .new-budget-form {
    padding: 2rem 3rem;
    background-color: #f2f2f2;

    &__title {
      margin-bottom: 2rem;
      font-weight: 300;
      font-size: 2rem;
    }

    &__element {
      display: flex;
      flex-direction: column;
      font-family: 'Open Sans', sans-serif;
      margin-bottom: 1rem;
    }

    &__expenses-title {
      margin-bottom: 1.5rem;
      font-size: 1.4rem;
    }
  }

  .new-expense {
    display: flex;
    margin-bottom: 1rem;

    &__element {
      padding: 1rem;
    }
  }
</style>
