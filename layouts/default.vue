<template>
  <div class="wrapper">
    <main class="content">
      <div class="app-logo">
        <h2 class="app-title">
          Budgety
        </h2>
        <h4 class="app-tagline">
          Budget easily and fast
        </h4>
      </div>
      <nuxt />
    </main>
  </div>
</template>

<style>
button {
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
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: "Open Sans", sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4 {
  font-family: "Montserrat", sans-serif;
}

.m-top--big {
  margin-top: 5rem;
}
.wrapper {
  width: 100%;
  height: 100%;
  background-color: #4a90e2;
  padding: 10rem 0rem 0rem;
}

.content {
  max-width: 90rem;
  margin: 0 auto;
  background-color: #ffffff;
  min-height: 100vh;
  padding: 5rem;
}

.app-logo {
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.app-title {
  font-size: 4rem;
  font-weight: 400;
  color: #1C1E22;
  margin-bottom: 1rem;
}

.app-tagline {
  font-size: 1.2rem;
  font-weight: 400;
  color: #9B9B9B;
  font-family: "Open Sans", sans-serif;
}
</style>
