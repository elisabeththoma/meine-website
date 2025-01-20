<template>
  <main class="page-index">
    <project-grid>
      <project-card
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
    </project-grid>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content('projects').sortBy('slug').fetch()
    return { projects }
  },
}
</script>
