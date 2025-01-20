<template>
  <div class="project-grid">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ProjectGrid',
}
</script>

<style>
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacer);
  padding: var(--spacer);
}

@media only screen and (max-width: 960px) {
  .project-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 720px) {
  .project-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media only screen and (max-width: 480px) {
  .project-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
