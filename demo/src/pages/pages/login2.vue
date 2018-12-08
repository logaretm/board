<template lang="pug">
div
  FullPage
    h1 Sign In
    label.input-label Email Address
    input(type="email" class="input")
    label.input-label Password
    input(type="password" class="input")
    button.button.is-block.is-primary Sign in
    RouterLink.button.is-block.is-clean(to="/signup") Create Account

</template>

<script>
export default {
  layout: 'minimal'
}
</script>
