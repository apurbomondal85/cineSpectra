
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

function MoviesDetails() {
    const params = useParams();
    const [movie, setMovie] = useState({});
    const {show} = movie;
    console.log(show);
    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
        .then(res => res.json())
        .then(data => {
            const selectMovie = data.find(item => item.show.id == params.id.slice(1));
            setMovie(selectMovie)
        })
    },[params])

  return (
    <div>
      <div className="movie-details d-flex justify-content-center align-items-center">
            <h1 className='text-white fw-bold'># Movie Details</h1>
      </div>
      <h2 className='fw-bold my-5 text-center'>Movie Details</h2>
      <div className="py-5 d-flex align-items-center justify-content-center">
        <div className="w-50 image-section">
            <img src={show?.image.medium} className='w-50' alt="" />
        </div>
        <div className="w-50">
            <h2 className='fw-bold'>Show Info :</h2>
            <p className='m-0'><span className='text-black fw-bold'>Name: </span> {show?.name}</p>
            <p className='m-0' dangerouslySetInnerHTML={{ __html: show?.summary }}></p>
            <p className='m-0'><span className='text-black fw-bold'>Network: </span> {show?.network?.name} ({show?.premiered.slice(0,4)} - {show?.ended.slice(0,4)})</p>
            <p className='m-0'><span className='text-black fw-bold'>Schedule: </span> {show?.schedule?.days[0]} at {show?.schedule?.time} ({show?.runtime} Min)</p>
            <p className='m-0'><span className='text-black fw-bold'>Status: </span>{show?.status}</p>
            <p className='m-0'><span className='text-black fw-bold'>Show Type: </span>{show?.type}</p>
            <p className='m-0'><span className='text-black fw-bold'>Genres: </span><span>{show?.genres[0]}</span><span>{show?.genres[1]}</span></p>
            <Button className='mt-3' variant="primary">Booking Now</Button>
        </div>
      </div>
    </div>
  )
}

export default MoviesDetails
