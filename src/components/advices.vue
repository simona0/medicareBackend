<template>
  <div id="savjeti">
    <div class="jumbotron">
      <h2 class="display-4">Savjeti</h2>
      <p class="lead">Razni korisni savjeti za vaše zdravlje!</p>
    </div>
    <div class="container">
      <div class="card" v-for="(advice) in advices">
        <div class="card-header">{{advice.naslov}}</div>
        <div class="card-body">
          <p>{{advice.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Advices",
  data() {
    return {
      advices: {}
    };
  },
  methods: {
    getAdvices() {
      const path = "http://localhost:5000/savjeti";
      axios
        .get(path)
        .then(({ data }) => {
          this.advices = data.data;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });
    }
  },
  mounted() {
    this.getAdvices();
  }
};
</script>

<style>
</style>