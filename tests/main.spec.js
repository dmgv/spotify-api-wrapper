import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import sinonStubPromise from "sinon-stub-promise";

import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
} from "../src/main";

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require("node-fetch");

describe("Spotify", () => {
  let fetchedStub;
  let promise;
  beforeEach(() => {
    fetchedStub = sinon.stub(global, "fetch");
    promise = fetchedStub.returnsPromise();
  });
  afterEach(() => {
    fetchedStub.restore();
  });

  describe("smoke tests", () => {
    it("should exist the search method", () => {
      expect(search).to.exist;
    });

    it("should exist the searchAlbums method", () => {
      expect(searchAlbums).to.exist;
    });

    it("should exist the searchArtists method", () => {
      expect(searchArtists).to.exist;
    });

    it("should exist the searchTracks method", () => {
      expect(searchTracks).to.exist;
    });

    it("should exist the searchPlaylists method", () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe("Generic Search", () => {
    it("should call fetch function", () => {
      search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it("should receive the correct url to fetch", () => {
      context("passing one type", () => {
        search("Incubus", "artist");
        expect(fetchedStub).to.have.been.calledWith(
          "https://api.spotify.com/v1/search?q=Incubus&type=artist"
        );
        search("Incubus", "album");
        expect(fetchedStub).to.have.been.calledWith(
          "https://api.spotify.com/v1/search?q=Incubus&type=album"
        );
      });

      context("passing more than one type", () => {
        search("Incubus", ["artist", "album"]);

        expect(fetchedStub).to.have.been.calledWith(
          "https://api.spotify.com/v1/search?q=Incubus&type=artist,album"
        );
      });
    });

    it("should return the JSON Data from the Promise", () => {
      promise.resolves({ body: "json" });
      const artists = search("Incubus", "artists");

      expect(artists.resolveValue).to.be.eql({ body: "json" });
    });
  });

  describe("Search Artists", () => {
    it("should call fetch function", () => {
      searchArtists("Incubus");
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it("should call fetch with the correct URL", () => {
      searchArtists("Incubus");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=artists"
      );

      searchArtists("Muse");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Muse&type=artists"
      );
    });
  });

  describe("Search Albums", () => {
    it("should call fetch function", () => {
      searchAlbums("Incubus");
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it("should call fetch with the correct URL", () => {
      searchAlbums("Incubus");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=albums"
      );

      searchAlbums("Muse");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Muse&type=albums"
      );
    });
  });

  describe("Search Tracks", () => {
    it("should call fetch function", () => {
      searchTracks("Incubus");
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it("should call fetch with the correct URL", () => {
      searchTracks("Incubus");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=track"
      );

      searchTracks("Muse");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Muse&type=track"
      );
    });
  });

  describe("Search Playlists", () => {
    it("should call fetch function", () => {
      searchPlaylists("Incubus");
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it("should call fetch with the correct URL", () => {
      searchPlaylists("Incubus");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=playlist"
      );

      searchPlaylists("Muse");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Muse&type=playlist"
      );
    });
  });
});
