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
		<div class="cover-photo">

		</div>
		<div class="user-profile-name">
			<div class="profile-photo">
				<img src="http://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small-150x150.jpg" alt="">
			</div>
			<div class="name">{{ fullName }}</div>
		</div>
		<div class="main-scores">
			<div class="played-matches-score">
				<span class="green-color bold">{{ user.participated }}</span>
				<span>joués</span>
			</div>
			<div class="sport-score">
				<span class="bold hexagon">{{ user.average }}</span>
				<span class="green-color bold">{{ user.mainSport }}</span>
			</div>
			<div class="organized-score">
				<span class="green-color bold">{{ user.organized }}</span>
				<span>organisés</span>
			</div>
		</div>
		<div class="user-favorites">
			<div class="label">
				<span>Créneaux favoris</span>
			</div>
			<div class="time">
				<div class="days-container">
					<span v-for="(day, index) in weekdays" :key="`day-${index}`" :class="{'active': user.timeFavorite.date.indexOf(index) !== -1}">{{ day }}</span>
				</div>
				<div class="hour-container">
					<span>{{ hourFavorite }}</span>
				</div>
			</div>
			<div class="label">
				<span>Spots favoris</span>
			</div>
			<div class="places">
				<span>{{ placesFavorite }}</span>
			</div>
		</div>
		<div class="partners">
			<div class="label">
				<span>{{ user.partners.length }} partenaires</span>
			</div>
			<div class="partners-img-container">
				<div class="partner-img" v-for="partner in user.partners" :key="partner.id">
					<img src="http://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small-150x150.jpg" alt="">
				</div>
			</div>
		</div>
		
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
        partners: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
          { id: 9 }
        ],
        otherSports: []
      },
      weekdays: ["L", "M", "M", "J", "V", "S", "D"]
    };
  },
  computed: {
    fullName: function() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
    hourFavorite: function() {
      return `${this.user.timeFavorite.hour[0]}h-${
        this.user.timeFavorite.hour[1]
      }h`;
    },
    placesFavorite: function() {
      return this.user.placeFavorite.join(" / ");
    }
  }
};
</script>

<style scoped>
.navbar {
  background: #209acd;
  display: flex;
  padding: 0.5rem 0;
  height: 56px;
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
  color: #e2eff4;
}

.navbar .search-box input {
  width: 100%;
  height: 30px;
  padding-left: 30px;
  background-color: #0c77a4;
  border: none;
  color: #90c2d6;
}

.navbar .search-box input:active,
.navbar .search-box input:focus {
  outline: none;
}

main {
  margin-top: 46px;
}

.cover-photo {
  height: 80px;
  background-color: #ccc;
}

.user-profile-name {
  display: flex;
  padding: 0 15px;
}

.user-profile-name .profile-photo {
  flex: 0 0 80px;
  margin-top: -40px;
}

.user-profile-name .profile-photo img {
  width: 100%;
  border-radius: 50%;
  border: 2px solid #fff;
}

.user-profile-name .name {
  margin-left: 10px;
  font-size: 1.25rem;
}

.main-scores {
  display: flex;
  padding: 15px;
}

.main-scores > div {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.main-scores .green-color {
  color: #1b9249;
}

.main-scores .bold {
  font-weight: 700;
}

.main-scores > div span:first-child {
  font-size: 1.5rem;
}

.main-scores > div span:last-child {
  text-transform: uppercase;
  margin-top: 15px;
}

.user-favorites {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 15px 25px;
}

.user-favorites .label span {
  font-size: 0.8rem;
  font-weight: bold;
}

.user-favorites .time {
  display: flex;
  font-weight: bold;
  font-size: 1.25rem;
}

.user-favorites .time .days-container {
  flex: 2;
}

.user-favorites .time .days-container span {
  margin-right: 10px;
  opacity: 0.3;
}

.user-favorites .time .days-container span.active {
  opacity: 1;
  color: #1a9148;
}

.user-favorites .time .hour-container {
  flex: 1;
  color: #1a9148;
}

.user-favorites .places {
  color: #21944e;
}

.partners {
	padding: 15px 25px;
}

.partners .partners-img-container {
	display: flex;
	white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.partners .partners-img-container .partner-img {
	margin-right: 5px;
}

.partners .partners-img-container img {
	width: 50px;
	border-radius: 50%;
}

.hexagon {
  position: relative;
  width: 60px;
  height: 34.64px;
  background-color: #1b9249;
  margin: 0 auto;
  color: #fff;
}

.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  left: 0;
}

.hexagon:before {
  bottom: 100%;
  border-bottom: 17.32px solid #1b9249;
}

.hexagon:after {
  top: 100%;
  width: 0;
  border-top: 17.32px solid #1b9249;
}
</style>
