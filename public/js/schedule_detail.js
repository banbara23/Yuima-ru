// urlからパラメータを取得
var urlParam = location.search.substring(1);
var param = urlParam.split('&');
var params = [];
for (i = 0; i < param.length; i++) {
  var paramItem = param[i].split('=');
  params[paramItem[0]] = paramItem[1];
}


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
// var eventList = new Array();
// db.ref('events/' + params.id)
//   .on('value', function(snapshot) {
//     var id = params.id;
//     var value = snapshot.val();
//     value

//   });

var vm1 = new Vue({
  el: '#schedule',
  data: {
    date: '??/??',
    title: 'title',
    comment: 'comment'
  }
  // ,  firebase: {
  //   anObject: {
  //     source: db.ref('events/' + params.id),
  //     cancelCallback: function() {
  //       console.log('firebase get error')
  //     }
  //   }
  // }
})

db.ref('events/' + params.id)
  .on('value', function(snapshot) {
    var val = snapshot.val();
    vm1.title = val.title;
    vm1.date = val.date;
    vm1.comment = val.comment;
    console.log(val);
  });

var members = new Array();
db.ref('members')
  .on('value', function(snapshot) {
    snapshot.forEach(function(child) {
      var val = child.val();
      var member = {
        key: child.key,
        name: val.name,
        comment: val.comment
      }
      members.push(member);
    })
    console.log(members);
  });

var vm = new Vue({
  el: '#members',
  data: {
    anArray: members
  }
})