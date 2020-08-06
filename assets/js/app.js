(function () {

    // App's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyCC1yuua04Yrasxxla_Mh6b-dQzXVnJ8Sk",
        authDomain: "ecole-241.firebaseapp.com",
        databaseURL: "https://ecole-241.firebaseio.com",
        projectId: "ecole-241",
        storageBucket: "ecole-241.appspot.com",
        messagingSenderId: "331753580319",
        appId: "1:331753580319:web:1b5964282a7ae10b03f22a",
        measurementId: "G-K6DRC2L5SH"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    let db = firebase.firestore();

    let nbMaxQuestions = 2;
    let = chrono = -1;
    let questionCourante = 0;
    let tempsParQuestion = 5;

    el("#start button").addEventListener("click", () => {
        el("#start").style.display = "none"

        nouvelleQuestion();
        chrono = setInterval(() => {
            nouvelleQuestion();
        }, tempsParQuestion * 1000);
    })

    function nouvelleQuestion() {
        questionCourante++;
        if (questionCourante > nbMaxQuestions) return;
        document.querySelectorAll(".question").forEach(q => {
            q.style.display = "none"
        })
        el("#q-" + questionCourante).style.display = "block"
    }

    function el(sel) {
        return document.querySelector(sel);
    }

})();