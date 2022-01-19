import React from 'react';
import { Form } from 'react-bootstrap';

interface ISearchBarProps {
  text: string,
  onChange: Function
}

function SearchBar({ text, onChange }: ISearchBarProps) {
  return (
    <Form.Control className='mx-auto mt-4' size="lg" type="text" placeholder="Search" value={text} onChange={(e) => onChange(e)} />
  )
}

export default SearchBar