import React from 'react';
import { Card } from 'react-bootstrap';
import Song from '../types/Song';

interface ISongCardProps {
  Song: Song
}

function SongCard({ Song }: ISongCardProps) {
  return (
    <Card
      bg='dark'
      style={{ width: "190px", transition: "all 0.5s" }}
      className='mx-auto my-2 album-card animate'
      text='light'>
      <Card.Img
        variant="top"
        src={Song.albumCoverUrl}
        style={{ objectFit: "cover" }}
        onClick={() => window.open(Song.storePageUrl, "_blank")}
      />
      <Card.Body>
        <Card.Title>{Song.name}</Card.Title>
        <Card.Text>
          {Song.artist}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SongCard
