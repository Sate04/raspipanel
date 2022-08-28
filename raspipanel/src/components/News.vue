<template>
    <div class="flex flex-col flex-center">
        <v-btn href="/">Back</v-btn>
        <div class="grid grid-flow-row grid-cols-3 gap-4">
            <div v-for="article in results.articles" :key="article" class="p-3">
                <img class="h-96" v-on:click="goto(article.url)" :src="article.urlToImage"/>
                <a class="font-bold" :href="article.url">{{ article.title }}</a>
                <p class="pt-2">&nbsp;&nbsp;&nbsp;&nbsp;{{article.content}}</p>
            </div>
        </div>
        <img class="h-[300px]" src="https://i.kym-cdn.com/photos/images/original/002/237/978/0d1.jpg" />


    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data: () => ({
    results: null,
  }),
    mounted() {
        this.update();
        this.timer = setInterval(this.update, 100000);
    },
    methods: {
        update: function () {
            this.url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.VUE_APP_NEWS}`
            axios
        .get(
          this.url
        )
        .then((response) => {
          this.results = response.data;
          this.results.articles = this.results.articles.filter(function(article){
            return article.urlToImage !== null;
          });
        });       
        },
        goto(url){
            console.log(url)
            window.location = url;
        }
    }
};
</script>