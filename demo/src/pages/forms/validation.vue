<template lang="pug">
div
  h1 Validation
  p We use #[a(href="https://baianat.github.io/vee-validate/" target="blank") #[code VeeValidate]] for validations
  .grid.has-space
    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Basic
        form.form(novalidate)
          ValidationProvider(name="Name" rules="required")
            .field(slot-scope="{ errors }")
              label.field-label Name
              input.input(v-model="form1.name" type="text" placeholder='Enter your name' :class="{ 'is-danger': errors[0] }")
              span.field-text.is-danger(v-if="errors[0]") {{ errors[0] }}
          ValidationProvider(name="Email" rules="required|email")
            .field(slot-scope="{ errors }")
              label.field-label Email
              input.input(v-model="form1.email" type="email" placeholder='Enter your email' :class="{ 'is-danger': errors[0] }")
              span.field-text.is-danger(v-if="errors[0]") {{ errors[0] }}
          ValidationProvider(name="URL" rules="required|url:require_protocol")
            .field(slot-scope="{ errors }")
              label.field-label URL
              input.input(v-model="form1.url" type="url" placeholder='Enter your URL' :class="{'is-danger': errors[0] }")
              span.field-text.is-danger(v-if="errors[0]") {{ errors[0] }}
          ValidationProvider(name="Digits" rules="required|numeric")
            .field(slot-scope="{ errors }")
              label.field-label Digits
              input.input(v-model="form1.digits" type="text" placeholder='Enter your digits' :class="{'is-danger': errors[0] }")
              span.field-text.is-danger(v-if="errors[0]") {{ errors[0] }}
          ValidationProvider(name="Credit Card" rules="required|credit_card")
            .field(slot-scope="{ errors }")
              label.field-label Credit card
              input.input(v-model="form1.card" type="text" placeholder='Enter your credit card' :class="{'is-danger': errors[0] }")
              span.field-text.is-danger(v-if="errors[0]") {{ errors[0] }}

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Observed Form
        ValidationObserver
          form.form(slot-scope="{ validate }" @submit.prevent="validate()")
            ValidationProvider(name="Name" rules="required")
              .field(slot-scope="{ errors }")
                label.field-label Name
                input.input(v-model="form2.name" type="text" placeholder='Enter your name' :class="{ 'is-danger': errors[0] }")
                span.field-text.is-danger(v-if="errors[0]") {{ errors[0] }}
            ValidationProvider(name="Email" rules="required|email")
              .field(slot-scope="{ errors }")
                label.field-label Email
                input.input(v-model="form2.email" type="email" placeholder='Enter your email' :class="{ 'is-danger': errors[0] }")
                span.field-text.is-danger(v-if="errors[0]") {{ errors[0] }}
            ValidationProvider(name="URL" rules="required|url:require_protocol")
              .field(slot-scope="{ errors }")
                label.field-label URL
                input.input(v-model="form2.url" type="url" placeholder='Enter your URL' :class="{'is-danger': errors[0] }")
                span.field-text.is-danger(v-if="errors[0]") {{ errors[0] }}
            ValidationProvider(name="Digits" rules="required|numeric")
              .field(slot-scope="{ errors }")
                label.field-label Digits
                input.input(v-model="form2.digits" type="text" placeholder='Enter your digits' :class="{'is-danger': errors[0] }")
                span.field-text.is-danger(v-if="errors[0]") {{ errors[0] }}
            ValidationProvider(name="Credit Card" rules="required|credit_card")
              .field(slot-scope="{ errors }")
                label.field-label Credit card
                input.input(v-model="form2.card" type="text" placeholder='Enter your credit card' :class="{'is-danger': errors[0] }")
                span.field-text.is-danger(v-if="errors[0]") {{ errors[0] }}

            button.button.is-primary(type="submit") Validate

    .column.is-desktop-6
      AppCard.is-full
        template(slot="header")
          h4.AppCard-title Checkbox & Radio
        ValidationObserver
          form.form(slot-scope="{ validate }" @submit.prevent="validate()")
            ValidationProvider(name="RadioGroup" rules="required|included:1,2")
              .field(slot-scope="{ errors }")
                label.field-label  Radio
                label.radio.is-inline
                  input.radio-input(type='radio' value='1' v-model="preference" name="RadioGroup")
                  span.radio-label Coding
                label.radio.is-inline
                  input.radio-input(type='radio' value='2' v-model="preference" name="RadioGroup")
                  span.radio-label Music
                label.radio.is-inline
                  input.radio-input(type='radio' value='3' v-model="preference" name="RadioGroup")
                  span.radio-label Gaming

                span.field-text.is-danger(v-if="errors[0]") {{ errors[0] }}

            ValidationProvider(name="Checkbox" rules="required:rejectFalse")
              .field(slot-scope="{ errors }")
                label.field-label Checkbox
                label.checkbox
                  input.checkbox-input(type='checkbox' name="Checkbox" v-model="isTicked" :value="true")
                  span.checkbox-label Tick me
                span.field-text.is-danger(v-if="errors[0]") {{ errors[0] }}

            button.button.is-primary(type="submit") Validate

</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  head () {
    return {
      title: 'Validation'
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    preference: '',
    isTicked: false,
    form1: {
      name: '',
      email: '',
      url: '',
      digits: '',
      card: ''
    },
    form2: {
      name: '',
      email: '',
      url: '',
      digits: '',
      card: ''
    }
  })
}
</script>
