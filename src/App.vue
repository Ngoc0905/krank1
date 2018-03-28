<template>
  <div class="container-fluid">
    <router-view />
    <div class="footer">
      <div class="profile-container">
        <i class="fas fa-user-circle"></i>
        <span>Profile</span>
      </div>
      <div class="nav-button">
        <button class="plus-btn-container">
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="matches-container active">
        <i class="far fa-calendar-alt"></i>
        <span>Matches</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container-fluid {
  padding: 0;
}
</style>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  height: 70px;
  width: 100%;
  background-color: #f0f0f0;
  border-top: 4px solid #1f98ce;
  z-index: 1;
  display: flex;
}

.footer > div {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #a8a8a8;
  font-size: 1.5rem;
}

.footer > div.active {
  color: #41a6d3;
}

.footer > div.nav-button {
  font-size: 2rem;
}

.footer > div.nav-button .plus-btn-container{
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #41a6d3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -70px;
  color: #fff;
  border: 2px solid #E0E0E0;
  outline: none;
}

.footer > div span {
  font-size: 0.8rem;
}
</style>

