import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ResidentInfo = ({ url }) => {
  const [characterDescription, setCharacterDescriptrion] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setCharacterDescriptrion(res.data));
  },[]);

  console.log(characterDescription);

  return (
    <Card style={{ width: '20rem'}}>
    <Card.Img variant="top" src={characterDescription.image} />
    <Card.Body>
      <Card.Title>{characterDescription.status}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>{characterDescription.name}</ListGroup.Item>
      <ListGroup.Item>Species: <br />{characterDescription.species}</ListGroup.Item>
      <ListGroup.Item>Origin: <br />{characterDescription.origin?.name}</ListGroup.Item>
      <ListGroup.Item>Episode: <br />{characterDescription.episode?.length}</ListGroup.Item>
    </ListGroup>
  </Card>
  );
};

export default ResidentInfo;