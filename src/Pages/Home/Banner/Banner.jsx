
import React from 'react'
import { Carousel } from 'react-bootstrap'
import banner1 from '../../../assets/images/banner1.jpg'
import banner2 from '../../../assets/images/banner2.jpg'
import banner3 from '../../../assets/images/banner3.jpg'

function Banner() {
    return (
        <div className='banner'>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Unleash Your Cinematic Passion!</h2>
                        <p> Experience the exhilaration of cinema like never before with Cinespectra! Immerse yourself in a world of unlimited possibilities as we bring you an extraordinary collection of movies from every genre imaginable. From timeless classics to the latest blockbusters, Cinespectra is your gateway to endless entertainment. Indulge your cinematic passion and embark on an unforgettable journey with us today!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 className='mb-3'>Your One-Stop Destination for Movie Lovers</h2>
                        <p >Welcome to Cinespectra, the ultimate online destination for movie lovers around the globe. Discover an extensive library of films that will captivate and inspire you. Whether you're in the mood for thought-provoking dramas, high-octane action, heartwarming romances, or mind-bending sci-fi, Cinespectra has it all. With our user-friendly interface and personalized recommendations, finding your next cinematic gem has never been easier. Join us and let your movie-watching adventure begin!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Elevating Movie Nights to Extraordinary Heights</h2>
                        <p>
                            Prepare to elevate your movie nights to extraordinary heights with Cinespectra! Dive into a world of unparalleled entertainment as we curate a vast collection of movies to suit every taste and mood. Whether you're seeking thrilling adventures, hilarious comedies, gripping mysteries, or epic sagas, Cinespectra has something special in store for you. Discover hidden gems, rediscover beloved classics, and create cherished memories with friends and family. Join Cinespectra today and unlock the magic of cinema at your fingertips!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner
