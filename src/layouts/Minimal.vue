<template lang="pug">
.TheApp
  slot

</template>

<style lang="stylus" >
@import '~@blexar/framework/blexar.styl'
@import '../styles/app.styl'

.TheApp
  min-height: 100vh
  overflow: hidden
  position: relative
</style>

<script>
export default {
  name: 'BoardMinimalLayout'
}
</script>
