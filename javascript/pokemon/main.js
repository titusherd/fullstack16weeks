async function getData() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await res.json();
    // console.log(data);
    return data;
}

// getData();

async function buildApp() {
    const data = await getData();
    // console.log(pokemons);
    const pokemons = data.results;

    pokemons.forEach((pokemon, index) => {
        console.log(pokemon.name);
        console.log(`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${index + 1}.svg`);

    });
}

buildApp();