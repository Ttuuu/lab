<template>
  <div>
    <md-table id="outer" v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header @md-selected="onSelect">
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">{{this.$route.query.courseSpecies}}</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by course name..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      
      <md-table-empty-state
        md-label="No course found"
        :md-description="`No course found for this '${search}' query. Try a different search term.`">
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }" :md-disabled="item.courseName.includes('Stave')" md-selectable="multiple" md-auto-select>
        <md-table-cell md-label="ID" md-sort-by="id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Course Name" md-sort-by="courseName">{{ item.courseName }}</md-table-cell>
        <md-table-cell md-label="Time" md-sort-by="time">{{ item.time }}</md-table-cell>
        <md-table-cell md-label="Teacher Name" md-sort-by="teacher">{{ item.teacher }}</md-table-cell>
        <md-table-cell md-label="Credit" md-sort-by="credit">{{ item.credit }}</md-table-cell>
      </md-table-row>
    </md-table>
      <md-snackbar :md-active.sync="itemSelected">{{getAlternateLabel()}}
        <md-button class="md-primary" @click="itemSelected = false">OK</md-button>
      </md-snackbar>
    <md-button id="btn" class="md-raised md-primary" @click="btnClicked">drop</md-button>
  </div>
</template>

<script>
  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.courseName).includes(toLower(term)))
    }

    return items
  }

  export default {
    name: 'TableSearch',
    data: () => ({
      selected: [],
      showSnackbar:false,
      itemSelected:false,
      search: null,
      searched: [],
      users: [
        {
          id: 'MATH0001',
          courseName: "Higher Mathmatics",
          time: "Week 3-6, 8-17, Monday, Wednesday, Friday 1-2",
          teacher: "Shawna Dubbin",
          credit: "5.0"
        },
        {
          id: 'MATH0002',
          courseName: "Higher Mathmatics",
          time: "Week 3-6, 8-17, Monday, Wednesday, Friday 1-2",
          teacher: "Odette Demageard",
          credit: "5.0"
        },
        {
          id: 'MATH0003',
          courseName: "Higher Mathmatics",
          time: "Week 3-6, 8-17, Monday, Wednesday, Friday 1-2",
          teacher: "Vera Taleworth",
          credit: "5.0"
        },
        {
          id: 'MATH0004',
          courseName: "Linear Algebra",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Lonnie Izkovitz",
          credit: "4.0"
        },
        {
          id: 'MATH0005',
          courseName: "Linear Algebra",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Thatcher Stave",
          credit: "4.0"
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
          id: 'SE000338',
          courseName: "Human-Computer Interaction",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Rod Titterton",
          credit: "2.0"
        },
        {
          id: 'SE000339',
          courseName: "Software Test",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Gawen Applewhite",
          credit: "2.0"
        },
        {
          id: 'SE003310',
          courseName: "Software Test",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Nero Mulgrew",
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
          id: 'SE003312',
          courseName: "Game Development",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Cybill Rimington",
          credit: "3.0"
        },
        {
          id: 'SE000313',
          courseName: "Game Development",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Cortney Caulket",
          credit: "3.0"
        },
        {
          id: 'SE000314',
          courseName: "Game Development",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Cortney Caulket",
          credit: "3.0"
        },
        {
          id: 'SE000315',
          courseName: "Game Development",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Cortney Caulket",
          credit: "3.0"
        },
        {
          id: 'SE000316',
          courseName: "Game Development",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Cortney Caulket",
          credit: "3.0"
        },
        {
          id: 'SE000317',
          courseName: "Game Development",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Cortney Caulket",
          credit: "3.0"
        },
        {
          id: 'SE000318',
          courseName: "Game Development",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Cortney Caulket",
          credit: "3.0"
        },
        {
          id: 'SE000319',
          courseName: "Game Development",
          time: "Week 3-6, 8-12, Tuesday, Thursday, 5-6",
          teacher: "Cortney Caulket",
          credit: "3.0"
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
      btnClicked(){
        this.$router.push({path:'/'+`${this.$route.params.id}`+'/select-course/submitted',
          query:{pageName:'Select Course'}
        });      
      },
      onSelect (items) {
        this.selected = items
        this.itemSelected=true

      },
      getAlternateLabel () {
        let plural = ''

        if (Object.keys(this.selected).length > 1) {
          plural = 's'
        }

        return `${Object.keys(this.selected).length} course${plural} selected`
      },
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByName(this.users, this.search)
      }
    },
    created () {
      this.searched = this.users
    },
    onclick(){
      this.showSnackbar=true
    }
  }
</script>

<style lang="scss" scoped>
  .md-field {
    max-width: 300px;
  }

  #outer{
    height: 450px;
  }
  #btn{
    float: right;
    margin-top: 15px;
    margin-right:30px;
  }
</style>
