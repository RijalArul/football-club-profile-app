<template>
  <div>
    <div class="card" style="width: 18rem; height: 450px">
      <img
        class="card-img-top"
        alt="Card image cap"
        :src="club.crestUrl"
        style="height: 280px"
      />
      <div class="card-body">
        <p class="card-text">{{ club.name }}</p>
        <button class="btn btn-info" @click.prevent="clickProfile(club.id)">
          Read More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["club"],
  methods: {
    clickProfile(id) {
      this.$router.push({ name: "ProfileClub", params: { id: id } });
    },
  },
};
</script>