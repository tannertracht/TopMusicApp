import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Header from './components/Header';
import DisplaySelector from './components/DisplaySelector';
import AlbumDisplay from './components/AlbumDisplay';
import AlbumService from './services/AlbumService';
import Album from './types/Album';
import SongService from './services/SongService';
import Song from './types/Song';
import SongDisplay from './components/SongDisplay';
import SearchBar from './components/SearchBar';

function App() {
  const [selectedDisplay, setSelectedDisplay] = useState("Albums")
  const [albums, setAlbums] = useState<Album[]>([])
  const [songs, setSongs] = useState<Song[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function getData() {
      const albums = await AlbumService.TopHundredAlbums()
      const songs = await SongService.TopHundredSongs()
      setSongs(songs)
      setAlbums(albums)
      setLoading(false)
    }

    try {
      getData()
    } catch (error: any) {
      setError(error)
    }
  }, [])

  const displayChanged = (display: string) => {
    setSelectedDisplay(display)
    setSearch("")
  }

  let content
  if (error !== "") {
    content = <div className='text-center mt-5 text-danger'>{error}</div>
  } else if (loading) {
    content = <div className='text-center mt-5'><Spinner className='mx-auto' animation="grow" /></div>
  } else if (selectedDisplay === "Albums") {
    content = <AlbumDisplay Albums={albums.filter(album => album.name.includes(search))} />
  } else if (selectedDisplay === "Songs") {
    content = <SongDisplay Songs={songs.filter(album => album.name.includes(search))} />
  }
  return (
    <Container className='g-0' style={{ height: loading || error !== "" ? "100vh" : "100%", backgroundColor: '#00A6FB' }} fluid>
      <Row className='g-0'>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className='g-0'>
        <Col>
          <DisplaySelector selectedDisplay={selectedDisplay} displayChanged={displayChanged} />
        </Col>
      </Row>
      <Row className='g-0'>
        <Col className='mx-auto' xs={12} sm={8} md={6}>
          <SearchBar text={search} onChange={(e: any) => setSearch(e.target.value)} />
        </Col>
      </Row>
      {content}
    </Container>
  );
}

export default App;