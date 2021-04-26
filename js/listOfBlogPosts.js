const url = "https://olekorvald.no/wp-json/wc/store/posts/";
           
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    listProducts (data)
  });
  