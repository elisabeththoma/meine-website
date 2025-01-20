<template>
  <header class="main-header">
    <nav>
      <ul>
        <li>
          <nuxt-link to="/"> Projects </nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="main-header__logo">
      <nuxt-link to="/"> <main-logo /> </nuxt-link>
    </div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/about"> About </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<style>
.main-header {
  display: flex;
  justify-content: space-between;
  padding: var(--spacer) var(--spacer) 0 var(--spacer);
}

.main-header__logo svg {
  fill: none;
  width: auto;
  height: 50px;
}

.main-header ul {
  display: inline-flex;
}

.main-header ul li + li {
  margin-left: var(--spacer);
}

.main-header nav:first-child {
  flex-basis: 50%;
}
.main-header nav:last-child {
  flex-basis: 50%;
  text-align: right;
}
</style>
