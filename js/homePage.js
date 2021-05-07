// Here comes the hamburger menu

// const menuBtn = document.querySelector (`.menu-btn`);
// let menuOpen = false;
// menuBtn.addEventListener (`click`, () =>{
//     if (!menuOpen){
//         menuBtn.classList.add(`open`);
//         menuOpen = true;
//     }
//     else {
//         menuBtn.classList.remove (`open`);
//         menuOpen = false
//     }
// });


// _embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url
//laget en variabel som holder på blogposter, den settes i fetchcallet mot restapiet



// var hamburger = document.querySelector (".hamburger");
// var menu = document.querySelector (".menu");

// hamburger.addEventListener ("click", functiion (){
//   menu.classList.toogle("active");


// })



const posts = [];
const carouselState = {
  pageIndex: 0
};


const url = "https://olekorvald.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia"
const postCarousel = document.querySelector(".post-carousel");
const carouselButtonPrevious = document.querySelector(".carousel-btn-previous");
const carouselButtonNext = document.querySelector(".carousel-btn-next");

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
    </div>
    
    `;
    postCarousel.innerHTML += htmlString;
  }


  const startIndex = carouselState.pageIndex*3
  // postCarousell.innerHTML="";
  posts.slice(startIndex, startIndex+3).forEach(post => {

    let imageUrl = "";
    if (post._embedded) {
      imageUrl = post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;
    }
    console.log(imageUrl)

    const htmlString = `
            <div class="carousell-images">

              <img src="${imageUrl}"/>
              <button>Read more</button>
            </div>`;


    // const element = document.createElement('div');
    // postCarousel.innerHTML += htmlString;
    // postCarousell.appendChild(element);
  })
}

// carouselButtonNext.addEventListener(`click`, () => {
//   carouselState.pageIndex++; console.log(carouselState)
//   if (carouselState.pageIndex === 3) {
//     carouselButtonNext.disabled = true
//   }
//   else {
//     carouselButtonNext.disabled = false;
//   }

//   if (carouselState.pageIndex > 0) {
//     carouselButtonPrevious.disabled = false;
//   }
//   renderCarousel();
// });



carouselButtonPrevious.addEventListener(`click`, () => {
  carouselState.pageIndex--; console.log(carouselState)
  if (carouselState.pageIndex === 0) {
    carouselButtonPrevious.disabled = true
  }
  else {
    carouselButtonPrevious.disabled = false
  }

  if (carouselState.pageIndex < 3) {
    carouselButtonNext.disabled = false
  }
  renderCarousel();
});



    // // Loop trough and link the homepage posts to post.html
    // let postHtml = "";
    // data.forEach(post => {
    //   posts.push(post);
    //   // render carousel items


    //   // console.log(post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url)
    //   const embedded = post._embedded;
    //   if (embedded) {
    //     console.log(embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url);
    //   }

    //   postHtml += `
    //         <div> 
    //         <div class="carousell-image">

    //           <img src="${imageUrl}"/>
    //           <button>Read more</button>
    //         </div>
    //             <a href ="/post.html?id=${post.id}"> ${post.title.rendered} </a>
    //         </div>`
    // });
    // // renderCarousel();

    // console.log(data)
    // postCarousel.innerHTML = postHtml;



