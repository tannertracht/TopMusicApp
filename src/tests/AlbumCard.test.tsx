import React from 'react';
import { render, screen } from '@testing-library/react';
import AlbumCard from '../components/AlbumCard'
import Album from '../types/Album'

let fakeAlbum: Album = {
  name: 'Tanners Album',
  artist: 'Tanner Tracht',
  albumCoverUrl: 'https://via.placeholder.com/170',
  storePageUrl: 'https://tannertracht.dev/',
  releaseDate: '',
  genre: '',
  id: 0
}

test('Album name is rendered', () => {
  render(<AlbumCard Album={fakeAlbum} />);
  const element = screen.getByText(/Tanners Album/i);
  expect(element).toBeInTheDocument();
});

test('Artist name is rendered', () => {
  render(<AlbumCard Album={fakeAlbum} />);
  const element = screen.getByText(/Tanner Tracht/i);
  expect(element).toBeInTheDocument();
});

