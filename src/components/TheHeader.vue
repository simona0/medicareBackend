<template>
  <div class="header nav">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg bg-info text-uppercase fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="/">Medicare</a>
        <button
          class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/">Izbornik</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a
                class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="/advices"
              >Savjeti</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a
                class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="/profil"
              >Moji podaci</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a
                class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="/contacts"
              >Kontakti</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a
                class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="/sign-up"
              >Registracija</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/login">Prijava</a>
            </li>
            <li class="nav-item dropdown mx-0 mx-lg-1">
              <a
                class="nav-link dropdown-toggle py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="/profil"
                data-toggle="dropdown"
              >Dobrodošao {{korisnik.ime}}</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/">Odjava</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      korisnik: {}
    };
  },
  methods: {
    trenutniKorisnik() {
      let korisnik = this.$cookie.get("MedicareLogin");
      if (korisnik != null) {
        korisnik = JSON.parse(korisnik);
        this.korisnik = korisnik;
      }
    },
    logout() {
      this.$cookie.delete("MedicareLogin");
      this.$router.push({ name: "Login" });
      this.trenutniKorisnik();
    }
  },
  beforeMount() {
    this.trenutniKorisnik();
  }
};
</script>

<style>
h1 {
  padding: 40px;
}
.bg-primary {
  background-color: #7fdeff !important;
}

.nav-link {
  color: white;
}

.navbar-brand {
  color: white;
}
</style>