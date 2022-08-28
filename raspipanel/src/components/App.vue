<template>
  <div class="pt-10 px-10 flex flex-row justify-between">
    <div>
      <v-btn class="w-24 text-black"
      elevation="2"
      v-on:click=goto(sports)>
      
      Sports
      </v-btn >
    </div>

    <div>
      <v-btn class="w-24 text-black"
      elevation="2"
      >
      News
      </v-btn >
    </div>

    <div>
      <v-btn class="w-24 text-black"
      elevation="2"
      >
      Bitcoin
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
    goto(route) {
      this.window.href=route;
    }
  },
};
</script>

<style>

</style>
