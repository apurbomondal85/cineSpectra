
import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MovieCard({ item }) {
    const { name, image, genres, type, language, id } = item;

    return (
        <Card>
            <Card.Img variant="top" src={image.medium} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <p className='text-secondary m-0'>Genres : <span className='me-2'>{genres[0]}</span><span>{genres[1]}</span></p>
                    <p className='text-secondary m-0'>Type : {type}</p>
                    <p className='text-secondary m-0'>Language : {language}</p>
                </Card.Text>
                <Link to={`/movie-details/:${id}`}>
                    <Button variant="primary">View Details</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default MovieCard
