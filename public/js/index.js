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
var eventList = new Array();

//firebaseに接続して予定一覧を取得し、aタグ用のlinkを作る
db.ref('events')
  .on('value', function(snapshot) {
    snapshot.forEach(function(child) {
      var val = child.val();
      var event = {
        date: val.date,
        comment: val.comment,
        title: val.title,
        link: 'event.html?id=' + child.key
      }
      eventList.push(event);
    })
    console.log(eventList);
  });

new Vue({
  el: '#events',
  data: {
    anArray: eventList
  }
})