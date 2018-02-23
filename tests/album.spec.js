import sinon from "sinon";
import sinonChai from "sinon-chai";
import sinonStubPromise from "sinon-stub-promise";
import chai, { expect } from "chai";
import { getAlbum, getAlbumTracks } from "../src/album";

sinonStubPromise(sinon);

chai.use(sinonChai);

global.fetch = require("node-fetch");

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
});
