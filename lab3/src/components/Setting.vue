<template>
  <div>
    <md-steppers md-vertical>
      <md-step id="first" md-label="Student Information Setting">
        <user-form :userid="id"></user-form>
      </md-step>

      <md-step id="second" md-label="Global Setting">
        <glo-set></glo-set>
      </md-step>

      <md-step id="third" md-label="System Setting">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
  import UserForm from './tabs/UserSet'
  import GloSet from './tabs/GloSet'

  export default {
    name: 'StepperVertical',
    data(){
      return{
        id:`${this.$route.params.id}`
      }
    },
    components:{UserForm,GloSet}
  }
</script>