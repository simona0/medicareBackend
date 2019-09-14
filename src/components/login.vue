<template>
  <div id="login">
    <div class="jumbotron">
      <h2 class="display-4">Prijava</h2>
      <p class="lead">Prijavite se na Medicare kao već postojeći korisnik</p>
    </div>
    <div class="container">
      <form>
        <div class="form-group">
          <label for="email">Email adresa</label>
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Unesite vaše korisničko ime"
            v-model="loginForm.email"
            required
          />
        </div>
        <div class="form-group">
          <label for="lozinka">Lozinka</label>
          <input
            type="password"
            class="form-control"
            id="lozinka"
            placeholder="Unesite vašu lozinku"
            v-model="loginForm.lozinka"
            required
          />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-info btn-xl" v-on:click.stop.prevent="login">Prijava</button>
          <DangerAlert :message="message"></DangerAlert>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DangerAlert from "./DangerAlert.vue";

export default {
  name: "login",
  components: {
    DangerAlert: DangerAlert
  },
  data() {
    return {
      loginForm: {
        email: "",
        lozinka: ""
      },
      message: "",
      user: {}
    };
  },
  methods: {
    login(evt) {
      evt.preventDefault();
      let email = this.loginForm.email;
      let lozinka = this.loginForm.lozinka;

      if (email.length && lozinka.length > 0) {
        axios
          .get("http://localhost:5000/login/" + email + "/" + lozinka)
          .then(({ data }) => {
            if (
              data == "Pogrešna lozinka" ||
              data == "Korisnik s tim podacima ne postoji!"
            ) {
              this.message = "Pogrešan email  ili lozinka";
            } else {
              localStorage.setItem("auth", JSON.stringify(data));
              this.user = data;
              this.$root.auth = data;
              this.$cookie.set("MedicareLogin", JSON.stringify(this.user));
              this.$router.push({ name: "home" });
            }
          });
      } else {
        this.message = "Unesite email i lozinku";
      }
    }
  }
};
</script>

<style>
</style>