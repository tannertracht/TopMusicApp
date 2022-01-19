import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Album from '../types/Album';
import AlbumCard from './AlbumCard';

interface IAlbumDisplayProps {
  Albums: Album[]
}

function AlbumDisplay({ Albums }: IAlbumDisplayProps) {
  return (
    <Row className='g-0 mt-5' xs={2} sm={3} md={4} lg={5} xl={6} xxl={7}>
      {Albums.map((album, index) => <Col className='animate' style={{ animationDelay: `${index*0.05}s` }} key={album.id}><AlbumCard Album={album} /></Col>)}
    </Row>
  )
}

export default AlbumDisplay