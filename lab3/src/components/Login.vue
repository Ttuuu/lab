<template>
  <div id="outer">
    <form novalidate class="md-layout-item md-size-30 md-small-size-50" @submit.prevent="validateUser">
      <md-card>
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('userId')">
                <label for="user-id">Student ID</label>
                <md-input name="user-id" id="user-id" autocomplete="given-name" v-model="form.userId" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.userId.required">Student id is required</span>
                <span class="md-error" v-else-if="!$v.form.userId.minlength">Invalid student id</span>
              </md-field>
            </div>

          </div>

          <md-field :class="getValidationClass('password')">
            <label for="password">Password</label>
            <md-input type="password" name="password" id="password" autocomplete="password" v-model="form.password" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
            <span class="md-error" v-else-if="!$v.form.password.minLength">Wrong password</span>
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Login</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved">User {{ lastUser }} log in with success!</md-snackbar>
    </form>
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
          this.lastUser = `${this.form.userId}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
          this.jump()
        }, 0)
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
          //this.jump()
        }
        
      },
      jump(){
        setTimeout(() => {
          this.$router.push({path:'/'+`${this.lastUser}`+'/index',
            query:{pageName:'Index',userId:`${this.lastUser}`}
          });
        }, 1000);
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
  #outer{
    width:100%;
    height:600px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #color{
    background-color:grey;
    width: 100%;
    height:200px;
    position:absolute;
    left:0;
    top:200px;
    z-index: 1;
  }
  form{
    width:100%;
    position:relative;
  }
</style>
