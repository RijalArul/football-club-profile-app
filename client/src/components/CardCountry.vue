<template>
  <div>
    <div class="card" style="width: 18rem; height: 350px">
      <img
        class="card-img-top"
        :src="area.ensignUrl"
        alt="Card image cap"
        style="height: 380px"
      />
      <div class="card-body">
        <p class="card-text">
          {{ area.name }}
        </p>
        <button class="btn btn-info" @click.prevent="clickAllClub(area.id)">
          All Club {{ area.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCountry",
  props: ["area"],
};
</script>