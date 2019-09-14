<template>
  <div class="headernav">
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
                href="/savjeti"
              >Savjeti</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a
                class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="/mojiPodaci"
              >Moji podaci</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a
                class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="/kontakti"
              >Kontakti</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/about">O nama</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a
                class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="/sign-up"
              >Registracija</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header class="masthead bg-primary text-white text-center">
      <div class="container d-flex align-items-center flex-column">
        <!-- Masthead Avatar Image -->

        <!-- Masthead Heading -->
        <h1 class="masthead-heading text-uppercase mb-0" style="font-size: 120px;">Medi Care</h1>
        <h3>Your Health Guide</h3>
        <!-- Icon Divider -->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <!-- Masthead Subheading -->

        <p class="masthead-subheading font-weight-light mb-0">Besplatna aplikacija</p>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
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