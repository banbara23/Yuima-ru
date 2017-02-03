// urlからパラメータを取得
var urlParam = location.search.substring(1);
var param = urlParam.split('&');
var paramArray = [];
for (i = 0; i < param.length; i++) {
  var paramItem = param[i].split('=');
  paramArray[paramItem[0]] = paramItem[1];
}
console.log(paramArray)

// テーブルは以下の構成
// schedules
// 	　date
// 	　members
// 		name
// 		status
// 		comment

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
    anArray: db.ref('events')
  }
})
var members;
db.ref('memvers')
  .on('value', function(snapshot) {
    snapshot.forEach(function(child) {
      var val = child.val();
      var event = {
        date: val.date,
        comment: val.comment,
        title: val.title,
        link: 'event.html?id=' + child.key
      }
      members = {
        key: child.key,
        name: child.name
      }
    })

    console.log(snapshot);
  });