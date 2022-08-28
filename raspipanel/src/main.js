import Vue from "vue";
import App from "./components/App.vue";
import Sports from "./components/Sports.vue";
import vuetify from "./plugins/vuetify";
import "./main.css";

Vue.config.productionTip = false;

const NotFound = {template: "<p>Page not found</p>"};

const routes = {
	"/": App,
	"/sports": Sports,
};

new Vue({
	el: "#app",
	vuetify,
	data: {
		currentRoute: window.location.pathname,
	},
	computed: {
		ViewComponent() {
			return routes[this.currentRoute] || NotFound;
		},
	},
	render(h) {
		return h(this.ViewComponent);
	},
});
