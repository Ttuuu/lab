<template>
  <div>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title" @click="jump('Major Courses')">Select major courses</div>
          <div class="md-subhead">The second semester of 2019-2020</div>
        </md-card-header>
        <md-card-content></md-card-content>

      </md-ripple>
    </md-card>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title" @click="jump('Optional Courses')">Select optional courses</div>
          <div class="md-subhead">The second semester of 2019-2020</div>
        </md-card-header>
        <md-card-content></md-card-content>
      </md-ripple>
    </md-card>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title" @click="jump('Unrestricted Courses')">Select unrestricted courses</div>
          <div class="md-subhead">The second semester of 2019-2020</div>
        </md-card-header>
        <md-card-content></md-card-content>

      </md-ripple>
    </md-card>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title" @click="jump('Selected Courses')">Check selected courses</div>
          <div class="md-subhead">Check the courses you have been selected!</div>
        </md-card-header>
        <md-card-content></md-card-content>

      </md-ripple>
    </md-card>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title" @click="jump('Drop Courses')">Drop courses</div>
          <div class="md-subhead">Drop the courses you have been selected!</div>
        </md-card-header>
        <md-card-content></md-card-content>

      </md-ripple>
    </md-card>


  </div>
</template>

<script>
export default {
  name: 'DoubleLine',
  methods:{
    query(){
      console.log(this.$route.name)
    },
    jump(string){
      console.log(string)
      if(string === 'Selected Courses'){
        this.$router.push({path:'/'+`${this.$route.params.id}`+'/select-course/selected',
          query:{pageName:'Select Course',courseSpecies:string}
        });
      }
      else if(string === 'Drop Courses'){
        this.$router.push({path:'/'+`${this.$route.params.id}`+'/select-course/drop',
          query:{pageName:'Select Course',courseSpecies:string}
        });
      }else{
        this.$router.push({path:'/'+`${this.$route.params.id}`+'/select-course/choose',
          query:{pageName:'Select Course',courseSpecies:string}
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-list {
    width: 1000px;
    max-width: 98%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
    margin:0 10px;
  }
  .md-card{
    margin:10px;
    .md-card-content{
      padding-bottom:8px;
    }
  }
</style>