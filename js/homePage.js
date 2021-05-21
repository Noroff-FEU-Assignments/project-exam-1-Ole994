const url = "https://olekorvald.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia&per_page=100"

// HTML Dom elementer. 
const postCarousel = document.querySelector(".post-carousel");
const carouselButtonPrevious = document.querySelector(".prev-button");
const carouselButtonNext = document.querySelector(".next-button");
const spinner = document.querySelector(".loader");

// Dette er tilstand som vi bruker. F.eks. lagrer vi alle postene i posts, og 
// bruker disse til å endre de på nytt når vi trenger det. 

let posts = [];
let activeCarouselStart = 0;
let numberOfCarousellItems = 3;

fetch(url, {
    "method": "GET"
  })
  .then(response => response.json())
  .then(data => {
    posts = data;
    renderCarousel(data);
  })
  .finally(()=> spinner.classList.remove("loader"));

/* Sjekker with på vindu for å tilpasse antall elementer i karusellen*/
// Vi kan bruke window.innerWidth for å sjekke hvor vid skjermen er
// og sette antall elementer i karusell vi ønsker å vise.

// Kan brukes sammen med resize-event.

window.addEventListener("resize", () => {
  if (screen.width < 800) {
    numberOfCarousellItems = 0;
  } 

  else if (screen.width < 1100) {
    numberOfCarousellItems = 2;
  }
  else{
     
      numberOfCarousellItems = 3;
    }
  
 
//   // Endre antall kort vi viser ved å endre numberOfCarousellItems. 
  renderCarousel(posts);
});

  if (screen.width < 800) {
    numberOfCarousellItems = 0;
  } 
  else if (screen.width < 1100) {
    numberOfCarousellItems = 2;
  }
  




/*skriver dom element for karusellen */
const renderCarousel = (posts) => {
  console.log(posts)

  // Vi tømmer DOM-treet for elementer, siden vi skal bygge de nå 
  // på nytt med nye data. 

  postCarousel.innerHTML = "";

  /*entries får index og verdi*/

  // index = teller opp indeks til postene som iterer igjennom
  // F.eks. 10 poster -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  // post = faktisk post fra Wordpress
  // posts.entries() = gir oss par av index og post. [0, post1], [1, post2].... [9, post10]

  for (let [index, post] of posts.entries()) {

    // showCard er true dersom index er større eller lik activeCarouselStart og
    // og mindre eller lik activeCarouselEnd. 
    // Dette definerer hvilket intervall vi ønsker å vise aktive poster i karusellen.


    // Hvis man er innenfor intervallet start-index og start-index + antall kort som skal vises:
    // så vis kort (ved å ikke legge på hidden-klasse), ellers legg på "hidden"-klasse. 

    const showCard = index >= activeCarouselStart && index <= (activeCarouselStart + numberOfCarousellItems);
    let showCardClass = '';
    if (!showCard) {
      showCardClass = 'hidden'
    }
    /* Html*/
    let imageUrl = post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;
    let excerpt = post.excerpt.rendered;

    let htmlString = `
    <div class="image-card-homepage ${showCardClass}">
        <div class="container-allH2Cards-frontPage">
          <h2 class="h2-image-forntPage">${post.title.rendered}</h2>
        </div>

          <a class="navbar-links" href="post.html?id=${post.id}">
            <img class= "img-card-carousel"src = "${imageUrl}"/>
          </a>

          <div class= "p-inside-carousell-image-card">${post.excerpt.rendered}</div>
              <div class="box-3">
            
                <div class="btn btn-three">
                      
         <a href="posts.html"> Read more    </div>
            </div>
        
          
</a>  
    </div>
    
    `

          



    
    postCarousel.innerHTML += htmlString;
  }
}

/**/
carouselButtonPrevious.addEventListener(`click`, () => {
  // Vi trekker fra en fra indeks for start på hvilke kort vi vider,
  // dersom vi ikke går under 0. Viser alltid elementer i karusellen fra
  // index 0 og oppover. 

  if (activeCarouselStart > 0) {
    activeCarouselStart--;
  }

  // Etter at vi har oppdatert variabel for hvilken indeks vi skal vise
  // karusell-element for, må vi skrive nye HTML-elementer til DOM-treet. 
  // I praksis: oppdatere karusell med riktige elementer. 
  renderCarousel(posts);
});

carouselButtonNext.addEventListener(`click`, () => {
  /*setter index til det neste bildet som skal vises til venstre*/
  // Vi øker denne, og øker dermed intervallet av elementer i karusellen.
  // fra 0 -> 1, så går vi fra intervallet 0 -> 3 til 1 -> 4.

  activeCarouselStart++;

  /*Hvis en har komt til slutten av postene, begynn fra start*/
  // Alternativt kan vi slå av knappen? 
  if (activeCarouselStart === posts.length) {
    activeCarouselStart = 0;
  }

  // Etter at vi har oppdatert variabel for hvilken indeks vi skal vise
  // karusell-element for, må vi skrive nye HTML-elementer til DOM-treet. 
  // I praksis: oppdatere karusell med riktige elementer. 
  renderCarousel(posts);
});


