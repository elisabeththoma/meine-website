<template>
  <main class="page-project">
    <header>
      <h1>{{ project.title }}</h1>
      <h2>{{ project.subtitle }}</h2>
    </header>
    <project-content :document="project" class="project-details" />
    <project-pagination :prev="pagination[0]" :next="pagination[1]" />
  </main>
</template>

<script>
import ProjectPagination from '~/components/project/ProjectPagination.vue'

export default {
  components: { ProjectPagination },
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()
    const pagination = await $content('projects')
      .sortBy('slug')
      .surround(params.slug)
      .only(['title', 'slug'])
      .fetch()
    return {
      project,
      pagination,
    }
  },
}
</script>
<style>
.page-project {
  padding: 0 var(--spacer);
}

.project-details {
  margin-top: calc(var(--spacer) * 3);
}

.project-details > * {
  margin-top: var(--spacer);
}

.page-project header {
  font-size: 3rem;
  max-width: 87.5%;
  margin-top: calc(var(--spacer) * 2);
}
</style>
