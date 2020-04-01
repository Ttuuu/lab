<template>
  <div id="outer">
    <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Selected Courses</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No users found"
        :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
        <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>
      </md-table-empty-state>

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
  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.name).includes(toLower(term)))
    }

    return items
  }

  export default {
    name: 'TableSearch',
    data: () => ({
      search: null,
      searched: [],
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
        {
          id: 'SE003311',
          courseName: "Software Test",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Cybill Rimington",
          credit: "2.0"
        },
        {
          id: 'SE003311',
          courseName: "Software Test",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Cybill Rimington",
          credit: "2.0"
        },
        {
          id: 'SE003311',
          courseName: "Software Test",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Cybill Rimington",
          credit: "2.0"
        },
        {
          id: 'SE003311',
          courseName: "Software Test",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Cybill Rimington",
          credit: "2.0"
        },
        {
          id: 'SE003311',
          courseName: "Software Test",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Cybill Rimington",
          credit: "2.0"
        },
        {
          id: 'SE000320',
          courseName: "Game Development",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Cortney Caulket",
          credit: "3.0"
        }
      ]
    }),
    methods: {
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByName(this.users, this.search)
      }
    },
    created () {
      this.searched = this.users
    }
  }
</script>

<style lang="scss" scoped>
  .md-field {
    max-width: 300px;
  }
  #outer{
    .md-table{
      height: 500px;
    }
  }
</style>