<template>
  <div id="savjeti">
    <div class="jumbotron">
      <h2 class="display-4">Profil</h2>
      <p class="lead">Detalji profila</p>
    </div>
    <div class="container">
      <form>
        <fieldset disabled>
          <div class="form-group row">
            <label for="staticIme" class="col-sm-2 col-form-label">Ime:</label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control"
                id="staticIme"
                name="profil.ime"
                :value="profil.ime"
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="staticPrezime" class="col-sm-2 col-form-label" v-on="currentUser()">Prezime:</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                readonly
                id="staticPrezime"
                name="profil.prezime"
                :value="profil.prezime"
                disabled
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label" v-on="currentUser()">Email:</label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                readonly
                id="staticEmail"
                name="profil.email"
                :value="profil.email"
                disabled
              />
            </div>
          </div>
          <div class="form-group row">
            <label
              for="staticSpecijalnost"
              class="col-sm-2 col-form-label"
              v-on="currentUser()"
            >Specijalizacija:</label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                readonly
                id="staticSpecijalnost"
                name="profil.specijalnost"
                :value="profil.specijalnost"
                disabled
              />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profil: {
        ime: "",
        prezime: "",
        korisnickoIme: "",
        email: "",
        specijalnost: ""
      }
    };
  },
  methods: {
    currentUser: function() {
      var ime = JSON.parse(localStorage.getItem("auth")).ime;
      var prezime = JSON.parse(localStorage.getItem("auth")).prezime;
      var korisnickoIme = JSON.parse(localStorage.getItem("auth"))
        .korisnickoIme;
      var email = JSON.parse(localStorage.getItem("auth")).email;
      var specijalnost = JSON.parse(localStorage.getItem("auth")).specijalnost;

      this.profil.ime = ime;
      this.profil.prezime = prezime;
      this.profil.email = email;
      this.profil.specijalnost = specijalnost;
      this.profil.korisnickoIme = korisnickoIme;

      return ime, prezime, korisnickoIme, email, specijalnost;
    }
  }
};
</script>

<style>
.container {
  align: center;
}
</style>