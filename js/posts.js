const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
const spinner = document.querySelector(".lds-spinner");
const viewMoreButton = document.querySelector (".single-button-view-more");
let postOffset = 8; 

// if (!id) { window.location = "posts.html"; }
console.log(id)


/*henter ut data*/
const url = "https://olekorvald.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia&per_page=8"

const postContent = document.querySelector(".posts-content-Posts-Page")
fetch(url, {
  "method": "GET"
})
  .then(response => response.json())
  .then(data => template (data) )
  // .finally(()=> spinner.classList.remove("lds-spinner"));

const template = (posts) => {
  for (post of posts) {
    console.log(post.title)
    let imageUrl = post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;
    let htmlString = `
    <div class"image-card-postsPage>
    <div class="post-title"><h2>${post.title.rendered}</h2></div>
    <div class="post-image"> <a class="navbar-links" href="post.html?id=${post.id}"><img class= "img-cards-single-post"src = "${imageUrl}"/></a></div>
     ${post.excerpt.rendered}
    </div>
            `
    postContent.innerHTML += htmlString;
  }
}
//Først lage en variabel, i dette tilfelle øverst på siden
//Denne variabelen innholder antall poster som er hentet så langt
//Deretter lager vi en addEventListner funksjon son reagerer når knappen blir trykket på.
//En ser at i dette tilfelle postOffset under er satt til 4
//som vil si at den legger til 4 poster på siden.
//$postOffset den forteller til wordpress at den skal ignorere postene som alt er hentet
//Så skjer et fetchCall som utfører et httpCall (restcall)
//som får tilbake poster fra wordpress 
//de postene blir lagt til i dommen gjennom templaten som ble laget.


viewMoreButton.addEventListener("click", ()=>{
  
  const url = `https://olekorvald.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia&per_page=2&offset=${postOffset}`
  postOffset += 2
  fetch(url, {
    "method": "GET"
  })
    .then(response => response.json())
    .then(data => template (data) )
  
})






     
   

























//     fetch(url, {
//         "method": "GET"
//       })
//         .then(response => response.json())
//         .then(data => renderCarousel(data));
      
//       const renderCarousel = (posts) => {
//         for (post of posts) {
//           console.log(post.title)
//           let imageUrl = post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;
//           let htmlString = `
          
          
//           <div class ="image-card-homepage">
//             <div class="container-allH2Cards-frontPage"> <h2 class="h2-image-forntPage">${post.title.rendered}</h2> </div>
//             <a class="navbar-links" href="post.html?id=${post.id}"><img class= "img-card-carousel"src = "${imageUrl}"/></a>
//             ${post._embedded["wp:featuredmedia"][0].caption.rendered}
//             <a class="view-more-button-home-page" href="listOfBlogPosts.html">Read more</a>
//           </div>`
//           console.log(data)

//           const queryString = window.location.search;
// const id = new URLSearchParams(queryString).get('id');
// if (!id) { window.location = "index.html"; }
// console.log(id)


// /*henter ut data*/
// const url = "https://olekorvald.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia"
// const postContant = document.querySelector(".post-contant")
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
        
       

        
//         postContant.innerHTML = data.content.rendered;
//     });

//     fetch(url, {
//         "method": "GET"
//       })
//         .then(response => response.json())
//         .then(data => renderCarousel(data));
      
//       const renderCarousel = (posts) => {
//         for (post of posts) {
//           console.log(post.title)
//           let imageUrl = post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;
//           let htmlString = `
          
          
//           <div class ="image-card-homepage">
//             <div class="container-allH2Cards-frontPage"> <h2 class="h2-image-forntPage">${post.title.rendered}</h2> </div>
//             <a class="navbar-links" href="post.html?id=${post.id}"><img class= "img-card-carousel"src = "${imageUrl}"/></a>
//             ${post._embedded["wp:featuredmedia"][0].caption.rendered}
//             <a class="view-more-button-home-page" href="listOfBlogPosts.html">Read more</a>
//           </div>`
//           console.log(data)