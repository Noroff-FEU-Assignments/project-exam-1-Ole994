const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) { window.location = "index.html"; }
console.log(id)


/*henter ut data*/
const url = `https://olekorvald.no/wp-json/wp/v2/posts/${id}`
const postContant = document.querySelector(".post-contant")
fetch(url)
    .then(response => response.json())
    .then(data => {
        
       

        console.log(data)
        postContant.innerHTML = data.content.rendered;

    });