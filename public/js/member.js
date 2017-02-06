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

var members = new Array();
db.ref('members')
  .on('value', function(snapshot) {
    snapshot.forEach(function(child) {
      var val = child.val();
      var event = {
        date: val.date,
        comment: val.comment,
        title: val.title,
        link: 'event.html?id=' + child.key
      }
      var member = {
        key: child.key,
        name: val.name,
        comment: val.comment,
        link: 'member.html?key=' + child.key
      }
      members.push(member);
    })
    console.log(members);
  });

var vm = new Vue({
  el: '#member-list',
  data: {
    anArray: members
  }
})

// メンバー登録
var vueClick = new Vue({
  el: '#member-insert',
  data: {
    name: '',
    imageUrl: '',
    comment: ''
  },
  firebase: {
    members: db.ref('members')
  },
  methods: {
    addItem: function() {
      this.$firebaseRefs.members.push({
        name: this.name,
        imageUrl: this.imageUrl,
        comment: this.comment
      })
    }
  }
})