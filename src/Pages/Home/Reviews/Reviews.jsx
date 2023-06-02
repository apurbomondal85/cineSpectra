
import { Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Reviews() {
    return (
        <div className='py-5 my-5'>
            <h1 className='text-center'>Customer Review</h1>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="px-8"
            >
                <SwiperSlide>
                    <figure className="p-5 text-center">
                        <svg aria-hidden="true" style={{width: '50px'}} className="" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                        <blockquote>
                            <p style={{color: 'gray',}} className="text-base lg:text-2xl italic font-medium text-gray-900">"I absolutely love this movie collection website! It's user-friendly, visually appealing, and has a vast selection of movies. The search feature makes it easy to find my favorite films, and the personalized watchlist helps me keep track of what I want to watch. Highly recommended!"</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img style={{width:'60px', height: "60px", borderRadius: '100%'}} src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.1.857259792.1672064733&semt=sph" />
                            <div className="flex items-center divide-x-2 divide-gray-500">
                                <cite className="pr-3 font-medium text-gray-900">-- John Doe</cite>
                            </div>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>

                    <figure className=" p-5 text-center">
                        <svg aria-hidden="true" style={{width: '50px'}}  viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                        <blockquote>
                            <p style={{color: 'gray',}} className="text-base lg:text-2xl italic font-medium text-gray-900">I've tried several movie collection websites, but this one stands out. The interface is intuitive, and the movie information is comprehensive and up-to-date. The community aspect is fantastic, as I can discuss movies with other users and get recommendations. It's become my go-to platform for managing and exploring my movie collection.</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img style={{width:'60px', height: "60px", borderRadius: '100%'}} src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.1.857259792.1672064733&semt=sph" />
                            <div className="flex items-center divide-x-2 divide-gray-500">
                                <cite className="pr-3 font-medium text-gray-900">-- Jane Smith</cite>
                            </div>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>

                    <figure className=" p-5 text-center">
                        <svg aria-hidden="true" style={{width: '50px'}} viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                        <blockquote>
                            <p style={{color: 'gray',}} className="text-base lg:text-2xl italic font-medium text-gray-900">Finally, a movie collection website that understands my preferences! The recommendation engine is spot on, and I've discovered so many hidden gems through this platform. The ability to rate and review movies adds a personal touch, and the website's responsive design ensures a seamless experience on both desktop and mobile.</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img style={{width:'60px', height: "60px", borderRadius: '100%'}} src="https://img.freepik.com/free-photo/handsome-young-man-with-arms-crossed-white-background_23-2148222620.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.1.857259792.1672064733&semt=sph" />
                            <div className="flex items-center divide-x-2 divide-gray-500">
                                <cite className="pr-3 font-medium text-gray-900">-- Sarah Johnson</cite>
                            </div>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className=" p-5 text-center">
                        <svg aria-hidden="true" style={{width: '50px'}} viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                        <blockquote>
                            <p style={{color: 'gray',}} className="text-base lg:text-2xl italic font-medium text-gray-900">"This movie collection website has revolutionized the way I organize my films. The watchlist feature is a game-changer, helping me keep track of what I've seen and what I want to watch next. The clean and sleek design makes browsing enjoyable, and the integration with external platforms for trailers and reviews is a great addition."</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img style={{width:'60px', height: "60px", borderRadius: '100%'}} src="https://img.freepik.com/free-photo/handsome-corporate-man-real-estate-agent-assistant-smiling-hold-hands-together-how-may-i-help-you-smiling-friendly-polite-assist-customer-white-background_176420-45257.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.2.857259792.1672064733&semt=sph" />
                            <div className="flex items-center divide-x-2 divide-gray-500">
                                <cite className="pr-3 font-medium text-gray-900">-- Michael Thompson</cite>
                            </div>
                        </figcaption>
                    </figure>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Reviews
