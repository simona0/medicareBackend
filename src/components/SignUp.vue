<template>
  <div class="container">
    <div class="row">
      <div class="jumbotron col-sm-8">
        <h2>Registracija</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <alert :message="message" v-if="showMessage"></alert>
        <form
          onsubmit="Register()"
          name="sentMessage"
          v-if="show"
          id="contactForm"
          novalidate="novalidate"
        >
          <div class="control-group">
            <div class="form-group floating-label-form-group controls mb-0 pb-2">
              <label>Ime</label>
              <input
                class="form-control"
                id="name"
                type="text"
                v-model="form.ime"
                placeholder="Ime"
                required="required"
                data-validation-required-message="Please enter your name."
              />
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls mb-0 pb-2">
              <label>Prezime</label>
              <input
                class="form-control"
                id="surname"
                v-model="form.prezime"
                type="text"
                placeholder="Prezime"
                required="required"
                data-validation-required-message="Please enter your name."
              />
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls mb-0 pb-2">
              <label>Email Address</label>
              <input
                class="form-control"
                id="email"
                type="email"
                v-model="form.email"
                placeholder="Email Adresa"
                required="required"
                data-validation-required-message="Please enter your email address."
              />
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls mb-0 pb-2">
              <label>Lozinka</label>
              <input
                class="form-control"
                id="password"
                type="password"
                v-model="form.lozinka"
                placeholder="Lozinka"
                required="required"
                data-validation-required-message="Please enter your phone number."
              />
              <p class="help-block text-danger"></p>
            </div>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Odaberite Vašu specijalizaciju</label>
            <select class="form-control" id="exampleFormControlSelect1" v-model="form.specijalnost">
              <option>Uho,grlo,nos</option>
              <option>Mozak i živćani sustav</option>
              <option>Kosti i mišićni sustav</option>
              <option>Probavni sustav</option>
              <option>Pluća i dišni sustav</option>
              <option>Mokraćni i spolni organi</option>
              <option>Srce i krvožilni sustav</option>
              <option>Alergije</option>
            </select>
          </div>
          <br />
          <div id="success"></div>
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-info btn-xl"
              v-on:click.stop.prevent="Register"
            >Registracija</button>
          </div>
        </form>
        <button
          to="/login"
          type="button"
          class="btn btn-link"
        >Već ste postojeći korisnik? Prijavite se</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Alert from "./Alert.vue";

export default {
  name: "SignUp",
  components: {
    alert: Alert
  },
  data() {
    return {
      users: {},
      form: {
        ime: "",
        prezime: "",
        lozinka: "",
        email: "",
        specijalnost: ""
      },
      showMessage: false,
      show: true
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
    },
    addUser(payload) {
      const path = "http://localhost:5000/sign-up";
      axios
        .post(path, payload)
        .then(() => {
          this.getUsers();
          this.message =
            "Čestitamo, uspješno ste se registrirali na Medicare portal!";
          this.showMessage = true;
          this.show = false;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error);
          this.getUsers();
        });
    },
    initForm() {
      this.form.ime = "";
      this.form.prezime = "";
      this.form.email = "";
      this.form.lozinka = "";
      this.form.tipKorisnika = "";
      this.form.specijalnost = "";
    },
    Register(evt) {
      evt.preventDefault();
      const payload = {
        ime: this.form.ime,
        prezime: this.form.prezime,
        email: this.form.email,
        lozinka: this.form.lozinka,
        tipKorisnika: this.form.tipKorisnika,
        specijalnost: this.form.specijalnost
      };
      this.addUser(payload);
      this.initForm();
    },
    created() {
      this.getUsers();
    }
  }
};
</script>

<style>
</style>