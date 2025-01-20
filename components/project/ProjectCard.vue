<template>
  <nuxt-link :to="`project/${project.slug}`" class="project-card">
    <div class="project-card__thumbnail aspect aspect-2x3">
      <img :src="project.featuredImage" />
    </div>
    <div class="project-card__title">
      <p class="title">{{ project.title }}</p>
      <p class="subtitle">{{ project.subtitle }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => ({
        title: '',
        subtitle: '',
        image: '',
      }),
    },
  },
}
</script>

<style>
.project-card {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.project-card__thumbnail {
  position: relative;
  width: 100%;
  /* padding-bottom: 133.33333%; */
  background-color: black;
}

.project-card__thumbnail img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-card__title {
  display: block;
  width: 100%;
  padding: 12px 0 0 0;
}

/* Alternative title on top of image
.project-card__title {
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 12px 0 0 0;
  bottom: 0;
  padding: 1rem 1.25rem;
} */

.project-card__title .title,
.project-card__title .subtitle {
  font-size: 18px;
  line-height: 1.2;
}

.project-card__title .subtitle {
  opacity: 0.25;
}
</style>
