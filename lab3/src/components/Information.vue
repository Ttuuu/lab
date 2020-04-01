<template>
  <div>
    <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="System" to="information/SystemNoc" exact>
        System notification
      </md-tab>

      <md-tab id="tab-pages" md-label="System" to="information/SystemNoc">
        School notification
        <p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
      </md-tab>

      <md-tab id="tab-posts" md-label="School" to="information/SchoolNoc">
        School notification
        <p>Qui, voluptas repellat impedit ducimus earum at ad architecto consectetur perferendis aspernatur iste amet ex tempora animi, illum tenetur quae assumenda iusto.</p>
      </md-tab>

      <md-tab id="tab-favorites" md-label="Course" to="information/CourseNoc">
        Course notification
        <p>Maiores, dolorum. Beatae, optio tempore fuga odit aperiam velit, consequuntur magni inventore sapiente alias sequi odio qui harum dolorem sunt quasi corporis.</p>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: 'TabContent'
}
</script>