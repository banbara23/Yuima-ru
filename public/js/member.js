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
