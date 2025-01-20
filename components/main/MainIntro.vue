<template>
  <div class="intro">
    <div class="intro__logo">
      <main-logo />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.intro {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--body-color);
  color: var(--body-bg);
  animation-name: swipe-up;
  animation-duration: 400ms;
  animation-fill-mode: forwards;
  animation-delay: 600ms;
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  transform: translateZ(0);
}

.intro__logo {
  position: relative;
  width: 100%;
  text-align: center;
}

.intro__logo svg {
  width: 66%;
  max-height: 50vh;

  animation-name: fade-up;
  animation-duration: 1200ms;
  animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
}

.intor__logo svg {
  display: inline-flex;
}

@keyframes swipe-up {
  from {
    clip-path: inset(0% 0% 0% 0%);
  }
  to {
    clip-path: inset(0% 0% 100% 0%);
    visibility: hidden;
  }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(3vh);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
