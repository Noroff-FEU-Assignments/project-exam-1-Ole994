const url = "https://olekorvald.no/wp-json/wp/v2/posts"
const postCarousel = document.querySelector(".post-carousel")
fetch(url)
    .then(response => response.json())
    .then(data => {
        
        let postHtml ="";
        data.forEach(post => {
            postHtml += `
            <div> 
                <a href ="/post.html?id=${post.id}"> ${post.title.rendered} </a>
            </div>`
        });

        console.log(data)
        postCarousel.innerHTML = postHtml;

    });





 