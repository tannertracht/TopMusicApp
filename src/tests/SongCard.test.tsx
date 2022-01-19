import React from 'react';
import { render, screen } from '@testing-library/react';
import SongCard from '../components/SongCard';
import Song from "../types/Song"

let fakeSong: Song = {
  name: 'The Main Thing',
  artist: 'Tanner Tracht',
  albumCoverUrl: 'https://via.placeholder.com/170',
  storePageUrl: 'https://tannertracht.dev/',
  releaseDate: '',
  genre: '',
  id: 0
}

test('Song name is rendered', () => {
  render(<SongCard Song={fakeSong} />);
  const element = screen.getByText(/The Main Thing/i);
  expect(element).toBeInTheDocument();
});

test('Artist name is rendered', () => {
  render(<SongCard Song={fakeSong} />);
  const element = screen.getByText(/Tanner Tracht/i);
  expect(element).toBeInTheDocument();
});

