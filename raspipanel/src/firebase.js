import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

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

export default firebase.initializeApp(firebaseConfig);
