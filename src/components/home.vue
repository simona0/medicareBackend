<template>
  <div id="home">
    <div class="jumbotron">
      <h2 class="display-4">Izbornik</h2>
      <p class="lead">Specijalizacija po kategorijama</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="card" v-for="(kategorija, i) in kategorije" :key="i">
          <div class="card-body">
            <img src="../static/img/medicalfolder.svg" />
          </div>
          <button
            @click="$router.push({name: 'category', params: {id: kategorija.id, category: kategorija.naziv}})"
            type="button"
            class="btn btn-info"
          >{{kategorija.naziv}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  props: {
    categories: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      show: true,
      kategorije: {},
      data: {
        id: "",
        naziv: ""
      }
    };
  },
  methods: {
    dohvatiKategorije() {
      const path = "http://localhost:5000/kategorija";
      axios
        .get(path)
        .then(({ data }) => {
          this.kategorije = data.data;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });
    }
  },
  created() {
    this.dohvatiKategorije();
  }
};
</script>

<style>
.card {
  width: 50%;
}
.card-body {
  text-align: center;
}
img {
  width: 80px;
  align-content: center;
}
.jumbotron {
}
</style>