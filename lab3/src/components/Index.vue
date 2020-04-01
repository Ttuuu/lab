<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">{{ this.$route.query.pageName }}</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item :class="{selected:indexsel}">
              <md-icon>home</md-icon>
              <span class="md-list-item-text" @click="toIndex">Index</span>
              
              <md-badge md-content="2" v-if="!indexsel" />
          </md-list-item>

          <md-list-item :class="{selected:coursesel}">
            <md-icon>date_range</md-icon>
            <span class="md-list-item-text" @click="toSelCourse">Select Course</span>
          </md-list-item>
<!--
          <md-list-item>
            <md-icon>account_circle</md-icon>
            <span class="md-list-item-text" @click="toInformation">Information</span>
          </md-list-item>
-->
          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text" @click="toSetting">Spam</span>
          </md-list-item>
          <md-list-item :class="{selected:settingsel}">
            <md-icon>settings</md-icon>
            <span class="md-list-item-text" @click="toSetting">Settings</span>
          </md-list-item>
          <div id="user-info">
          <md-list-item>


            <md-icon>how_to_reg</md-icon>
            <span class="md-list-item-text">Online User: {{this.$route.params.id}}</span>
          </md-list-item>
          </div>
        </md-list>
        
      </md-app-drawer>


      <md-app-content>

        <router-view/>
      </md-app-content>




      
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
  .md-list{
    #user-info{
      //align-self: flex-end;
      height: 55vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }
  .div{
    display: flex;
    flex-wrap: wrap;
  }
  .selected{
    background: #448aff;
    span,.md-icon{
      color:white;
    }
  }
</style>

<script>
export default {
  name: 'Waterfall',
  data:()=>{
    return {
      indexsel:true,
      settingsel:false,
      coursesel:false,
    }
  },
  methods:{
    toSelCourse(){
      this.$router.push({path:'/'+`${this.$route.params.id}`+'/select-course',
        query:{pageName:'Select Course'}
      });
        this.indexsel=false;
        this.coursesel=true;
        this.settingsel=false;

    },
    toIndex(){
      this.$router.push({path:'/'+`${this.$route.params.id}`+'/index',
        query:{pageName:'Index'}
      });
        this.indexsel=true;
        this.coursesel=false;
        this.settingsel=false;

    },
    toInformation(){
      this.$router.push({
        path:'/'+`${this.$route.params.id}`+'/information',
        query:{pageName:'Information'}
        });
        this.indexsel=false;
        this.coursesel=false;
        this.settingsel=true;

    },
    toSetting(){
      this.$router.push({
        path:'/'+`${this.$route.params.id}`+'/setting',
        query:{pageName:'Setting'}
        });
        this.indexsel=false;
        this.coursesel=false;
        this.settingsel=true;
    },
  }
}
</script>
