<template>
  <footer class="pagination">
    <div class="pagination__prev">
      <nuxt-link v-if="prev" :to="prev.slug">{{ prev.title }}</nuxt-link>
    </div>
    <div class="pagination__next">
      <nuxt-link v-if="next" :to="next.slug">{{ next.title }}</nuxt-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ProjectPagination',
  props: {
    prev: {
      type: Object,
      default: () => ({}),
    },
    next: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style>
.pagination {
  margin-top: calc(var(--spacer) * 3);
  display: flex;
  justify-content: space-between;
}

.pagination__prev a:before {
  content: '←';
  margin-right: 0.5rem;
}

.pagination__next a:after {
  content: '→';
  margin-left: 0.5rem;
}
</style>
