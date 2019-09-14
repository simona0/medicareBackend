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
          @submit="onSubmit"
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
              <label>Korisničko ime</label>
              <input
                class="form-control"
                id="username"
                type="text"
                placeholder="Korisničko ime"
                required="required"
                data-validation-required-message="Please enter your username"
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
                placeholder="Lozinka"
                required="required"
                data-validation-required-message="Please enter your phone number."
              />
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="korisnik"
              name="customRadio"
              class="custom-control-input"
              value="Korisnik"
              v-model="form.tipKorisnika"
            />
            <label class="custom-control-label" for="korisnik">Registracija kao korisnik</label>
          </div>
          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="doktor"
              name="customRadio"
              class="custom-control-input"
              value="Doktor"
              v-model="form.tipKorisnika"
            />
            <label class="custom-control-label" for="doktor">Registracija kao doktor</label>
          </div>

          <div class="form-group" v-if="form.tipKorisnika === 'Doktor'">
            <label for="exampleFormControlSelect1">Odaberite Vašu specijalizaciju</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <br />
          <div id="success"></div>
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-info btn-xl"
              v-on:click.stop.prevent="onSubmit"
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
  data() {
    return {
      users: {},
      form: {
        ime: "",
        prezime: "",
        lozinka: "",
        email: "",
        korisnickoIme: "",
        tipKorisnika: ""
      },
      showMessage: false,
      show: true
    };
  },
  components: {
    alert: Alert
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
      this.form.korisnickoIme = "";
      this.form.tipKorisnika = "";
    },
    onSubmit(evt) {
      evt.preventDefault();
      const payload = {
        ime: this.form.ime,
        prezime: this.form.prezime,
        email: this.form.email,
        lozinka: this.form.lozinka,
        korisnickoIme: this.form.korisnickoIme,
        tipKorisnika: this.form.tipKorisnika
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