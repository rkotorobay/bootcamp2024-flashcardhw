const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

const card = document.getElementById("flashcard");
card.onclick = flipCard;

const nextButton = document.getElementById("next-btn");
nextButton.onclick = next;

const prevButton = document.getElementById("prev-btn");
prevButton.onclick = previous;

const addCardButton = document.getElementById("add-card-btn");
addCardButton.onclick = addCard;
// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const currCard = flashcards[currentIndex];
    if(showingTerm){
        document.getElementById("card-content").innerHTML = currCard.term;
    }else {
        document.getElementById("card-content").innerHTML = currCard.definition;
    }
}

function flipCard() {
    if(showingTerm) {
        showingTerm = false;
    } else {
        showingTerm = true;
    }
    displayCard();
}

function next() {
    if(currentIndex == flashcards.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    displayCard();
}

function previous() {
    if(currentIndex == 0) {
        currentIndex = flashcards.length - 1;
    } else {
        currentIndex--;
    }
    displayCard();
}

function addCard() {
    const newTerm = document.getElementById("new-term").value;
    const newDef = document.getElementById("new-definition").value;

    if(newTerm === "" || newDef === ""){
        alert("Missing input for term OR definition");
        return;
    }
    flashcards.push({term: newTerm, definition: newDef});
}

// The rest of the code you will write is apart of event listeners

// This line will display the card when the page is refreshed
window.onload = displayCard;
