import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import fs from "fs";
import { doc, setDoc } from "firebase/firestore";


const pokedex = JSON.parse(fs.readFileSync(`./pokemon/pokedex.json`, "utf-8"))

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBXBlTrAexHKdUF5TKaMgynPJhPZmpN0FA",
    authDomain: "coderfirebase.firebaseapp.com",
    databaseURL: "https://coderfirebase-default-rtdb.firebaseio.com",
    projectId: "coderfirebase",
    storageBucket: "coderfirebase.appspot.com",
    messagingSenderId: "913853059833",
    appId: "1:913853059833:web:7a95f6659c8a2391f2c828"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


// pokedex.forEach(async (pokemon) => {
//     console.log(`subiendo ${pokemon.name}, id ${pokemon.id}`)
//     await setDoc(doc(db, "pokemon", toString(pokemon.id)), {
//         id: pokemon.id,
//         name: pokemon.name,
//         types: pokemon.types,
//         price: pokemon.weight,
//         stock: pokemon.height
//     });

for (let pokemon of pokedex) {
    console.log(`subiendo ${pokemon.name}, id ${pokemon.id}`)
    console.log(`pokemon.id: ${pokemon.id}`)
    console.log(`pokemon.name: ${pokemon.name}`)
    console.log(`pokemon.types: ${pokemon.types}`)
    console.log(`pokemon.weight: ${pokemon.weight}`)
    console.log(`pokemon.height: ${pokemon.height}`)
    const docRef = doc(db, "pokemon", `${pokemon.id}`);
    console.log(`docRef: ${docRef}`);

    await setDoc(
        doc(db, "pokemon", `${pokemon.id}`), {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types,
        price: pokemon.weight,
        stock: pokemon.height

    })

};


