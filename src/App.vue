<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon>
        <v-icon color="primary">fa-futbol</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Venturus Sports</span>
      </v-toolbar-title>
      <v-spacer>
      </v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu offset-y>
          <v-btn
            slot="activator"
            color="seconday"
            flat small
          >
            <v-avatar left color="primary">
              <span class="white--text"> JB </span>
            </v-avatar>
            <span style="margin-left: 7px;">Jason Bourne</span>
            <v-icon right small>fa-chevron-down</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>fa-users</v-icon>
                </v-list-tile-action>
              <v-list-tile-title>Friends List</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>fa-save</v-icon>
                </v-list-tile-action>
              <v-list-tile-title>Saved Items</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>fa-bell</v-icon>
                </v-list-tile-action>
              <v-list-tile-title>Notifications</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>fa-cog</v-icon>
                </v-list-tile-action>
              <v-list-tile-title>User Preferences</v-list-tile-title>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>fa-sign-out-alt</v-icon>
                </v-list-tile-action>
              <v-list-tile-title>Log out</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>

    <v-content align-start>
      <v-breadcrumbs class="bcrumbs" :items="items">
        <template v-slot:divider>
          <v-icon>fa-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  computed: {
    items () {
      const route = this.$router.currentRoute.path.split('/')
      return route.map((item, idx) => ({
        text: idx === 0 ? '⌂' : item,
        disabled: true,
        href: item
      }))
    }
  }
}
</script>

<style>
.bcrumbs {
  padding: 5px 50px 5px 50px;
  background-color: #DDDDDD;
}
</style>
