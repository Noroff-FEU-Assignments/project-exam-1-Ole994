const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) { window.location = "index.html"; }
console.log(id)


/*henter ut data*/
const url = "https://olekorvald.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia"
const postContent = document.querySelector(".post-content")
fetch(url, {
  "method": "GET"
})
  .then(response => response.json())
  .then(data => template (data) );

const template = (posts) => {
  for (post of posts) {
    console.log(post.title)
    let imageUrl = post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;
    let htmlString = `
          
          
          
            ${post.title.rendered}</h2> </div>
            <a class="navbar-links" href="post.html?id=${post.id}"><img class= "img-card-single-post"src = "${imageUrl}"/></a>
            ${post.excerpt.rendered}
            `
    postContent.innerHTML += htmlString;
  }
}
