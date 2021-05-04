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
const posts = [];
const carouselState = {
  pageIndex: 0
};


const url = "https://olekorvald.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia"
const postCarousel = document.querySelector(".post-carousel");
const carouselButtonPrevious = document.querySelector(".carousel-btn-previous");
const carouselButtonNext = document.querySelector(".carousel-btn-next");



const renderCarousel = () => {
  

  const postCarousell = document.querySelector(".post-carousel");
  const startIndex = carouselState.pageIndex*3
  postCarousell.innerHTML="";
  posts.slice(startIndex, startIndex+3).forEach(post => {

    let imageUrl = "";
    if (post._embedded) {
      imageUrl = post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;
    }
    console.log(imageUrl)

    const htmlString = `
            <div class="carousell-image">
              <img src="${imageUrl}"/>
            </div>`;
    

    const element = document.createElement('div');
    element.innerHTML = htmlString;
    postCarousell.appendChild(element);
  })
}

carouselButtonNext.addEventListener(`click`, () => {
  carouselState.pageIndex++; console.log(carouselState)
  if (carouselState.pageIndex === 3) {
    carouselButtonNext.disabled = true
  }
  else {
    carouselButtonNext.disabled = false;
  }

  if (carouselState.pageIndex > 0) {
    carouselButtonPrevious.disabled = false;
  }
renderCarousel ();
});



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
  renderCarousel ();
});

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Loop trough and link the homepage posts to post.html
    let postHtml = "";
    data.forEach(post => {
      posts.push(post);
      // render carousel items


      // console.log(post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url)
      const embedded = post._embedded;
      if (embedded) {
        console.log(embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url);
      }

      postHtml += `
            <div> 
                <a href ="/post.html?id=${post.id}"> ${post.title.rendered} </a>
            </div>`
    });
    renderCarousel();

    console.log(data)
    postCarousel.innerHTML = postHtml;

  });