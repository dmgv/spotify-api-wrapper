# Spotify Wrapper

[![Build Status](https://travis-ci.org/dmgv/spotify-api-wrapper.svg?branch=master)](https://travis-ci.org/dmgv/spotify-api-wrapper)
[![Coverage Status](https://coveralls.io/repos/github/dmgv/spotify-api-wrapper/badge.svg?branch=master)](https://coveralls.io/github/dmgv/spotify-api-wrapper?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/dmgv/spotify-api-wrapper/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dmgv/spotify-api-wrapper?targetFile=package.json)
[![npm version](https://badge.fury.io/js/spotify-api-wrapper.svg)](https://badge.fury.io/js/spotify-api-wrapper)
[![Maintainability](https://api.codeclimate.com/v1/badges/fb74992d9e94ec65c7cd/maintainability)](https://codeclimate.com/github/dmgv/spotify-api-wrapper/maintainability)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A wrapper to work with the [Spotify Web API](https://developer.spotify.com/web-api/).

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Spotify Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## Installation

```bash
npm i spotify-api-wrapper --save
```

## How to use

### ES6

```js
// to import a specific method
import { method } from 'spotify-wrapper';

// to import everything
import * as spotifyWrapper from 'spotify-wrapper';
```

### CommonJS

```js
var spotifyWrapper = require('spotify-wrapper');
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="spotify-wrapper.umd.js"></script>

<!-- to import minified version -->
<script src="spotify-wrapper.umd.min.js"></script>
```

After that the library will be available to the Global as `spotifyWrapper`. Follow an example:

```js
const albums = spotifyWrapper.searchAlbums('Choosen Artist');
```

## Methods

> Follow the methods that the library provides.

### search(query, types)

> Search for informations about artists, albums, tracks or playlists. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/).

#### Arguments

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`query`   |*string*           | 'Any search query'                      |
|`type`    |*Array of strings* | ['artist', 'album', 'track', 'playlist']|

#### Example

```js
search('Incubus', ['artist', 'album'])
  .then(data => {
    // do what you want with the data
  })
```

### searchAlbums(query)

> Search for informations about Albums with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *album*.

#### Arguments

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|

#### Example

```js
searchAlbums('Incubus')
  .then(data => {
    // do what you want with the data
  })
```

### searchArtists(query)

> Search for informations about Artists with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *artist*.

#### Arguments

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|

#### Example

```js
searchArtists('Incubus')
  .then(data => {
    // do what you want with the data
  })
```

### searchTracks(query)

> Search for informations about Tracks with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *track*.

#### Arguments

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|

#### Example

```js
searchTracks('Drive')
  .then(data => {
    // do what you want with the data
  })
```

### searchPlaylists(query)

> Search for informations about Playlist with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *playlist*.

#### Arguments

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|

#### Example

```js
searchPlaylists('Happy Day')
  .then(data => {
    // do what you want with the data
  })
```

### getAlbum(id)

> Search for informations about a specific Album with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album/).

#### Arguments

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|

#### Example

```js
getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

### getAlbums(ids)

> Search for informations about some Albums with all id's. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-several-albums/).

#### Arguments

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`ids`   |*Array of strings* | ['id1', 'id2']|

#### Example

```js
getAlbum(['4aawyAB9vmqN3uQ7FjRGTy', '1A2GTWGtFfWp7KSQTwWOyo'])
  .then(data => {
    // do what you want with the data
  })
```

### getAlbumTracks(id)

> Search for all tracks in a specific Album with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album-tracks/).

#### Arguments

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|

#### Example

```js
getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

| ![Diego M. G. Vieira](https://avatars2.githubusercontent.com/u/378472?v=3&s=150)|
|:---------------------:|
|  [Diego M. G. Vieira](https://github.com/willianjusten/)   |

See also the list of [contributors](https://github.com/willianjusten/spotify-wrapper/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
