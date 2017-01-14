// Initialize Firebase
var config = {
    apiKey: "AIzaSyA0guptgPg4DYx7897UCNRZj9ltDBjLCw8",
    authDomain: "yuima-ru.firebaseapp.com",
    databaseURL: "https://yuima-ru.firebaseio.com",
    storageBucket: "yuima-ru.appspot.com",
    messagingSenderId: "496769769191"
};  
firebase.initializeApp(config);
console.log("1")
//member
// function writeMemberData(memberId, name, comment, imageUrl) {
//     firebase.database().ref('members/' + memberId).set({
//         name: name,
//         comment: comment,
//         profile_picture: imageUrl
//     });
// }
// writeMemberData(3, "鈴木さん", "おっちゃん", "");
console.log("2")
var db = firebase.database()
console.log("3")
var vm = new Vue({
  el: '#member-list',
  firebase: {
    // simple syntax, bind as an array by default
    anArray: db.ref('members')
    // can also bind to a query
    // anArray: db.ref('url/to/my/collection').limitToLast(25)
    // full syntax
    // anObject: {
    //   source: db.ref('url/to/my/object'),
    //   // オプションでオブジェクトとしてバインドする
    //   asObject: true,
    //   // オプションでcancelCallbackを指定する
    //   cancelCallback: function () {
    //       //読み書きが失敗した時に呼ばれる
    //   }
    // }
  }
})