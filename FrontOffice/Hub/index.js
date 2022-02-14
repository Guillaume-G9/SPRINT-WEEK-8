let article = document.querySelector('ul');

fetch('https://strapi-gogokodo.herokuapp.com/api/sources')
    .then(response => response.json())
    .then(data => display(data.data))

function display (data) {
    // for (video of data) {
    //     article.innerHTML += 
    //     `<li>
    //         <h3>${video.attributes.title}</h3>
    //         <a href="${video.attributes.url}" target = "_blank" >Visiter</a>
    //     </li>`
    // }
    // console.log(data)

    data.map(video => {
        article.innerHTML += 
        `<li>
            <h3>${video.attributes.title}</h3>
            <a href="${video.attributes.url}" target = "_blank" >Visiter</a>
        </li>`
    })
}

