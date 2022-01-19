import Song from "../types/Song";
import WebRequestService from "./WebRequestService";

export default class AlbumService {
  static async TopHundredSongs(): Promise<Song[]> {
    const ItunesSongData = await WebRequestService.Get("https://itunes.apple.com/us/rss/topsongs/limit=100/json")

    const ItunesSongArray = ItunesSongData["feed"]["entry"]

    // Create array of songs with the information we care about
    let songArray: Song[] = []
    for (let song of ItunesSongArray) {
      let newSong: Song = {
        name: song["im:name"]["label"],
        artist: song["im:artist"]["label"],
        albumCoverUrl: song["im:image"][2]["label"],
        storePageUrl: song["link"][0]["attributes"]["href"],
        releaseDate: song["im:releaseDate"]?.["attributes"]["label"],
        genre: song["category"]["attributes"]["label"],
        id: parseInt(song["id"]["attributes"]["im:id"])
      }

      songArray.push(newSong)
    }

    return songArray
  }
}