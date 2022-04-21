import React from 'react'
import { useParams } from 'react-router-dom'
import {Data} from '../Data'
import {Card,Button} from 'react-bootstrap'
const DetailsCard = () => {
    const {ID}=useParams()
    const movie=Data.find((e)=>e.id===Number(ID));
    console.log(movie);
  return (
    <div>
        DetailsCard
        {/* Nouvelle Carte */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="movie" src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>{movie.date}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default DetailsCard