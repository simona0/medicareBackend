<template>
  <div id="savjeti">
    <div class="jumbotron">
      <h2 class="display-4">Kontakti</h2>
      <p class="lead">Pronađite vašeg doktora te njihove kontakt podatke</p>
    </div>

    <div class="container">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Specijalizacija</th>
            <th scope="col">Ime</th>
            <th scope="col">Prezime</th>
            <th scope="col">E-mail</th>
          </tr>
        </thead>
        <tbody v-for="(user) in users">
          <tr>
            <td>{{user.specijalnost}}</td>
            <td>{{user.ime}}</td>
            <td>{{user.prezime}}</td>
            <td>{{user.email}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Contatcs",
  data() {
    return {
      users: {}
    };
  },
  methods: {
    getUsers() {
      const path = "http://localhost:5000/sign-up";
      axios
        .get(path)
        .then(({ data }) => {
          this.users = data.data;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });
    }
  },
  mounted() {
    this.getUsers();
  }
};
</script>

<style>
</style>