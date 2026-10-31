import React, { useEffect, useState } from 'react'
import { STARSHIP_SLIDES } from '../../config/constants'

const StarShip = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % STARSHIP_SLIDES.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + STARSHIP_SLIDES.length) % STARSHIP_SLIDES.length);
    };

    const slide = STARSHIP_SLIDES[current];
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % STARSHIP_SLIDES.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className='overflow-hidden'>

            <article className='h-full w-screen relative'>
                <img src="https://www.spacex.com/assets/images/vehicles/starship/starship_hero_d.jpg" alt="" />

                <ul className='absolute top-0 left-0 text-white flex flex-col justify-center items-center w-screen h-screen uppercase'>
                    <li className='text-8xl font-extrabold pb-5'>Starship</li>
                    <li>Service to Earth Orbit, Moon, Mars and Beyond</li>
                </ul>
            </article>

            <article className="relative h-[130vh] overflow-hidden bg-black">
                <video 
                    key={slide.video}
                    className="absolute right-0 h-[130vh] w-[80vw] object-contain" 
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={slide.video} />
                </video>

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="absolute left-20 top-1/2 -translate-y-1/2 text-white w-[500px] z-10">
                    <h1 className="text-5xl font-extrabold uppercase mb-6">
                        {slide.title}
                    </h1> 

                    <p className="text-gray-300 mb-8">
                        {slide.description}
                    </p>

                    <div className="flex justify-between py-4 border-b border-gray-500">
                        <span>HEIGHT</span>
                        <span>{slide.height}</span>
                    </div>

                    <div className="flex justify-between py-4 border-b border-gray-500">
                        <span>DIAMETER</span>
                        <span>{slide.diameter}</span>
                    </div>

                    <div className="flex justify-between py-4 border-b border-gray-500">
                        <span>PAYLOAD</span>
                        <span>{slide.payload}</span>
                    </div>
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-5 top-1/2 z-20 text-white text-4xl"
                >
                    ❮
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-5 top-1/2 z-20 text-white text-4xl"
                >
                    ❯
                </button>
            </article>

            <article className='h-[70vh] w-screen bg-black relative'>
                <img src="https://sxcontent9668.azureedge.us/cms-assets/assets/starship_tile_cover_photo_041d78820b.jpg" alt="" className='h-[50vh] absolute left-40 rounded-lg' />
                <div className='absolute top-0 right-50 h-full w-250 bg-gradient-to-l from-black/90 via-black to-transparent'></div>

                    <ul className='absolute text-white right-40 top-20 w-120'>
                        <li className='uppercase text-3xl font-extrabold'>starship</li> <br />
                        <li className='text-neutral-400'>SpaceX engineers are working to solve one of the most difficult engineering challenges in history: developing a fully, rapidly reusable rocket.</li> <br />
                        <button className='uppercase p-4 border border-gray-500 rounded-lg text-xs'>watch now</button>
                    </ul> 
            </article>

            <article>

            </article>

        </section>
    )
}

export default StarShip
