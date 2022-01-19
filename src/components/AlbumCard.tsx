import React from 'react';
import { Card } from 'react-bootstrap';
import Album from '../types/Album';

interface IAlbumCardProps {
  Album: Album
}

function AlbumCard({ Album }: IAlbumCardProps) {
  return (
    <Card 
      bg='dark'
      style={{ width: "190px", transition: "all 0.5s" }} 
      className='mx-auto my-2 album-card'
      text='light'
    >
      <Card.Img 
        variant="top" 
        src={Album.albumCoverUrl}
        onClick={() => window.open(Album.storePageUrl, "_blank") }
      />
      <Card.Body>
        <Card.Title>{Album.name}</Card.Title>
        <Card.Text>
          {Album.artist}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default AlbumCard
