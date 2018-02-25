/* to run: babel-node albums.js */

global.fetch = require("node-fetch");

import SpotifyWrapper from "../src/index";

const spotify = new SpotifyWrapper({
  token:
    "BQA-JplTLC9cg5nBpigmRyXmsDhUJdgc6F5hWZUh2on-3-3ZdGI8emQv4stk8Uf66wUXp-SOxCuU3Z3a5EJkCT8YFFrjpsqZp8Znmt3ims_8XNfuvmarl3cAErHal0fUWh6mFH3b4hBgWvsLSA"
});

const albums = spotify.search.albums("Incubus");

albums.then(data => data.albums.items.map(item => console.log(item.name)));
