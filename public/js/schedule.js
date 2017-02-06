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

//firebaseに接続して予定一覧を取得し、aタグ用のlinkを作る
var eventList = new Array();
db.ref('events')
  .on('value', function(snapshot) {
    snapshot.forEach(function(child) {
      var val = child.val();
      var event = {
        date: val.date,
        comment: val.comment,
        title: val.title,
        link: 'schedule_detail.html?id=' + child.key
      }
      eventList.push(event);
    })
    console.log(eventList);
  });

new Vue({
  el: '#schedule',
  data: {
    anArray: eventList
  }
})