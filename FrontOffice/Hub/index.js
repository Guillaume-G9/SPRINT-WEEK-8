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