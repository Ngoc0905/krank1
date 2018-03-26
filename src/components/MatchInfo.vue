<template>
    <div class="match-info">
        <div class="row flex-nowrap">
            <div class="col-4 timestamp">
                <div class="hour">
                    {{ match.time | hour }}
                </div>
                <div class="date">
                    {{ match.time | date }}
                </div>
                <div class="favorite-check">
                    <i class="far fa-star"></i>
                </div>
            </div>
            <div class="col-8 match-detail">
                <div class="row">
                    <div class="col-12 match-label">
                        {{ formattedLabel }}
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        <div class="tags-container">
                            <span v-for="tag in match.tags" v-bind:key="tag">#{{ tag }}</span>
                        </div>
                        <div class="user-name">
                            {{ fullName }}
                        </div>
                        <div class="others-info">
                            <span>{{ match.price }}</span>
                            <span>{{ formattedDuration }}</span>
                        </div>
                    </div>
                    <div class="col-4 user-photo">
                        <img src="http://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small-150x150.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "MatchInfo",
  props: {
    match: null
  },
  mounted() {},
  filters: {
    hour: function(date) {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours > 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      return `${hours}.${minutes} ${ampm}`;
    },
    date: function(date) {
      const dates = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return `${dates[date.getDay()]}.${date.getDate()}`;
    }
  },
  computed: {
    fullName() {
      return `${this.match.user.firstName} ${this.match.user.lastName}`;
    },
    formattedDuration() {
      return (
        Math.floor(this.match.duration / 60) + "h" + this.match.duration % 60
      );
    },
    formattedLabel() {
      return `${this.match.sport} - ${this.match.label}`;
    }
  }
};
</script>

<style scoped>
.match-info > .row {
  height: 100px;
  background-color: #f4f4f4;
}

.timestamp {
  max-width: 120px;
  background-color: #37b76a;
  color: #fff;
  font-weight: 700;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.timestamp > div {
  margin-bottom: 10px;
}

.timestamp .hour {
  font-size: 1.2rem;
}

.timestamp .date {
  font-size: 0.8rem;
}

.timestamp .favorite-check {
  font-size: 1.2rem;
}

.match-detail {
    color: #646464;
}

.match-detail .row > div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.match-detail .match-label {
    font-weight: 700;
}

.match-detail .tags-container span {
    margin-right: 5px;
    color: #A5A5A5;
}

.match-detail .user-photo {
    min-width: 60px;
    display: flex;
    align-items: flex-end;
    padding-bottom: 5px;
}

.match-detail .user-photo img {
    width: 100%;
    border-radius: 50%;
}
</style>
