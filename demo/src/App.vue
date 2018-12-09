<template>
  <div id="app">
    <component :is="layout">
      <Transition name="fade" mode="out-in">
        <RouterView />
      </Transition>
      <notifications group="global" position="bottom right">
        <div slot="body" slot-scope="props" :class="['alert', props.item.type]">
          <div class="alert-content">
            <div class="alert-title" v-if="props.item.title">{{ props.item.title }}</div>
            <div v-html='props.item.text' v-if="props.item.text"></div>
          </div>
          <button class="alert-dismiss" @click="props.close">
            <AppIcon name="close" />
          </button>
        </div>
      </notifications>
    </component>
  </div>
</template>

<script>
import DefaultLayout from '~board/layouts/Default'
import MinimalLayout from '~board/layouts/Minimal'
import Layout from './layout'

export default {
  head: () => ({
    titleTemplate: '%s | Board'
  }),
  components: {
    DefaultLayout,
    MinimalLayout
  },
  computed: {
    layout () {
      if (Layout.layout === 'minimal') {
        return MinimalLayout
      }

      return DefaultLayout
    }
  }
}
</script>

<style lang="stylus">
.fade-enter-active,
.fade-leave-active
  transition-duration: 0.3s
  transition-property: opacity
  transition-timing-function: ease

.fade-enter,
.fade-leave-active
  opacity: 0

</style>
