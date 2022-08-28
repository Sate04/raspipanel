<template>
    <div>
        <div>
            <v-calendar
                ref="calendar"
                v-model="value"
                :weekdays="weekday"
                :type="type"
                :events="events"
                :event-overlap-mode="mode"
                :event-overlap-threshold="30"
                class="h-screen"
            />
        </div>
        <div class="flex flex-row">
            <div class="flex flex-col">
                <div>
                    <v-btn v-on:click="newEvent">
                    Add Event
                    </v-btn>
                </div>
                <div>
                    <div>
                        Name: <input class="border-2" v-model="newName"/>
                    </div>
                    <div>
                        Start: <input v-model="newStart"/>
                    </div>
                    <div>
                        End: <input v-model="newEnd"/>
                    </div>
                    <div>
                        Color: <input v-model="newColor"/>
                    </div>
                </div>
                
            </div>
            <div class="flex flex-col">
                <div>
                    <v-btn v-on:click="deleteEvent">
                    Remove Event
                    </v-btn>
                </div>
                <div>
                    <div>
                        Name: <input class="border-2" v-model="deleteName"/>
                    </div>
                </div>
                
            </div>

        </div>

    </div>

</template>

<script>
import firebase from '../firebase.js'
const db = firebase.firestore();

  export default {
    data: () => ({
        newName: null,
        newStart: null,
        newEnd: null,
        newColor: null,
        deleteName: null,
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
      events: [],

    }),
    methods: {
        async newEvent(){
            let data = {
                name: this.newName,
                start: this.newStart,
                end: this.newEnd,
                color: this.newColor
            }

            db.collection("events").doc(this.newName).set(data)

            this.events.push(data)
        },
        deleteEvent(){
            try {
                db.collection("events").doc(this.deleteName).delete()
                this.events = this.events.filter(data => data.name != this.deleteName)
            } catch {
                console.log("Event not found")
            }
        }
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