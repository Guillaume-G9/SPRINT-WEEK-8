//-----------------------Firebase-----------------------//
firebase.initializeApp( {
    apiKey: "AIzaSyAkUSI4f2j3qNfjQnzAjbAb_hmvku-UPKc",
    authDomain: "gogokodo-login.firebaseapp.com",
    projectId: "gogokodo-login",
    storageBucket: "gogokodo-login.appspot.com",
    messagingSenderId: "199742607551",
    appId: "1:199742607551:web:a78c5ef4fd132e8b4e760a",
    measurementId: "G-NCTTEQ740F"
    });

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log(uid)
      document.querySelector('body').style.display = 'block'
      // ...
    } else {
        document.location.href = "http://127.0.0.1:5500/FrontOffice/loginPage/index.html"
      // User is signed out
      // ...
    }
});

//------------------------------------------------------//

const article = document.querySelector('ul');
const searchBar = document.querySelector('input');
let dataAPI = [];

fetch('https://strapi-gogokodo.herokuapp.com/api/sources')
    .then(response => response.json())
    .then(data => { 
        display(data.data)
        dataAPI = data.data
    })

function display (data) {
    // for (video of data) {
    //     article.innerHTML += 
    //     `<li>    
    //         <h3>${video.attributes.title}</h3>
    //         <a href="${video.attributes.url}" target = "_blank" >Visiter</a>
    //     </li>`
    // }
    article.innerHTML = "";

    data.map(video => {
        article.innerHTML += 
        `<li>
            <h3>${video.attributes.title}</h3>
            <a href="${video.attributes.url}" target="_blank">Visiter</a>
        </li>`
    })
}

searchBar.addEventListener('keyup', () => {
    let input = searchBar.value
    input=input.toLowerCase();
    const filter = dataAPI.filter(dataAPI => {
        return (
        dataAPI.attributes.category.toLowerCase().includes(input) || dataAPI.attributes.title.toLowerCase().includes(input)
        )
    })
    display(filter)
})