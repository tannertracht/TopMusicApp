import Album from "../types/Album";
import WebRequestService from "./WebRequestService";

export default class AlbumService {
  static async TopHundredAlbums(): Promise<Album[]> {
    const iTunesAlbumData = await WebRequestService.Get("https://itunes.apple.com/us/rss/topalbums/limit=100/json")

    const itunesAlbumArray = iTunesAlbumData["feed"]["entry"]

    // Create array of albums with the information we care about
    let albumArray: Album[] = []
    for (let album of itunesAlbumArray) {
      let newAlbum: Album = {
        name: album["im:name"]["label"],
        artist: album["im:artist"]["label"],
        albumCoverUrl: album["im:image"][2]["label"],
        storePageUrl: album["link"]["attributes"]["href"],
        releaseDate: album["im:releaseDate"]["attributes"]["label"],
        genre: album["category"]["attributes"]["label"],
        id: parseInt(album["id"]["attributes"]["im:id"])
      }

      albumArray.push(newAlbum)
    }

    return albumArray
  }
}