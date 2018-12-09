<template lang="pug">
figure.avatar
  img(v-if="src" :src="src" :alt="initials")
  span.avatar-initials(v-else)
    slot(v-if="!src")
      | {{ initials }}
  span.avatar-icon(v-if="status" :class="status")
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      default: null
    },
    src: {
      type: String,
      default: null
    },
    status: {
      type: String
    }
  },
  computed: {
    initials () {
      if (!this.alt) return ''

      if (this.alt.indexOf(' ') === -1) {
        return this.alt
      }

      return this.alt.toUpperCase().split(' ').map(word => word[0])
    }
  }
}
</script>
