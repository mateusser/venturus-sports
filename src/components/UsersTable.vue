<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-layout row align-baseline>
          <span class="display-1">Users</span>
          <v-spacer></v-spacer>
          <v-text-field
            solo
            prepend-inner-icon="fa-search"
            label="Filter table content"
          ></v-text-field>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-data-table
          :headers="headers"
          :items="users"
          class="elevation-1"
          :pagination.sync="pagination"
        >
          <template v-slot:items="props">
            <v-hover>
              <tr slot-scope="{ hover }"
                :class="`${props.index % 2 === 0 ? '' : 'stripped'}`"
              >
                <td>{{ props.item.username }}</td>
                <td>{{ props.item.name }}</td>
                <td class="primary--text">{{ props.item.email }}</td>
                <td class="primary--text">{{ props.item.city }}</td>
                <td>{{ props.item.frequency | frequency }}</td>
                <td>{{ props.item.dotw | dotw }}</td>
                <td class="primary--text">{{ props.item.posts }}</td>
                <td class="primary--text">{{ props.item.albuns }}</td>
                <td>{{ props.item.photos }}</td>
                <td>
                  <v-btn v-if="hover" small flat fab color="error">
                    <v-icon>fa-trash-alt</v-icon>
                  </v-btn>
                </td>
              </tr>
            </v-hover>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'UsersTable',
  data: () => ({
    headers: [
      {
        text: 'Username',
        align: 'left',
        sortable: false,
        value: 'username'
      },
      { text: 'Name', value: 'name', sortable: false },
      { text: 'E-mail', value: 'email', sortable: false },
      { text: 'City', value: 'city', sortable: false },
      { text: 'Ride in group', value: 'frequency', sortable: false },
      { text: 'Day of the week', value: 'iron', sortable: false },
      { text: 'Posts', value: 'dotw', sortable: false },
      { text: 'Albuns', value: 'albuns', sortable: false },
      { text: 'Photos', value: 'photos', sortable: false },
      { text: '', value: '' }
    ],
    pagination: {
      descending: false,
      page: 0,
      rowsPerPage: -1,
      sortBy: 'name'
    },
    users: []
  }),
  async created () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    this.users = await response.json()
    this.users = this.users.map(usr => ({
      username: usr.username,
      name: usr.name,
      email: usr.email,
      city: usr.address.city,
      frequency: Math.floor(Math.random() * 3),
      dotw: [Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)],
      posts: Math.floor(Math.random() * 50),
      albuns: Math.floor(Math.random() * 10),
      photos: Math.floor(Math.random() * 100)
    }))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.stripped {
  background-color: #F7F7F7
}
</style>
