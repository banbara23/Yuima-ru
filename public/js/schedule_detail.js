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

var vm = new Vue({
  el: '#schedule',
  data: {
    date: '??/??',
    title: 'title',
    comment: 'comment',
    anArray: []
  },
  firebase: {
    schedules: db.ref('schedules')
  },
  methods: {
    addItem: function() {
      this.$firebaseRefs
        .schedules
        .child(params.id)
        .child('members')
        .child('-KaSWnt3b9PSCU4o0Laa')
        .set({
          status: 'ok',
          comment: 'いきます',
          updateDateTime: getCurrentTime()
        })
    }
  }
})

// イベント取得
db.ref('events/' + params.id)
  .on('value', function(snapshot) {
    var val = snapshot.val();
    vm.title = val.title;
    vm.date = val.date;
    vm.comment = val.comment;
    vm.anArray = getMembers();
    console.log(val);
  });

// 出席取得
db.ref('schedules/' + params.id)
  .on('value', function(snapshot) {
    var schedules = snapshot.val();
    var members;
    // if ('members' in schedules) {
    //   members = val.members;
    //   // todo:メンバーの登録した出席状況を表示
    // } else {
    //   // 誰も出席登録していないので、メンバー一覧から取得して表示する
    //   members = getMembers();
    // }
    members = getMembers();
    vm.anArray = members;
    console.log(members);
  });

// メンバー一覧取得
function getMembers() {
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
    });
  return members;
};

//現在時刻取得（yyyy/mm/dd hh:mm:ss）
function getCurrentTime() {
  var now = new Date();
  var res = "" + now.getFullYear() + "/" + padZero(now.getMonth() + 1) +
    "/" + padZero(now.getDate()) + " " + padZero(now.getHours()) + ":" +
    padZero(now.getMinutes()) + ":" + padZero(now.getSeconds());
  return res;
}

//先頭ゼロ付加
function padZero(num) {
  var result;
  if (num < 10) {
    result = "0" + num;
  } else {
    result = "" + num;
  }
  return result;
}