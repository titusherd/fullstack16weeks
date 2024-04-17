// Access the query string
let queryString = window.location.search;

// Create a URLSearchParams object
let searchParams = new URLSearchParams(queryString);

let id = searchParams.get('id');


const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon-form/";
const container = document.getElementById('container');

async function fetchForm() {
    const res = await fetch(`${API_ENDPOINT}${id}`);
    // const res = await fetch(API_ENDPOINT);
    const data = await res.json();
    // console.log(data);
    return data;
}

// fetchForm();
async function fetchColor(url) {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.color.name);
    return data.color.name
}

async function buildApp() {
    const data = await fetchForm();
    console.log(data);

    const name = data.name;
    const id = data.id;
    const color = await fetchColor(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const image = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`

    console.log(name, id, color, image);

    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('flex', 'w-full', 'gap-4', 'shadow-md', 'rounded-r-lg', 'hover:scale-105', 'cursor-pointer');

    const pokemonDetails = document.createElement('div');
    pokemonDetails.classList.add('space-y-3', 'p-4', 'w-40', 'flex', 'flex-col', 'justify-center');

    const pokemonName = document.createElement('h1');
    pokemonName.classList.add('text-4xl', 'font-extrabold', 'text-white');
    pokemonName.textContent = name;

    const pokemonId = document.createElement('p');
    pokemonId.classList.add('text-4xl', 'text-white', 'font-bold');
    pokemonId.textContent = `#${id}`;

    const pokemonImage = document.createElement('img');
    pokemonImage.src = image;
    pokemonImage.alt = name;
    pokemonImage.classList.add('w-44', 'absolute');

    const details = document.createElement('div');
    details.classList.add('bg-white', 'rounded-lg', 'flex', 'flex-col', 'p-4', 'gap-4', 'w-full', 'items-center');

    const detailsContainer = document.createElement('div');
    detailsContainer.id = 'details';
    detailsContainer.classList.add('mt-14');

    pokemonDetails.append(pokemonName, pokemonId);
    pokemonCard.append(pokemonDetails);
    container.append(pokemonCard);

    // const name = document.createElement('h1');
    // name.textContent = data.name;

    // container.append(name);
}

buildApp();

{/* <div class="flex justify-between px-6 py-4">
                <h1 class="text-4xl font-extrabold text-white">Bulbasaur</h1>
                <p class="text-4xl text-white font-bold">#001</p>
            </div>
            <div class="flex justify-center h-28">
                <img src="./assets/image.png" alt="" class="w-44 absolute">
            </div>

            <div class="bg-white rounded-lg flex flex-col p-4 gap-4 w-full items-center">
                <div id="details" class="mt-14">
                    <div class="flex gap-2">
                        <p class="px-2 bg-green-200 rounded-lg">Grass</p>
                        <p class="px-2 bg-purple-200 rounded-lg">Poison</p>
                    </div>
                </div> */}