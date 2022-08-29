<template>
<div>
    <div class="flex flex-row justify-center">

        <v-btn href="/">Back</v-btn>
        <img class="h-40" src="https://bitcoin.org/img/icons/opengraph.png?1660986466" />
    </div>
    <div class="pt-12 flex flex-row justify-evenly text-3xl">
    <div>
        BTC: ${{results["BTC"].USD}}
    </div>
    <div>
        ETH: ${{results["ETH"].USD}}
    </div>
    <div>
        DOGE: ${{results["DOGE"].USD}}
    </div>
  </div>
</div>

</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data: () => ({
    results: [],
    CryptocurrencyList: ["BTC","ETH","DOGE"],
    CoinsList: ["USD","EUR"],
    newCoin: null,
    newCryptocurrency: null,
    url: null
  }),
//BTC,ETH,BNB,ADA,XRP,DOGE,DOT,UNI,BCH,LTC,LINK,USDT
    mounted() {
        this.update();
        this.timer = setInterval(this.update, 1000);
    },
    methods: {
        update: function () {
            this.url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${this.CryptocurrencyList}&tsyms=${this.CoinsList}`
            axios
        .get(
          this.url
        )
        .then((response) => {
          this.results = response.data;
        });
        }
    }
};
</script>