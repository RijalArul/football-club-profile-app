<template>
  <div class="home">
    <section class="bg-light py-4 my-5">
      <div class="container">
        <div
          class="jumbotron"
          style="
            background-image: url(https://akcdn.detik.net.id/community/media/visual/2021/10/23/chelsea-5.jpeg?w=700&q=90);
            height: 650px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
          "
        >
          <h1 class="display-4">Hello, Footbal Europe lLovers!</h1>
          <p class="lead"></p>
          <hr class="my-4" />
          <h3>Welcome To Football App</h3>
        </div>
        <div class="row">
          <div class="col-12">
            <h2 class="mb-3 text-danger">Select Europe Areas</h2>
          </div>

          <div
            class="col-md-6 col-lg-4 mt-5"
            v-for="area in areas"
            :key="area.id"
          >
            <CardCountry :area="area" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardCountry from "../components/CardCountry.vue";
export default {
  name: "Home",
  props: ["area"],
  components: {
    CardCountry,
  },
  created() {
    this.fetchAreas();
  },
  methods: {
    fetchAreas() {
      this.$store.dispatch("actionFetchAreas");
    },
    clickAllClub(id) {
      this.$router.push({ name: "AllClub", params: { id: id } });
    },
  },
  computed: {
    areas() {
      return this.$store.state.areas;
    },
  },
};
</script>
