<template>
  <footer class="main-footer">
    <div>
      ©{{ new Date().getFullYear() }}, Thoma
      <nuxt-link to="/imprint"> Imprint</nuxt-link>
    </div>

    <!-- <div class="main-footer__logo">
      <nuxt-link to="/"> <main-logo /> </nuxt-link>
    </div> -->
    <nav>
      <ul>
        <li>
          <!-- <nuxt-link to="/imprint"> Imprint</nuxt-link> -->
        </li>
        <li>
          <a
            href="https://de.linkedin.com/in/elisabeth-thoma-758041221"
            target="__blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/elisabethoma/?hl=de"
            target="__blank"
          >
            Instagram
          </a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
}
</script>

<style>
.main-footer {
  display: flex;
  justify-content: space-between;
  padding: 0 var(--spacer);
  margin-top: calc(var(--spacer) * 3);
  margin-bottom: var(--spacer);
}

.main-footer ul {
  display: flex;
}

.main-footer ul li + li {
  margin-left: 2rem;
}

.main-footer__logo svg {
  height: 30px;
  fill: none;
}
</style>
