import SongService from "../services/SongService"
import Song from "../types/Song";

let songs: Song[]

test('Songs are fetched from SongService', async () => {
  songs = await SongService.TopHundredSongs()

  expect(songs.length).toBeGreaterThan(0)
});

test('Song name can be found', async () => {
  const song: Song = songs[0]

  const songName = song.name

  expect(songName.length).toBeGreaterThan(0)
});

test('Song artist can be found', async () => {
  const song: Song = songs[0]

  const artist = song.artist

  expect(artist.length).toBeGreaterThan(0)
});

test('Song store url can be found', async () => {
  const song: Song = songs[0]

  const storeUrl = song.storePageUrl

  expect(storeUrl.length).toBeGreaterThan(0)
});

test('Song album cover can be found', async () => {
  const song: Song = songs[0]

  const albumUrl = song.albumCoverUrl

  expect(albumUrl.length).toBeGreaterThan(0)
});