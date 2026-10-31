import React from 'react'

const StarSheild = () => {
    return (
        <section className='overflow-hidden'>

            <div className='relative'>
                <img src="https://www.spacex.com/assets/images/starshield/hero.webp" alt="starShield" />
                <ul className='uppercase absolute top-[35%] left-[35%] text-white'>
                    <li className='text-8xl font-extrabold'>starShield</li>
                    <li className='pt-6 ml-30 font-bold'>supporting national security</li>
                </ul>
            </div>

            <article className='h-screen w-screen flex flex-col bg-black text-white'>

                <ul className=' h-[50vh] w-screen flex justify-between items-center pt-30'>
                    <li className='text-5xl font-extrabold uppercase ml-5'>Secured satellite <br /> network for <br /> government entities</li>
                    <li className='mr-10'>Starshield leverages SpaceX's Starlink technology and launch capability to support national security efforts. <br /> While Starlink is designed for consumer and commercial use, Starshield is designed for government use, with an <br /> initial focus on three areas:</li>
                </ul>

                <div className='flex gap-4 ml-5 mr-5 relative'  >
                    <ul>
                        <hr />

                        <div className='mt-6'>
                            <img src="https://www.spacex.com/assets/images/starshield/icon-security.webp" alt="" className='absolute' />
                            <li className='uppercase text-2xl pb-10 ml-20 pt-3 font-extrabold'>earth observation</li>
                        </div>

                        <li>Starshield launches satellites with sensing payloads and delivers processed data directly to the user.</li>
                    </ul>

                    <ul>
                        <hr />
                        <div className='mt-6'>
                            <img src="https://www.spacex.com/assets/images/starshield/icon-connected.webp" alt="" className='absolute' />
                            <li className='uppercase text-2xl pb-10 ml-20 pt-3 font-extrabold'>communications</li>
                        </div>
                        <li>Starshield provides assured global communications to government users with Starshield user equipment.</li>
                    </ul>

                    <ul>
                        <hr />
                        <div className='mt-6'>
                            <img src="https://www.spacex.com/assets/images/starshield/icon-payloads.webp" alt="" className='absolute' />
                            <li className='uppercase text-2xl pb-10 ml-20 pt-3 font-extrabold'>hosted payloads</li>
                        </div>
                        <li>Starshield builds satellite buses to support the most demanding customer payload missions.</li>
                    </ul>
                </div>
            </article>

            <article className='h-full w-screen relative'>

                <div className='absolute top-0 right-0 h-full w-250 bg-gradient-to-l from-black/90 via-black/70 to-transparent'></div>
                <img src="https://www.spacex.com/assets/images/starshield/capacity.webp" alt="" />

                <ul className='absolute right-30 top-100 text-white flex flex-col  items-end w-120'>
                    <li className='text-start w-120 uppercase text-5xl font-extrabold pb-5 text-gray-300'>security</li>
                    <li>Starlink already offers unparalleled end-to-end user data encryption. Starshield uses additional high-assurance cryptographic capability to host classified payloads and process data securely, meeting the most demanding government requirements.</li>
                </ul>
            </article>

            <article className='w-screen h-screen relative'>
                <div className='absolute top-0 right-0 h-full w-250 bg-gradient-to-l from-black/90 via-black/70 to-transparent'></div>
                <img src="https://www.spacex.com/assets/images/starshield/modular-design.webp" alt="" />
                <ul className='absolute right-30 top-80 text-white flex flex-col  items-end w-120'>
                    <li className='text-start w-120 uppercase text-5xl font-extrabold pb-5 text-gray-300'>Modular design</li>
                    <li>Designed to meet diverse mission requirements, Starshield satellites are capable of integrating a wide variety of payloads, offering unique versatility to users.</li>
                </ul>
            </article>

            <article className='w-screen h-screen relative'>
                <div className='absolute top-0 left-0 h-full w-250 bg-gradient-to-r from-black/90 via-black/70 to-transparent'></div>
                <img src="https://www.spacex.com/assets/images/starshield/interoperability.webp" alt="" />
                <ul className='absolute left-30 top-80 text-white flex flex-col  items-end w-120'>
                    <li className='text-start w-120 uppercase text-5xl font-extrabold pb-5 text-gray-300'>Interoperability</li>
                    <li>Starlink's inter-satellite laser communications terminal, which is the only communications laser operating at scale in orbit today, can be integrated onto partner satellites to enable incorporation into the Starshield network.</li>
                </ul>
            </article>

            <article className='relative h-screen w-screen'>
                <img src="https://www.spacex.com/assets/images/starshield/rapid-development.webp" alt="" />
                <ul className='absolute right-30 top-80 text-white flex flex-col  items-end w-120'>
                    <li className='text-start w-120 uppercase text-5xl font-extrabold pb-5 text-gray-300'>Rapid development and deployment</li>
                    <li>With the proven ability to iterate rapidly, SpaceX's unique full-stack approach in developing end-to-end systems, from launch vehicles to user terminals, enables the deployment of capabilities at scale with unprecedented speed.</li>
                </ul>
            </article>

            <article className='relative h-screen w-screen'>
                <div className='absolute top-0 left-0 h-full w-250 bg-gradient-to-r from-black/90 via-black/70 to-transparent'></div>
                <img src="https://www.spacex.com/assets/images/starshield/resilient.webp" alt="" />
                <ul className='absolute left-20 top-80 text-white flex flex-col  items-end w-120'>
                    <li className='text-start w-120 uppercase text-5xl font-extrabold pb-5'>Resilient and scalable capability</li>
                    <li>Starshield's proliferated low-Earth orbit architecture provides inherent resiliency and constant connectivity to on-orbit assets, while SpaceX's proven rapid launch capability provides expedient and economical access to space.</li>
                </ul>
            </article>

            <article className='relative w-screen'>
                <div className='absolute top-0 right-0 h-full w-250 bg-gradient-to-l from-black/90 via-black/70 to-transparent'></div>
                <img src="https://www.spacex.com/assets/images/starshield/proven-partnerships.webp" alt="" />
                <ul className='absolute right-20 top-80 text-white flex flex-col  items-end w-120'>
                    <li className='text-start w-120 uppercase text-5xl font-extrabold pb-5'>Proven partnerships</li>
                    <li>SpaceX's ongoing work with the Department of Defense and other partners demonstrates our ability to provide in-space and on-ground capability at scale.</li>
                </ul>
            </article>

            <article className='h-[70vh] bg-black flex flex-col justify-center items-center'>
                <p className='h-40 w-0.5 bg-white mb-15'></p>

                <button className='text-white p-4 uppercase text-xs border border-gray-700 rounded-lg hover:bg-white hover:text-black duration-300'>
                    Contact Us
                </button>

                <div className='uppercase text-white flex justify-between items-center w-[90%] pt-30 text-sm'>
                    <h1>X</h1>
                    <ul className='flex gap-10'>
                        <li className='cursor-pointer'>Careers</li>
                        <li className='cursor-pointer'>Updates</li>
                        <li className='cursor-pointer'>Privacy Policy</li>
                        <li className='cursor-pointer'>Suppliers</li>
                    </ul>
                    <h1>© 2026 SpaceX</h1>
                </div>
            </article>


        </section>
    )
}

export default StarSheild
