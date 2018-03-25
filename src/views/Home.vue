<template>
    <div class="home">
        <nav class="navbar navbar-expand-lg navbar-dark">
          	<a class="navbar-brand" href="#">Krank Club</a>
        </nav>
		<div class="container" v-if="matches">
			<div v-for="match in matches" v-bind:key="match.id">
				<MatchInfo v-bind:match="match"/>
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
  mounted() {
    
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
</style>
