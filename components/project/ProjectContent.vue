<template>
  <nuxt-content
    :document="document"
    class="project-details"
    @click="enterGallery"
  />
</template>

<script>
export default {
  name: 'ProjectContent',
  props: {
    document: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      imgNodes: [],
      gallery: [],
    }
  },
  mounted() {
    this.imgNodes = this.$el.getElementsByTagName('img')
    for (const n of this.imgNodes) {
      n.addEventListener('click', this.enterGallery)
      this.gallery.push(n.attributes[0]?.nodeValue)
    }
  },
  beforeDestroy() {
    for (const n of this.imgNodes) {
      n.removeEventListener('click', this.enterGallery)
    }
  },
  methods: {
    enterGallery(e) {
      e.stopPropagation()
      e.preventDefault()
      const clickedImg = e.target.getAttribute('src')
      const index = this.gallery.indexOf(clickedImg)

      this.$modal.open({
        fullScreen: true,
        parent: this,
        animation: 'none',
        props: {
          images: this.gallery,
          initial: index,
        },
        component: () => import('~/components/project/ProductLightbox.vue'),
      })
    },
  },
}
</script>

<style>
.project-details img:hover {
  cursor: pointer;
}
</style>
