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


// 登録する
Vue.component('navi-component', {
  template: '<div>A custom component!</div>'
})
// root インスタンスを作成する
new Vue({
  el: '#navi'
})