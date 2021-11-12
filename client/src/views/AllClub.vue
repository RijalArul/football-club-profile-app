<template>
  <div class="home">
    <section class="bg-light py-4 my-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="mb-3 text-danger">All Club</h2>
          </div>

          <div
            class="col-md-6 col-lg-4 mt-5"
            v-for="club in clubs"
            :key="club.name"
          >
            <CardAllClub :club="club" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardAllClub from "../components/CardAllClub.vue";
export default {
  name: "AllClub",
  props: ["club"],
  components: {
    CardAllClub,
  },
  computed: {
    clubs() {
      return this.$store.state.clubs;
    },
  },
  methods: {
    fetchAllClub() {
      this.$store.dispatch("actionFetchAllClub", this.$route.params.id);
    },
  },
  created() {
    this.fetchAllClub();
  },
};
</script>
