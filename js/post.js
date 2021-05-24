const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const spinner = document.querySelector(".lds-spinner"); 
const url = `https://olekorvald.no/wp-json/wp/v2/posts/${id}?_embed`
const postContent = document.querySelector(".post-content-post-page")
const loading = document.querySelector(".loading");


fetch(url, {
  "method": "GET"
})
  .then(response => response.json())
  .then(data => renderCarousel(data) )
  .finally(()=> loading.style.display = "none");

const renderCarousel = (post) => {

  console.log(post)
  let imageUrl = post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;
  let htmlString = `
      
              <div class"image-card-postsPage>
              <div class="post-title"><h2>${post.title.rendered}</h2></div>
              <div class="post-image"> <a class="navbar-links" href="post.html?id=${post.id}"><img class= "img-cards-single-post"src = "${imageUrl}"/></a></div>
              <div class="post-text"> ${post.excerpt.rendered}</div>
              </div>
            
            
            `
  postContent.innerHTML += htmlString;
  console.log(post)
}
