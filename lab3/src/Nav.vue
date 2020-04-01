<template>
  <div>
    <router-view/>
  </div>
  
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        userId: null,
        password: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        userId: {
          required,
          minLength: minLength(3)
        },
        password: {
          required,
          minLength:minLength(5)
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.userId = null
        this.form.password = null
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.userId} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>
