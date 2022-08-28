import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {ref, onUnmounted} from "vue";

const firebaseConfig = {
	apiKey: "AIzaSyAMgh-oHI4jvo-vBsvWuB98wHYB2M3QeTA",
	authDomain: "calendar-5dc17.firebaseapp.com",
	databaseURL: "https://calendar-5dc17-default-rtdb.firebaseio.com",
	projectId: "calendar-5dc17",
	storageBucket: "calendar-5dc17.appspot.com",
	messagingSenderId: "151706105579",
	appId: "1:151706105579:web:b2e4d33f03d08dd72830ae",
	measurementId: "G-YB4GYQRF5J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const events = db.collection("events");

export const createEvent = event => {
	return events.add(event);
};

export const getEvent = async id => {
	const event = await events.doc(id).get();
	return event.exists ? event.data() : null;
};

export const deleteEvent = id => {
	return events.doc(id).delete();
};

export const useLoadEvents = () => {
	const events = ref([]);
	const close = events.onSnapshot(snapshot => {
		events.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
	});
	onUnmounted(close);
	return events;
};
