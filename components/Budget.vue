<template>
  <div class="budget">
    <h3 class="budget__title">
      {{ title }}
    </h3>
    <p class="budget__details">
      <span class="budget__days">{{ days }} days</span>
      <span class="budget__amount">Funds: {{ amount }} RWF</span>
    </p>
    <button class="delete-button">
      Remove this budget
    </button>
  </div>
</template>
<script>
export default {
  name: 'Budget',
  props: {
    title: {
      type: String,
      default: ''
    },
    days: {
      type: Number,
      default: 0
    },
    amount: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.budget {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  padding-bottom: 2rem;
  border-bottom: .5px solid rgba(#b1b1b1, .4);
  position: relative;

  &__title {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  &__details {
    display: flex;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
  }

  &__days {
    margin-right: 2rem;
    padding: .5rem 1.4rem;
    background-color: #f2f2f2;
    border-radius: 20px;
  }

  &__amount {
    color: #D0021B;
  }

  .delete-button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    padding: 1rem 1rem;
    border: none;
    background-color: #D0021B;
    color: #f2f2f2;
    font-family: 'Open Sans', sans-serif;
    font-size: .5rem;
    font-weight: 600;
    border-radius: 20px;
    cursor: pointer;
  }
}
</style>
