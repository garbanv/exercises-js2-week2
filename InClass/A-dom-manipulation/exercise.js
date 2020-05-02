/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

//t1.1
const pTags = document.querySelectorAll("p").length;
console.log(pTags);
//t1.2
const siteHeader = document.querySelector(".site-header");
//t1.3
const jumbotron = document.querySelector("#jumbotron-text");
//t1.4
const moreThan3 = document.querySelectorAll('.primary-content p').length;

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", alertMessage);
function alertMessage(){
  alert("thanks for visiting Bikes for Refugees!")
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const bgrChangeBtn = document.querySelector('#bgrChangeBtn');
const body = document.querySelector('body');
bgrChangeBtn.addEventListener("click", function(){
body.style.backgroundColor = "red";
})

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

const addTextBtn = document.querySelector("#addTextBtn");
addTextBtn.addEventListener("click", function(){
    const buttons = document.querySelector(".buttons");
    const moreText = document.createElement('p');
    moreText.innerText="Read more below.";
    buttons.after(moreText)
})

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/