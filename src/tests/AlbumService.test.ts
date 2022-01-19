import AlbumService from "../services/AlbumService"
import Album from "../types/Album";

let albums: Album[]

test('Albums are fetched from AlbumService', async () => {
  albums = await AlbumService.TopHundredAlbums()

  expect(albums.length).toBeGreaterThan(0)
});

test('Album name can be found', async () => {
  const album: Album = albums[0]

  const albumName = album.name

  expect(albumName.length).toBeGreaterThan(0)
});

test('Album artist can be found', async () => {
  const album: Album = albums[0]

  const artist = album.artist

  expect(artist.length).toBeGreaterThan(0)
});

test('Song store url can be found', async () => {
  const album: Album = albums[0]

  const storeUrl = album.storePageUrl

  expect(storeUrl.length).toBeGreaterThan(0)
});

test('Song album cover can be found', async () => {
  const album: Album = albums[0]

  const coverUrl = album.albumCoverUrl

  expect(coverUrl.length).toBeGreaterThan(0)
});