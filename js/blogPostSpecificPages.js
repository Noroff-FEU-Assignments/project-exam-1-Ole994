const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) { window.location = "index.html"; }
console.log(id)


/*henter ut data*/
const url = "https://olekorvald.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia"
const postContant = document.querySelector(".post-contant")
fetch(url)
    .then(response => response.json())
    .then(data => {
        
       

        
        postContant.innerHTML = data.content.rendered;
    });

    fetch(url, {
        "method": "GET"
      })
        .then(response => response.json())
        .then(data => renderCarousel(data));
      
      const renderCarousel = (posts) => {
        for (post of posts) {
          console.log(post.title)
          let imageUrl = post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;
          let htmlString = `
          
          
          <div class ="image-card-homepage">
            <div class="container-allH2Cards-frontPage"> <h2 class="h2-image-forntPage">${post.title.rendered}</h2> </div>
            <a class="navbar-links" href="post.html?id=${post.id}"><img class= "img-card-carousel"src = "${imageUrl}"/></a>
            ${post._embedded["wp:featuredmedia"][0].caption.rendered}
            <a class="view-more-button-home-page" href="listOfBlogPosts.html">Read more</a>
          </div>`
          console.log(data)
          ;