<template>
  <div id="app">
    <ErrorLayout title="404" message="Page not found">
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
    </ErrorLayout>
  </div>
</template>

<script>
import ErrorLayout from '~board/layouts/Error'

export default {
  components: {
    ErrorLayout
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
