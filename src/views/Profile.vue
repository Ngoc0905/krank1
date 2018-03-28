<template>
	<div class="profile">
		<nav class="navbar navbar-expand-lg fixed-top navbar-dark">
			<a href="#" class="back-btn">
				<i class="fas fa-arrow-left"></i>
			</a>
			<div class="search-box">
				<i class="fas fa-search"></i>
				<input type="text" v-model="searchText">
			</div>
			<a href="#" class="tools-btn">
				<i class="fas fa-cubes"></i>
			</a>
		</nav>
		<div class="cover-photo"></div>
	</div>
</template>

<script>
export default {
  name: "Profile",
  props: {},
  data() {
    return {
			searchText: "Christophe N'Guyen",
      user: {
        lastName: "N'Guyen",
        firstName: "Christophe",
        participated: 14,
        organized: 5,
        average: 7.2,
        mainSport: "Football",
        timeFavorite: {
          date: [0, 2, 3, 4],
          hour: [19, 23]
        },
        placeFavorite: ["UrbanSoccer Creteil", "Le Five Paris"],
        partners: [],
        otherSports: []
      }
    };
	},
	computed: {
		fullName: function(){
			return `${this.user.firstName} ${this.user.lastName}`;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background: #209acd;
	display: flex;
	padding: .5rem 0;
}

.navbar a {
	flex: 0 0 50px;
  color: #fff;
	text-align: center;
}

.navbar .search-box {
	flex: 1;
	position: relative;
}

.navbar .search-box svg {
	z-index: 1;
	position: absolute;
	top: 8px;
	left: 8px;
	color: #E2EFF4;
}

.navbar .search-box input {
	width: 100%;
	height: 30px;
	padding-left: 30px;
	background-color: #0C77A4;
	border:none;
	color: #90C2D6;
}

.navbar .search-box input:active,
.navbar .search-box input:focus {
	outline: none;
}
</style>
