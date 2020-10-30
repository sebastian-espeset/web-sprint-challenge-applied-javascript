// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

//calling the data
axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then(res=>{
        const levelTwo=res.data;
        const articleObject= levelTwo.articles;
        console.log(articleObject);       
    })
    .catch(err=>{
        console.log("error:",err)
    })
//data structure looks like;
//data.data.articles(object).topic(array).element.object.{authorName:,authorPhoto:url,headline:, id:,

//res.data.articles gets me to an object with arrays as the value

//building the card creator function

function cardMaker(obj){
    //creating elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const author = document.createElement('span');
    
    //creating content
    headline.textContent=obj.data.articles.bootstrap[0].headline;


}