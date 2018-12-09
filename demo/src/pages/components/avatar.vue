<template lang="pug">
div
  h1 Avatar
  .grid.is-desktop-6.has-space
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        Avatar(src="/img/users/1.jpg")
        Avatar(alt="AV")

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Sizes
        .grid.is-6.has-space
          .column
            .u-mb-normal(v-for="(size, idx) in sizes")
              Avatar(:src='`/img/users/${idx+1}.jpg`' :class="size")
          .column
            .u-mb-normal(v-for="size in sizes")
              Avatar(alt="AV" :class="size")
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Colors
        Avatar.is-inline(v-for="color in colors" :key="color" :class="color" alt="AV")

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Status
        Avatar(src="/img/users/1.jpg" status="is-primary").is-inline.is-massive
        Avatar(src="/img/users/2.jpg" status="is-secondary").is-inline.is-large
        Avatar(src="/img/users/3.jpg" status="is-success").is-inline.is-normal
        Avatar(src="/img/users/4.jpg" status="is-danger").is-inline.is-small
        Avatar(src="/img/users/5.jpg" status="is-warning").is-inline.is-tiny

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Icons
        Avatar.is-inline(v-for="color in colors" :key="color" :class="color")
          AppIcon(name="insert-emoticon")
    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Icons
        Avatar.is-inline(v-for="size in sizes" :class="size" :key="size")
          AppIcon(name="insert-emoticon")

    .column
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Square
        div
          Avatar.is-inline.is-square(v-for="color in colors" :key="color" :class="color" alt="AV")
        .u-mt-large
          Avatar.is-inline.is-square(v-for="(size, idx) in sizes" :key="idx" :src="`/img/users/${idx+1}.jpg`" :class="size" alt="AV")
          Avatar.is-inline.is-square(v-for="size in sizes" :key="size" :class="size")
            AppIcon(name="crop")
</template>

<script>
import colors from '@/data/colors'
import sizes from '@/data/sizes'
export default {
  head () {
    return {
      title: 'Label'
    }
  },
  data: () => ({
    colors: colors,
    sizes: sizes
  })
}
</script>
