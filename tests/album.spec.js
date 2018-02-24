import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import sinonStubPromise from "sinon-stub-promise";
import { getAlbum, getAlbums, getAlbumTracks } from "../src/album";

global.fetch = require("node-fetch");

sinonStubPromise(sinon);
chai.use(sinonChai);

describe("Album", () => {
  let stubedFetch;
  let promise;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, "fetch");
    promise = stubedFetch.returnsPromise();
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe("smoke tests", () => {
    it("should have getAlbum method", () => {
      expect(getAlbum).to.exist;
    });

    it("should have getAlbums method", () => {
      expect(getAlbums).to.exist;
    });

    it("should have getAlbumTracks method", () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe("getAlbum", () => {
    it("should call fetch method", () => {
      getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it("should call fetch with the correct URL", () => {
      getAlbum("4aawyAB9vmqN3uQ7FjRGTy");
      expect(stubedFetch).to.have.been.calledWith(
        "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy"
      );

      getAlbum("4aawyAB9vmqN3uQ7FjRGTk");
      expect(stubedFetch).to.have.been.calledWith(
        "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk"
      );
    });

    it("should return the correct data from Promise", () => {
      promise.resolves({ album: "name" });
      const album = getAlbum("4aawyAB9vmqN3uQ7FjRGTy");
      expect(album.resolveValue).to.be.eql({ album: "name" });
    });
  });

  describe("getAlbums", () => {
    it("should call fetch method", () => {
      getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it("should call fetch with the correct URL", () => {
      getAlbums(["4aawyAB9vmqN3uQ7FjRGTy", "4aawyAB9vmqN3uQ7FjRGTk"]);
      expect(stubedFetch).to.have.been.calledWith(
        "https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk"
      );
    });

    it("should return the correct data from Promise", () => {
      promise.resolves({ album: "name" });
      const albums = getAlbums([
        "4aawyAB9vmqN3uQ7FjRGTy",
        "4aawyAB9vmqN3uQ7FjRGTk"
      ]);
      expect(albums.resolveValue).to.be.eql({ album: "name" });
    });
  });

  describe("getAlbumsTracks", () => {
    it("should call fetch method", () => {
      getAlbumTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it("should call fetch with the correct URL", () => {
      getAlbumTracks("4aawyAB9vmqN3uQ7FjRGTy");
      expect(stubedFetch).to.have.been.calledWith(
        "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks"
      );
    });

    it("should return the correct data from Promise", () => {
      promise.resolves({ album: "name" });
      const tracks = getAlbumTracks("4aawyAB9vmqN3uQ7FjRGTy");
      expect(tracks.resolveValue).to.be.eql({ album: "name" });
    });
  });
});
