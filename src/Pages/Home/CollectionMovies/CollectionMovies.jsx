
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import { Button } from 'react-bootstrap';

function CollectionMovies() {
    const [movies, setMovies] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then(res => res.json())
        .then(data => {
            setMovies(data)
        })
    },[])

  return (
    <div className='mt-5 py-5'>
        <h2 className='text-center'>Movies Collection</h2>
        <div className="movie-collection mt-5">
            {
                movies.slice(0, open ? movies.length : 8).map(item => <MovieCard key={item.show.id} item={item.show}></MovieCard>)
            }
        </div>
        <div className="d-flex justify-content-center my-5"><Button disabled={open && true} onClick={() => setOpen(true)} variant="primary">View Details</Button></div>
    </div>
  )
}

export default CollectionMovies
