const API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon?limit=15'

async function getData() {
    const res = await fetch(API_ENDPOINT);
    const data = await res.json();
    // console.log(data);
    return data;
}

// getData();

async function fetchStat(url) {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    return data;
}

async function fetchColor(url) {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.color.name);
    return data.color.name
}

// fetchColor();

// const pokemonContainer = document.getElementById('pokemonContainer');

async function buildApp() {
    const data = await getData();
    const pokemons = data.results;

    // console.log(pokemons[0].url);

    pokemons.forEach(async (pokemon, index) => {

        //fetch base data
        const moreData = await fetchStat(pokemons[index].url)
        const base = moreData.stats;
        const hp = base[0].base_stat;
        const attack = base[1].base_stat;
        const defense = base[2].base_stat;

        const color = await fetchColor(`https://pokeapi.co/api/v2/pokemon-species/${index + 1}`);


        //DOM manipulation

        // pokemon card
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('flex', 'w-full', 'gap-4', 'shadow-md');

        // pokemon details
        const pokemonDetails = document.createElement('div');
        pokemonDetails.classList.add('space-y-3', 'p-2');

        // pokemon name
        const name = document.createElement('h2');
        name.classList.add('text-2xl', 'font-bold', 'capitalize')
        name.textContent = pokemon.name;

        // pokemon stats
        const stats = document.createElement('div');
        stats.classList.add('flex', 'gap-2');

        // hp
        const hpContainer = document.createElement('div');
        hpContainer.classList.add('flex', 'flex-col', 'items-center', 'gap-2');

        const hpValue = document.createElement('div');
        hpValue.classList.add('border-green-500', 'border-2', 'w-min', 'rounded-full', 'p-2');
        hpValue.textContent = hp;

        const hpText = document.createElement('p');
        hpText.classList.add('text-green-500', 'font-bold');
        hpText.textContent = 'HP';

        hpContainer.append(hpValue, hpText);

        // attact 
        const attackContainer = document.createElement('div');
        attackContainer.classList.add('flex', 'flex-col', 'items-center', 'gap-2');

        const attackValue = document.createElement('div');
        attackValue.classList.add('border-red-500', 'border-2', 'w-min', 'rounded-full', 'p-2');
        attackValue.textContent = attack;

        const attackText = document.createElement('p');
        attackText.classList.add('text-red-500', 'font-bold');
        attackText.textContent = 'Att';

        attackContainer.append(attackValue, attackText);

        // defense
        const defenseContainer = document.createElement('div');
        defenseContainer.classList.add('flex', 'flex-col', 'items-center', 'gap-2');

        const defenseValue = document.createElement('div');
        defenseValue.classList.add('border-blue-500', 'border-2', 'w-min', 'rounded-full', 'p-2');
        defenseValue.textContent = defense;

        const defenseText = document.createElement('p');
        defenseText.classList.add('text-blue-500', 'font-bold');
        defenseText.textContent = 'Def';

        defenseContainer.append(defenseValue, defenseText);

        // pokemon details
        stats.append(hpContainer, attackContainer, defenseContainer);
        pokemonDetails.append(name, stats);


        // image container
        const imageContainer = document.createElement('div');
        imageContainer.classList.add(`bg-${color}-200`, 'p-8', 'rounded-r-lg');

        // image
        const image = document.createElement('img');
        image.src = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${index + 1}.svg`;
        image.classList.add('h-28', 'w-60', 'object-contain');

        imageContainer.append(image);

        // pokemon card
        pokemonCard.append(pokemonDetails, imageContainer);

        pokemonContainer.append(pokemonCard);
    });
}

buildApp();