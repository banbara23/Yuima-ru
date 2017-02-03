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
  el: '#events',
  firebase: {
    anArray: db.ref('events')
  }
})

// イベント登録
var vueWriteEvent = new Vue({
  el: '#event-insert',
  data: {
    date: '',
    title: '',
    comment: ''
  },
  firebase: {
    members: db.ref('events')
  },
  methods: {
    addEvent: function() {
      this.$firebaseRefs.members.push('', {
        date: this.date,
        title: this.title,
        comment: this.comment
      })
    }
  }
})