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
            <div class="card" style="width: 18rem; height: 450px">
              <img
                class="card-img-top"
                alt="Card image cap"
                :src="club.crestUrl"
                style="height: 280px"
              />
              <div class="card-body">
                <p class="card-text">{{ club.name }}</p>
                <button
                  class="btn btn-info"
                  @click.prevent="clickProfile(club.id)"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AllClub",
  computed: {
    clubs() {
      return this.$store.state.clubs;
    },
  },
  methods: {
    fetchAllClub() {
      this.$store.dispatch("actionFetchAllClub", this.$route.params.id);
    },
    clickProfile(id) {
      this.$router.push({ name: "ProfileClub", params: { id: id } });
    },
  },
  created() {
    this.fetchAllClub();
  },
};
</script>
