import fetch from "node-fetch"
import fs from "fs";

fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((json) => {
        fs.writeFile('Morty.json', JSON.stringify(json), (err) => {
            if (err) {
                throw new Error('Something went wrong writing the file.')
            }
            console.log('JSON written to file. Contents:', JSON.stringify(json));
        })
    })