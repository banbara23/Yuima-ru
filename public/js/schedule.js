// Initialize Firebase
var config = {
    apiKey: "AIzaSyA0guptgPg4DYx7897UCNRZj9ltDBjLCw8",
    authDomain: "yuima-ru.firebaseapp.com",
    databaseURL: "https://yuima-ru.firebaseio.com",
    storageBucket: "yuima-ru.appspot.com",
    messagingSenderId: "496769769191"
};
firebase.initializeApp(config);

var db = firebase.database()

var vueReadEvent = new Vue({
    el: '#schedule',
    firebase: {
        anArray: db.ref('schedules')
    }
})
