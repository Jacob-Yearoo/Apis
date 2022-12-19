const API_KEY = "eZrAE1KRC3W6D_A506GAU9yHKFo";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {

    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data.expiry);
    } else {
        throw new Error(data.error);
    }

}

function displayStatus(data) {
    document.getElementById("resultsModalTitle").innerHTML("<h2>API Key Status</h2>")
    document.getElementById("results-content").innerText(`Your key is vaild until ${data.expiry}`) 
    resultsModal.show()
}