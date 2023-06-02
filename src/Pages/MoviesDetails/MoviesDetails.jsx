
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import BookForm from './BookForm';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MoviesDetails() {
    const params = useParams();
    const [movie, setMovie] = useState({});
    const [showModal, setShowModal] = useState(false);
    const { show } = movie;
    console.log(show);
    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
            .then(res => res.json())
            .then(data => {
                const selectMovie = data.find(item => item.show.id == params.id.slice(1));
                setMovie(selectMovie)
            })
    }, [params])


    return (
        <div className='py-5'>
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
                    <p className='m-0'><span className='text-black fw-bold'>Network: </span> {show?.network?.name} ({show?.premiered.slice(0, 4)} - {show?.ended.slice(0, 4)})</p>
                    <p className='m-0'><span className='text-black fw-bold'>Schedule: </span> {show?.schedule?.days[0]} at {show?.schedule?.time} ({show?.runtime} Min)</p>
                    <p className='m-0'><span className='text-black fw-bold'>Status: </span>{show?.status}</p>
                    <p className='m-0'><span className='text-black fw-bold'>Show Type: </span>{show?.type}</p>
                    <p className='m-0'><span className='text-black fw-bold'>Genres: </span><span>{show?.genres[0]}</span><span>{show?.genres[1]}</span></p>
                    <div className='d-flex align-content-center gap-2'>
                        <Rating
                            placeholderRating={show?.rating?.average || 5}
                            readonly
                            stop={10}
                            emptySymbol={<FaRegStar className='fs-5' />}
                            placeholderSymbol={<FaStar className='text-warning fs-5' />}
                            fullSymbol={<FaStar className='text-warning fs-5' />}
                        />
                        <p className='fs-5'>({show?.rating?.average || 5})</p>
                    </div>
                    <Button className='mt-3' onClick={() => setShowModal(true)} variant="primary">Booking Now</Button>
                </div>
            </div>
            <BookForm show={showModal} setShowModal={setShowModal} movie={show}></BookForm>
            <ToastContainer />
        </div>
    )
}

export default MoviesDetails
