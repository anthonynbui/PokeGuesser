export async function getPokemonList() {
    const data = await fetch(
        'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150'
    ).then((res) => res.json());
    return data.results;
}

function getRandomInt() {
    return Math.floor(Math.random() * 150);
}

export async function getRandomPokemon() {
    const randomNum = getRandomInt();

    const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomNum}`
    ).then((res) => res.json());
    
    return data;
}

