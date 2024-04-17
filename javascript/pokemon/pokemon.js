// Access the query string
let queryString = window.location.search;

// Create a URLSearchParams object
let searchParams = new URLSearchParams(queryString);

let id = searchParams.get('id');


const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon-form/";
const container = document.getElementById('container');

async function fetchForm() {
    const res = await fetch(`${API_ENDPOINT}${id}`);
    const data = await res.json();
    // console.log(data);
    return data;
}

// fetchForm();

async function buildApp() {
    const data = await fetchForm();
    console.log(data);

    const name = document.createElement('h1');
    name.textContent = data.name;

    container.append(name);
}

buildApp();