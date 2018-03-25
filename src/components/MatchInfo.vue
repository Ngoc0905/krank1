<template>
    <div class="match-info">
        <h2>{{ fullName }}</h2>
    </div>
</template>

<script>
export default {
  name: "MatchInfo",
  props: {
    match: null
  },
  mounted() {},
  computed: {
      fullName() {
          return `${this.match.user.firstName} ${this.match.user.lastName}`
      }
  }
};
</script>

<style scoped>

</style>
