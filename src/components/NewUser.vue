<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 style="margin-bottom: 15px;">
        <v-layout row align-center>
          <span class="display-1" style="margin-right: 15px;">
            Registration
          </span>
          <v-divider></v-divider>
        </v-layout>
      </v-flex>
      <v-flex xs4>
        <span class="headline primary--text">Need Help?</span>
      </v-flex>
      <v-flex xs4>
        <span class="headline primary--text">Why register?</span>
      </v-flex>
      <v-flex xs4>
        <span class="headline primary--text">What people are saying...</span>
      </v-flex>
      <v-flex xs1>
        <v-avatar size="100px">
          <v-icon color="primary">far fa-life-ring</v-icon>
        </v-avatar>
      </v-flex>
      <v-flex xs3>
        <span class="subheading">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </v-flex>
      <v-flex xs1>
        <v-avatar size="100px">
          <v-icon color="primary">fa-heartbeat</v-icon>
        </v-avatar>
      </v-flex>
      <v-flex xs3>
        <span class="subheading">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </v-flex>
      <v-flex xs1>
        <v-avatar size="100px">
          <v-icon color="primary">far fa-smile</v-icon>
        </v-avatar>
      </v-flex>
      <v-flex xs3>
        <span class="subheading">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </v-flex>
      <v-flex xs12 style="margin: 15px;"><v-divider></v-divider></v-flex>
      <v-flex xs5 offset-xs1>
        <v-text-field outline label="Username"></v-text-field>
      </v-flex>
      <v-flex xs5>
        <v-text-field outline label="City"></v-text-field>
      </v-flex>
      <v-flex xs5 offset-xs1>
        <v-text-field outline label="Name"></v-text-field>
      </v-flex>
      <v-flex xs5>
        <v-text-field outline label="E-mail"></v-text-field>
      </v-flex>
      <v-flex xs5 offset-xs1>
        <v-radio-group
          label="Ride in group?"
          v-model="radioGroup"
        >
          <v-radio
            label="Always"
            :value="2"
            color="primary"
          ></v-radio>
          <v-radio
            label="Sometimes"
            :value="1"
            color="primary"
          ></v-radio>
          <v-radio
            label="Never"
            :value="0"
            color="primary"
          ></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs5>
        <v-layout row justify-center>
          <v-flex xs12>
            <span class="subheading" style="color: #737373;">
              Days of the week
            </span>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs2>
            <v-checkbox
              color="primary"
              label="Sun"
            ></v-checkbox>
          </v-flex>
          <v-flex xs2>
            <v-checkbox
              color="primary"
              label="Mon"
            ></v-checkbox>
          </v-flex>
          <v-flex xs2>
            <v-checkbox
              color="primary"
              label="Tue"
            ></v-checkbox>
          </v-flex>
          <v-flex xs2>
            <v-checkbox
              color="primary"
              label="Wed"
            ></v-checkbox>
          </v-flex>
          <v-flex xs2>
            <v-checkbox
              color="primary"
              label="Thu"
            ></v-checkbox>
          </v-flex>
          <v-flex xs2>
            <v-checkbox
              color="primary"
              label="Fri"
            ></v-checkbox>
          </v-flex>
          <v-flex xs2>
            <v-checkbox
              color="primary"
              label="Sat"
            ></v-checkbox>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs4 offset-xs8>
        <v-spacer></v-spacer>
        <v-btn flat color="grey">
          Discard
        </v-btn>
        <v-btn color="primary" dark>
          Save
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'NewUser',
  data: () => ({
    radioGroup: -1
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.radio {
  display: grid;
  grid-template-columns: "1fr 1fr 1fr";
  grid-template-rows: "1fr 1fr";
  grid-template-areas: "title title title"
  "always sometimes never";
}

.radio-title {
  grid-area: title;
}

.always {
  grid-area: always;
}

.always {
  grid-area: sometimes;
}

.always {
  grid-area: never;
}

.dotw {
  width: 1000px;
  display: grid;
  grid-template-columns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr";
  grid-template-rows: "1fr 1fr";
  grid-template-areas: "title title title title title title title"
  "sun mon tue wed thu fri sun";
}

.dotw-title {
  grid-area: title;
}

.sun {
  grid-area: sun;
}

.mon {
  grid-area: mon;
}

.tue {
  grid-area: tue;
}

.wed {
  grid-area: wed;
}

.thu {
  grid-area: thu;
}

.fri {
  grid-area: fri;
}

.sat {
  grid-area: sat;
}
</style>
