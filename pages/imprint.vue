<template>
  <main class="page-imprint">
    <nuxt-content :document="page" />
  </main>
</template>

<script>
export default {
  name: 'ImprintPage',
  async asyncData({ $content }) {
    const page = await $content('/', 'imprint').fetch()

    return {
      page,
    }
  },
}
</script>
<style>
.page-imprint {
  padding: 0 var(--spacer);
}
</style>
