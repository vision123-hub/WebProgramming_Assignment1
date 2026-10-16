const loadBtn = document.getElementById("loadBtn");
const saveBtn = document.getElementById("saveBtn");

const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");

const loading = document.getElementById("loading");
const jokeContent = document.getElementById("jokeContent");
const errorMessage = document.getElementById("errorMessage");

const favouritesList = document.getElementById("favouritesList");
const favCount = document.getElementById("favCount");
const jokeNumber = document.getElementById("jokeNumber");

let currentJoke = null;
let jokeCounter = 0;

// Load saved jokes from localStorage
let favourites = [];

try {
    favourites = JSON.parse(localStorage.getItem("favouriteJokes")) || [];

    if (!Array.isArray(favourites)) {
        favourites = [];
    }
} catch (error) {
    favourites = [];
}


// FETCH A RANDOM JOKE
async function loadJoke() {

    loading.classList.remove("hidden");
    jokeContent.classList.add("hidden");
    errorMessage.classList.add("hidden");

    loadBtn.disabled = true;
    saveBtn.disabled = true;

    try {

        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }

        const data = await response.json();

        if (
            typeof data.setup !== "string" ||
            typeof data.punchline !== "string"
        ) {
            throw new Error("Invalid joke data");
        }

        currentJoke = data;

        setup.textContent = data.setup;
        punchline.textContent = data.punchline;

        jokeCounter++;

        jokeNumber.textContent = `Joke #${jokeCounter}`;

        jokeContent.classList.remove("hidden");

        updateSaveButton();

    } catch (error) {

        console.error("Error:", error);

        currentJoke = null;

        errorMessage.textContent =
            "😅 Oops! The jokes are taking a coffee break. Please try again!";

        errorMessage.classList.remove("hidden");

    } finally {

        loading.classList.add("hidden");

        loadBtn.disabled = false;

    }
}


// SAVE FAVOURITE JOKE
function saveFavourite() {

    if (!currentJoke) {
        return;
    }

    const alreadySaved = favourites.some(
        joke => joke.id === currentJoke.id
    );

    if (alreadySaved) {
        alert("😂 You already saved this joke!");
        return;
    }

    favourites.push(currentJoke);

    localStorage.setItem(
        "favouriteJokes",
        JSON.stringify(favourites)
    );

    displayFavourites();

    updateSaveButton();
}


// UPDATE SAVE BUTTON
function updateSaveButton() {

    if (!currentJoke) {
        saveBtn.disabled = true;
        return;
    }

    const alreadySaved = favourites.some(
        joke => joke.id === currentJoke.id
    );

    if (alreadySaved) {

        saveBtn.textContent = "❤️ Already Saved";
        saveBtn.disabled = true;

    } else {

        saveBtn.textContent = "❤️ Save Favourite";
        saveBtn.disabled = false;

    }
}


// DISPLAY SAVED JOKES
function displayFavourites() {

    favouritesList.innerHTML = "";

    favCount.textContent = `${favourites.length} saved`;

    if (favourites.length === 0) {

        const emptyMessage = document.createElement("p");

        emptyMessage.className = "empty-message";

        emptyMessage.textContent =
            "No favourites yet. Save a joke you love!";

        favouritesList.appendChild(emptyMessage);

        return;
    }

    favourites.forEach((joke, index) => {

        const card = document.createElement("div");
        card.className = "favourite-item";

        const title = document.createElement("h3");
        title.textContent = joke.setup;

        const answer = document.createElement("p");
        answer.textContent = joke.punchline;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "🗑️ Remove";

        deleteBtn.addEventListener("click", () => {
            removeFavourite(index);
        });

        card.appendChild(title);
        card.appendChild(answer);
        card.appendChild(deleteBtn);

        favouritesList.appendChild(card);

    });
}


// REMOVE FAVOURITE
function removeFavourite(index) {

    favourites.splice(index, 1);

    localStorage.setItem(
        "favouriteJokes",
        JSON.stringify(favourites)
    );

    displayFavourites();

    updateSaveButton();
}


// BUTTON EVENTS
loadBtn.addEventListener("click", loadJoke);

saveBtn.addEventListener("click", saveFavourite);


// SHOW SAVED JOKES WHEN PAGE OPENS
displayFavourites();