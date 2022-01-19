import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Song from '../types/Song';
import SongCard from './SongCard';

interface ISongDisplayProps {
  Songs: Song[]
}

function SongDisplay({ Songs }: ISongDisplayProps) {
  return (
    <Row className='g-0 mt-5' xs={2} sm={3} md={4} lg={5} xl={6} xxl={7}>
      {Songs.map((song, index) => <Col className='animate' style={{ animationDelay: `${index*0.05}s` }} key={song.id}><SongCard Song={song} /></Col>)}
    </Row>
  )
}

export default SongDisplay