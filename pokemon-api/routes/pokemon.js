const express = require('express');
const router = express.Router();
const _ = require('lodash'); 
const fs = require('fs');
const { getPokemonList, getPokemonData } = require('../services/pokemon');
const { result } = require('lodash');


/* Find pokemon */

router.get('/', (req, res, next) => {
    getPokemonList()
        .then(async (list) => {
            let results = list;

            // Setting up pagination and search options
            const { page, limit, search } = {
                page: Number(req.query.page) || 1,
                limit: Number(req.query.limit) || 20,
                search: req.query.search
            };

            // Sorting alphabetically
            results.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });

            // Filtering pokemon by name
            if (search) {
                const formattedText = _.kebabCase(search);
                results = results.filter(pokemon => {
                   return  pokemon.name.includes(formattedText);
                });
                // Sorting results query word first and alphabetically
                results.sort((a, b) => a.name.indexOf(formattedText) - b.name.indexOf(formattedText));
            }

            // Slicing results and saving filtered pokémon count
            const count = results.length;
            const offset = (page - 1) * limit;
            results = results.slice(offset, offset + limit);

            // Adding pokémon image
            results = await Promise.all(results.map(pokemon => {
                return getPokemonData(pokemon.name)
                    .then(data => ({ 
                        name: pokemon.name, 
                        spriteSrc: data.sprites.other['official-artwork'].front_default,
                        dataUrl: `http://localhost:4000/pokemon/data/${pokemon.name}`
                    }))
                    .catch(err => next(err));
            }));

            res.send({ 
                count,
                currentPage: page, 
                totalPages: Math.ceil(count / limit),
                results 
            });
        })
        .catch(err => next(err));
});


/* Download pokemon data */

router.get('/data/:pokemonName', (req, res, next) => {
    const pokemonName = req.params.pokemonName;

    getPokemonData(pokemonName)
        .then(pokemonData => {
            // Setting temp file name and data
            stringData = JSON.stringify(pokemonData) || "";
            const path  = __dirname + "/../temp/pokemon-data.txt";
            
            // Writting pokemon data to the temp file
            fs.writeFile(path, stringData, (err) => {
                if (err) {
                    next(err);
                }
                else {
                    // Downloading file
                    res.download(path, pokemonName + ".txt", (err) => {
                        if (err) next(err);
                        else fs.unlink(path, err => next(err)); // Deleting temp file from server
                    });
                }

            });
        })
        .catch(err => next(err));
});


module.exports = router;
