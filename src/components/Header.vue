<template>
  <div class="container">
    <nav class="nav">
      <router-link to="/" class="nav__link">Exchange</router-link>
      <button class="nav__btn">Eng</button>
      <button class="nav__btn">Company</button>
      <button class="nav__btn">Login/Sign up</button>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  gap: 16px;
}

.nav__link {
  text-decoration: none;
  padding: 16px 24px;
  background: var(--primary-light);
  color: var(--white);
  font-weight: 600;
  transition: background var(--transition-time);
  &:hover {
    background: var(--primary);
  }
}
.nav__link:last-of-type {
  margin-right: auto;
}
</style>
