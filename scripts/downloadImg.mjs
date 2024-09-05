import fs from "fs";

const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/{number}.svg";

let pokemon = 1
const max = 151

while (pokemon <= max) {
    const urlPokemon = url.replace("{number}", pokemon)

    const result = await fetch(urlPokemon)
    const data = await result.arrayBuffer();

    fs.writeFileSync(`./pokemon/img/${pokemon}.svg`, Buffer.from(data))
    pokemon++
}