async function getData() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await res.json();
    console.log(data);
}

getData();