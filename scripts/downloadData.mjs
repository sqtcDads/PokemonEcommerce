import fs from "fs";

const url =
    "https://pokeapi.co/api/v2/pokemon/{number}";

let pokemon = 1
const max = 150
const pokeData = []

while (pokemon <= max) {
    const urlPokemon = url.replace("{number}", pokemon)

    const result = await fetch(urlPokemon)
    const data = await result.json();

    pokeData.push({
        id: pokemon,
        name: data.name,
        types: data.types.map((item) => {
            return item.type.name
        }),
        weight: data.weight,
        height: data.height
    })

    pokemon++

}

fs.writeFileSync(`./pokemon/pokedex.json`, JSON.stringify(pokeData, null, 2))