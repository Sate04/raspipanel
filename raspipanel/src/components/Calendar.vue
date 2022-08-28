<template>
    <div>
        <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
      ></v-calendar>
    </div>
</template>

<script>
import firebase from '../firebase.js'
const db = firebase.firestore();

  export default {
    data: () => ({
      type: 'month',
      types: ['month', 'week', 'day', '4day'],
      mode: 'stack',
      modes: ['stack', 'column'],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [
        { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
        { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
        { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
        { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
      ],
      value: '',
      events: [{
        name: 'Test',
        start: '2022-08-01',
        end: '2022-08-03',
        color: '#ff0000',
      }],

    }),
    methods: {

    },
    setup() {

    },
    mounted(){
        db.collection("events").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.events.push(doc.data());
            });
        });
    }
    
}
</script>