<template>
  <div>
    <md-empty-state
      class="md-primary"
      md-icon="done"
      md-label="Submitted successfully."
      md-description="Courses you have selected are as follow."
      style="padding-bottom:0px">
    </md-empty-state>
    <md-button class="md-primary md-raised" @click="jump">Select More</md-button>
    <md-table v-model="users" md-card>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Course Name" md-sort-by="courseName">{{ item.courseName }}</md-table-cell>
        <md-table-cell md-label="Time" md-sort-by="time">{{ item.time }}</md-table-cell>
        <md-table-cell md-label="Teacher Name" md-sort-by="teacher">{{ item.teacher }}</md-table-cell>
        <md-table-cell md-label="Credit" md-sort-by="credit">{{ item.credit }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  export default {
    name: 'EmptyStateColors',
    data: () => ({
      users: [
        {
          id: 'MATH0003',
          courseName: "Higher Mathmatics",
          time: "Week 3-6, 8-17, Monday, Wednesday, Friday 1-2",
          teacher: "Vera Taleworth",
          credit: "5.0"
        },
        {
          id: 'MATH0006',
          courseName: "Linear Algebra",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Vera Taleworth",
          credit: "4.0"
        },
        {
          id: 'SE000337',
          courseName: "Human-Computer Interaction",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Xiong Min",
          credit: "2.0"
        },
        {
          id: 'SE003311',
          courseName: "Software Test",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Cybill Rimington",
          credit: "2.0"
        },
      ]
    }),
    methods:{
      jump(){
        this.$router.push({path:'/'+`${this.$route.params.id}`+'/select-course',
          query:{pageName:'Select Course'}
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    text-align: center;
    display:flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .md-button{
      width:120px;
    }
    .md-table{
      margin:20px;
    }
  }

  .md-empty-state {
    display: inline-block;
    vertical-align: middle;

    + .md-empty-state {
      margin-left: 16px;
    }
  }
</style>