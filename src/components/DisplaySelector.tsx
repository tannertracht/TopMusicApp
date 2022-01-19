import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ToggleTextButton from './ToggleTextButton';

interface IDisplaySelectorProps {
  selectedDisplay: string;
  displayChanged: Function;
}

function DisplaySelector({ selectedDisplay, displayChanged }: IDisplaySelectorProps) {
  return (
    <Container className='g-0' style={{ backgroundColor: '#0582CA' }} fluid>
      <Row className='text-center align-items-center g-0'>
        <Col>
          <ToggleTextButton
            text={"Albums"}
            selected={selectedDisplay === "Albums" ? true : false}
            onClick={() => displayChanged("Albums")}
          />
        </Col>
        <Col>
          <ToggleTextButton
            text={"Songs"}
            selected={selectedDisplay === "Songs" ? true : false}
            onClick={() => displayChanged("Songs")}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default DisplaySelector