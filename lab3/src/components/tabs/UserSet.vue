<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser" @blur="validateUser">
      <md-card class="md-layout-item md-size-80 md-small-size-100">
          <!--
        <md-card-header>
          <div class="md-title">Users</div>
        </md-card-header>
          -->
        <md-card-content @blur="validateUser">
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('firstName')">
                <label for="first-name">ID</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="userid" disabled />
                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lastName')">
                <label for="last-name">Grade</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.grade" disabled />
                <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('telephone')">
                <label for="telephone">Telephone</label>
                <md-input name="telephone" id="telephone" v-model="form.telephone" />
                <span class="md-error" v-if="!$v.form.telephone.required">The telephone is required</span>
                <span class="md-error" v-else-if="!$v.form.telephone.minlength || !$v.form.telephone.maxlength">Invalid telephone</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('age')">
                <label for="age">Age</label>
                <md-input type="number" id="age" name="age" autocomplete="age" v-model="form.age" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.age.required">The age is required</span>
                <span class="md-error" v-else-if="!$v.form.age.maxlength">Invalid age</span>
              </md-field>
            </div>
          </div>

          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button class="md-primary" :disabled="sending">Change Password</md-button>
          <md-button type="submit" class="md-raised md-primary" :disabled="sending">Save Infomation</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved">User information was saved with success!</md-snackbar>
    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    props:['userid'],
    mixins: [validationMixin],
    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        telephone: 13734539483,
        age: 20,
        email: '1111111111@qq.com',
        grade:'2017',
      },
      //userid:'111111',
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        firstName: {
        },
        lastName: {
        },
        age: {
          required,
          maxLength: maxLength(3)
        },
        telephone: {
          required,
          minLength: minLength(11),
          maxLength: maxLength(11),
          
        },
        email: {
          required,
          email
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
        this.form.firstName = null
        this.form.lastName = null
        this.form.age = null
        this.form.telephone = null
        this.form.email = null
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          //this.clearForm()
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
  .md-button{
    margin:0 10px;
  }
</style>