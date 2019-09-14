<template>
  <div class="container">
    <div class="row">
      <div class="jumbotron col-sm-8">
        <h2 style="margin-top:20px">Dobrodošli u kategoriju {{$route.params.category}}</h2>
        <p
          style="text-align:left"
        >Ovdje možete postaviti novo pitanje u vezi vašeg zdravlja ili jednostavno pretražiti već postavljena.</p>
      </div>
      <div class="jumbotron col-sm-4">
        <img src="../static/img/conversation.svg" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <button
          type="button"
          class="btn btn-info newPost"
          data-toggle="modal"
          data-target="#newPostmodal"
        >Postavi pitanje</button>
      </div>
      <div class="col-sm-4">
        <div class="button-group-filter">
          <button
            type="button"
            class="btn btn-secondary"
            style="margin-right:10px;"
          >Najnoviji postovi</button>
          <button type="button" class="btn btn-secondary" style="margin-right:10px;">Najstariji</button>
          <button type="button" class="btn btn-secondary" style="margin-right:10px;">Neodgovoreno</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card border-info">
          <div class="card-header">
            <h3>Tema: {{$route.params.category}}</h3>
            <p>Ukupno pitanja: {{}}</p>
            <br />
            <p>Neodgovorenih pitanja: {{korisnik}}</p>
          </div>
          <div v-for="(post, i) in posts" :key="i">
            <div class="card border-info sub-card" v-if="$route.params.id == post.kategorija_id">
              <div class="card-header">
                <h4>{{post.naslov}}</h4>
              </div>
              <div class="card-body">
                <p class="card-text">{{post.text}}</p>
                <button
                  type="button"
                  class="btn btn-light"
                  data-toggle="modal"
                  data-target="#editPostModal"
                  v-if="!post.odgovor.length"
                  @click="dodajOdgovor(post)"
                >Odgovori</button>
                <div class="card sub-card" v-if="post.odgovor.length">
                  <div class="card-body">
                    <div class="card-text">Odgovor: {{post.odgovor}}</div>
                  </div>
                  <div class="card-footer text-muted">
                    Odgovoreno: {{post.created_odgovor}}
                    <br />
                    Na upit odgovorio: dr. med {{post.doktor}}
                  </div>
                </div>
              </div>
              <div class="card-footer text-muted">Pitanje objavljeno: {{post.created}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" tabindex="-1" role="dialog" id="newPostmodal" ref="addPostModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Novi upit</h5>
            <div class="badge">
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                disabled
              >{{$route.params.category}}</button>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <alert :message="message" v-if="showMessage"></alert>
            <form onsubmit="onSubmit()" v-if="show">
              <div class="form-group">
                <label for="exampleInputEmail1">Naslov</label>
                <input type="text" v-model="postForm.naslov" class="form-control" id="naslov" />
              </div>
              <div class="form-group">
                <label
                  for="tekst"
                >Što sadržajnije probajte opisati vaš problem kako bi Vam mogli pomoći</label>
                <textarea class="form-control" v-model="postForm.text" id="tekst" rows="3"></textarea>
              </div>
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Odustani</button>
                <button type="submit" class="btn btn-info" v-on:click.stop.prevent="onSubmit">Objavi</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" tabindex="-1" role="dialog" id="editPostModal" ref="editPostModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Odgovor</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <alert :message="message" v-if="showMessage"></alert>
            <form @submit="onSubmitOdgovor" v-if="show">
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Odgovor</label>
                <textarea class="form-control" rows="3" v-model="odgovorForm.odgovor"></textarea>
              </div>
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Odustani</button>
                <button type="submit" class="btn btn-info">Objavite odgovor</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Alert from "./Alert.vue";

export default {
  name: "Category",
  data() {
    return {
      posts: {},
      korinsik: {},
      show: true,
      message: "",
      selectedCategory: "",
      isResponded: false,
      showResponse: false,
      newposthidden: false,
      showMessage: false,
      Response: {},
      postForm: {
        id: "",
        naslov: "",
        text: "",
        odgovor: "",
        doktor: ""
      },
      odgovorForm: {
        id: "",
        naslov: "",
        odgovor: "",
        doktor: ""
      }
    };
  },
  components: {
    alert: Alert
  },
  methods: {
    dohvatiUpite() {
      const path = "http://localhost:5000/upit";
      axios
        .get(path)
        .then(({ data }) => {
          this.posts = data.data;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    dodajUpit(payload) {
      const path = "http://localhost:5000/upit";
      axios
        .post(path, payload)
        .then(() => {
          this.dohvatiUpite();
          this.message =
            "Upit dodan! Biti ćete obaviješteni u trenutku kada doktor odgovori";
          this.showMessage = true;
          this.show = false;
          window.location.reload();
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error);
          this.dohvatiUpite();
        });
    },
    initForm() {
      this.postForm.naslov = "";
      this.postForm.text = "";
      this.postForm.doktor = "";
      this.odgovorForm.odgovor = "";
      this.odgovorForm.id = "";
      this.odgovorForm.doktor = "";
    },
    onSubmit(evt) {
      evt.preventDefault();
      const payload = {
        naslov: this.postForm.naslov,
        text: this.postForm.text,
        kategorija: this.$route.params.category,
        kategorija_id: this.$route.params.id
      };
      this.dodajUpit(payload);
      //alert(JSON.stringify(payload));
      this.initForm();
    },
    dodajOdgovor(post) {
      this.odgovorForm = post;
    },
    onSubmitOdgovor(evt) {
      evt.preventDefault();
      const payload = {
        odgovor: this.odgovorForm.odgovor,
        doktor: this.trenutniKorisnik(),
        id: this.odgovorForm.id
      };
      this.azurirajUpit(payload);
    },
    azurirajUpit(payload) {
      const path = "http://localhost:5000/upit/";
      axios
        .put(path + this.odgovorForm.id, payload)
        .then(() => {
          this.dohvatiUpite();
          this.message = "Uspješno ste odgovorili pacijentu.";
          this.showMessage = true;
          this.show = false;
          window.location.reload();
        })
        .catch(error => {
          console.error(error);
          this.dohvatiUpite();
        });
    },
    trenutniKorisnik() {
      let korisnik = this.$cookie.get("MedicareLogin");
      if (korisnik != null) {
        korisnik = JSON.parse(korisnik);
        this.korisnik = korisnik.ime;
        return this.korisnik;
      }
    }
  },

  created() {
    this.dohvatiUpite();
  }
};
</script>

<style>
.card {
  text-align: left;
  width: 100%;
  margin: 10px;
}
.card-body {
  text-align: left;
}

.card .sub-card {
  width: 95%;
}

.newPost {
  float: left;
}

.badge {
  margin-left: 180px;
}

label {
  float: left;
}

#welcome-text {
  text-align: left;
}

#forum {
  margin-top: 40px;
  margin-bottom: 50px;
}

.card-footer {
  font-size: 12px;
  font-weight: bold;
}
</style>