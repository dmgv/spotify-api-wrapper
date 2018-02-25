/* to run: babel-node albums.js */

global.fetch = require("node-fetch");

import SpotifyWrapper from "../src/index";

const spotify = new SpotifyWrapper({
  token:
    "BQCV-vP5DSDY685K6CwqUifH28ECDUFNnuMOGNFyf9eLTCnEyIidtTd0IfK2RbT3pXTEMfi8tDrn_smc3VMrWMg6J2igxD5YSzPtdFdyLP3LUTzhzDIl4EyO1bENZlWYBnhdiVq0Qvw_NLazzA"
});

const albums = spotify.search.albums("Incubus");

albums.then(data => data.albums.items.map(item => console.log(item.name)));
