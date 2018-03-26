<template>
    <div class="home">
      <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href="#">Krank Club</a>
      </nav>
      <div class="container" v-if="matches">
        <div v-for="(value, key) in groupByDate" v-bind:key="key">
          <p>{{ key }}</p>
          <div v-for="match in value" v-bind:key="match.id">
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
  mounted() {}
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
</style>
