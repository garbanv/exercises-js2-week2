/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  let data = arrayOfPeople.map(function(p){
    return '<h1>' + p.name+ '</h1>' + '<h2>' + p.job+ '</h2>'
  })
 return content.innerHTML=data.join(" ");
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];
/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  let content = document.querySelector("#content");
 let data= shopping.map(function(product){
    return '<li>' + product + '</li>';
  }).join('');

 return content.innerHTML='<ul>'+ data +'</ul>';
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];
books[0].cover = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTw4XsKxWq4tWKwylE8CO5k_rwe0vj3czD0gawhWKukmlEvMike&usqp=CAU"
books[1].cover = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTw4XsKxWq4tWKwylE8CO5k_rwe0vj3czD0gawhWKukmlEvMike&usqp=CAU"
books[2].cover = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTw4XsKxWq4tWKwylE8CO5k_rwe0vj3czD0gawhWKukmlEvMike&usqp=CAU"

function exerciseThree(books) {
  //Write your code in here
  let data = books.map(book => {
    if(book.alreadyRead===true){
    return '<li class="green"><p>' + book.title + ': ' + book.author + '</p>' + '<img src="'+book.cover+'"/>' + '</li>'
     } else {
       return '<li class="red"><p>' + book.title + ': ' + book.author + '</p>' + '<img src="'+book.cover+'"/>' + '</li>'
     }
    }).join(" ");
  console.log(data)
  return content.innerHTML='<ul>'+ data +'</ul>';
  
}

exerciseThree(books);

