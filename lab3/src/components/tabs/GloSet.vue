<template>
  <div>
    <md-switch v-model="array" value="1" class="md-primary">Send message to my mailbox</md-switch>
    <md-switch v-model="array" value="2" class="md-primary">Prompt for successful course selection</md-switch>
    <md-switch v-model="boolean" class="md-primary">Receive course information</md-switch>
    <md-switch v-model="disabled" disabled class="md-primary">Disabled</md-switch>

  </div>
</template>

<script>
  export default {
    name: 'RegularSwitch',
    data: () => ({
      array: [],
      boolean: false,
      string: null,
      novalue: null,
      disabled: true
    })
  }
</script>

<style lang="scss" scoped>
  .md-switch {
    display: flex;
  }

  table {
    width: 100%;
    table-layout: fixed;

    th {
      text-align: left;
    }
  }
</style>