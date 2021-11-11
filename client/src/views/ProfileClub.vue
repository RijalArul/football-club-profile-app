<template>
  <div>
    <div class="container mt-5">
      <img
        :src="club.crestUrl"
        class="rounded float-start"
        alt="..."
        style="height: 350px"
      />
      <div class="float-right">
        <h3>{{ club.name }}</h3>
        <p>{{ club.founded }}</p>
        <p>{{ club.website }}</p>
        <p>{{ club.venue }}</p>
      </div>

      <div style="margin-top: 290px">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Nationality</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(teamSquad, i) in squad" :key="teamSquad.id">
              <th scope="row">{{ i + 1 }}</th>
              <td>{{ teamSquad.name }}</td>
              <td>{{ teamSquad.position }}</td>
              <td>{{ teamSquad.nationality }}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  {{ teamSquad.name }}
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          {{ teamSquad.name }}
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="float-right">
                          <h5>Club : {{ club.name }}</h5>
                          <h5>Position : {{ teamSquad.position }}</h5>
                          <h5>Nationality : {{ teamSquad.nationality }}</h5>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          data-dismiss="modal"
                          class="btn btn-primary"
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    club() {
      return this.$store.state.club;
    },

    squad() {
      return this.$store.state.squad;
    },
  },
  methods: {
    fetchClub() {
      this.$store.dispatch("actionProfileClub", this.$route.params.id);
    },
  },
  created() {
    this.fetchClub();
  },
};
</script>