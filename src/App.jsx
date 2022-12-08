import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ResidentInfo from './components/ResidentInfo';
import logo from '../img/logo.png'


function App() {
  const [character, setCharacter] = useState({});
  const [location, setLocation] = useState(" ");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}/`)
    .then((res) => setCharacter(res.data));
  },[])

  const searchType = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${location}`)
    .then((res) => setCharacter(res.data));
  }

  console.log(character);

  return (
    <div className="App">
     <div className="header">
     <img src={logo} alt="" />
      <div className="search-character">
        <input
          name="name"
          placeholder="Write the number of the location here"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={searchType}>Search </button>
      </div>
    </div>

      <Card className="text-center">
      <Card.Header>DIMENSION: {character.dimension}</Card.Header>
      <Card.Body>
        <Card.Title>NAME: {character.name}</Card.Title>
        <Card.Text>
         TYPE: {character.type}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">POBLATION: {character.residents?.length}</Card.Footer>
    </Card>

    <section className='card-rm'>
      {character.residents?.map((resident) => (
        <ResidentInfo url={resident} key={resident} />
      ))}
    </section>
    <footer className='footer'>
      <h4>Todos los derechos reservados © Hector De Gante & Roberto Cuberos</h4>
    </footer>
    </div>
  )
}

export default App
