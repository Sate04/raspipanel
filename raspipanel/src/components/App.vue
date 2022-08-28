<template>
  <div class="pt-10 px-10 flex flex-row justify-between">
    <div>
      <v-btn class="w-36 text-black"
      elevation="2"
      href="/sports"
      >
      Sports
      
      </v-btn >
    </div>

    <div>
      <v-btn class="w-36 text-black"
      elevation="2"
      href="/news"
      >
      News
      </v-btn >
    </div>

    <div>
      <v-btn class="w-36 text-black"
      elevation="2"
      href="/crypto"
      >
      Cryptocurrency
      </v-btn >

    </div>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    gotoSports() {
      this.window.location.href="/sports";
    }
  },
};
</script>

<style>

</style>
