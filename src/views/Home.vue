<template>
    <div class="home">
      <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href="#">Krank Club</a>
      </nav>
      <div v-if="matchesReady">
        <div v-for="(value, key) in groupByDate" v-bind:key="key">
          <div class="container date">
            <p>{{ key | formattedDate }}</p>
          </div>
          <div v-for="match in value" v-bind:key="match.id" class="container">
            <MatchInfo v-bind:match="match"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import MatchInfo from "../components/MatchInfo";

export default {
  name: "Home",
  components: {
    MatchInfo
  },
  data() {
    return {
      matchesReady: false
    };
  },
  props: {
    matches: null
  },
  computed: {
    groupByDate() {
      return this.matches.reduce(function(rv, x) {
        (rv[x.time] = rv[x.time] || []).push(x);
        return rv;
      }, {});
    }
  },
  filters: {
    formattedDate: function(date) {
      date = new Date(date);
      const dates = [
        "Sunday",
        "Monday",
        "Tueday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      const months = [
        "January",
        "February",
        "Mars",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      return `${dates[date.getDay()]} ${date.getDate()} ${
        months[date.getMonth()]
      }`;
    }
  },
  created() {
    const colors = ["#37B76A", "#666666", "#FF5C5C", "#FFBC49"];
    for (var i = 0; i < this.matches.length; i++) {
      this.matches[i].color = colors[i % colors.length];
    }
    this.matchesReady = true;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background: #209acd;
}

.navbar .navbar-brand {
  margin: 0 auto;
}

.date {
  background-color: #f0f0f0;
}
</style>
