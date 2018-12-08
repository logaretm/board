<template lang="pug">
div
  FullPage
    h1 Sign Up
    label.input-label Name
    input(type="text" class="input")
    label.input-label Email Address
    input(type="email" class="input")
    label.input-label Password
    input(type="password" class="input")
    label.input-label Confirm password
    input(type="password" class="input")
    button.button.is-block.is-primary.is-rounded Sign up
    RouterLink.button.is-block.is-clean(to="/login") Have an account? login

</template>

<script>
export default {
  layout: 'minimal'
}
</script>
