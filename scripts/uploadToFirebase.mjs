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
    await setDoc(doc(db, "pokemon", toString(pokemon.id))), {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types,
        price: pokemon.weight,
        stock: pokemon.height

    }

};


