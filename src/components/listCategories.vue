<template>
  <div class="container">
    <div v-for="(kategorija, i) in kategorije" :key="i">
      <option>{{kategorija.naziv}}</option>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "listCategories",
  props: ["naziv"],
  data() {
    return {
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
  },
  mounted: function() {
    console.log(this.kategorije);
  }
};
</script>

<style>
</style>