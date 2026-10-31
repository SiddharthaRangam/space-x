import React from 'react'
import { BUTTON_STYLES } from '../../config/constants'

const Home = () => {
  return (
    <section className='overflow-hidden'>

      <div className='relative h-screen'>
        <video autoPlay
          loop
          muted
          playsInline
          className='absolute w-full h-full object-cover brightness-80'>
          <source src="https://sxcontent9668.azureedge.us/cms-assets/assets/20260522_Starship_Flight12_web1080_v2_4755b2a6e3.mp4" type='video/mp4' />
        </video>
        <div className='absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/40 via-black/40 to-transparent'></div>

        <div className='absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent'></div>

        <div className='absolute text-white bottom-25 left-15'>
          <h1 className='tracking-wider font-extrabold'>MAY 22 , 2026</h1>
          <h1 className='text-6xl tracking-wide font-extrabold'>STARSHIP'S TWELFTH <br /> FLIGHT TEST</h1>
          <button className={BUTTON_STYLES.primary}>WATCH</button>
        </div>
      </div>


      <div className='relative bg-black h-[130vh] overflow-hidden'>

        <video
          className='absolute h-[70%] w-[70%] object-cover translate-x-150 translate-y-30'
          autoPlay
          muted
          playsInline
          loop
        >
          <source
            src="https://sxcontent9668.azureedge.us/cms-assets/assets/Mobile_v4_HB_e1d2eda88f.mp4"
            type="video/mp4"
          />
        </video>

        <div className='text-white relative top-100 left-25'>
          <h1 className='text-7xl uppercase font-["Oswald"] tracking-wide leading-none'>Making life <br /> multiplanetary</h1>
          <h1 className='mt-6 text-[17px]'>SpaceX was founded under the belief that a future where humanity is out exploring the stars is <br /> fundamentally more exciting than one where we are not.</h1>
          <button type='submit' className={BUTTON_STYLES.primary} >EXPLORE</button>
        </div>

      </div>

      <div className='relative'>
        <img src="https://sxcontent9668.azureedge.us/cms-assets/assets/Revolutionizing_Space_Tech_Desktop_ec67ad03c2.jpg" alt="" className='h-[120vh] brightness-90' />
        <ul className='absolute top-30 right-40 text-white'>
          <li className='text-5xl font-extrabold uppercase'>Revolutionizing space <br /> technology</li>  <br />
          <li>SpaceX's Starship spacecraft and Super Heavy rocket is a fully reusable transportation system <br /> designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.</li> <br />
          <button className={BUTTON_STYLES.secondary}>Learn more</button>
        </ul>
      </div>

      <div className='h-screen w-screen relative'>
        <video muted loop autoPlay playsInline poster='/wp6449702-falcon-computer-4k-wallpapers.jpg' className='h-screen w-screen object-cover brightness-80'>
          <source src='https://sxcontent9668.azureedge.us/cms-assets/assets/Leading_Launch_Service_Mobile_02email_c06f4154a8.mp4' type='video/mp4' />
        </video>
        <ul className='absolute top-30 left-30 text-white '>
          <li className='text-5xl font-extrabold uppercase'>World's leading launch <br /> service provider</li> <br />
          <li>SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully <br /> and rapidly reusable rockets necessary to transform humanity's ability to access space into <br /> something as routine as air travel.
          </li> <br />
          <button className={BUTTON_STYLES.tertiary}>Reserve your Ride</button>
        </ul>
      </div>

      <div className='relative overflow-hidden'>

        <img src="https://sxcontent9668.azureedge.us/cms-assets/assets/Advancing_Human_Spaceflight_Desktop_61c8ba1c67.jpg" alt="" className='brightness-90 h-[130vh] w-[130vw]' />

        <div className='absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-black via-black/80 to-transparent'></div>


        <ul className='absolute top-40 right-20 text-white'>
          <li className='text-5xl font-extrabold uppercase'>Advancing human <br /> spaceflight</li> <br />
          <li>Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping <br /> build a new era where not just hundreds of people, but thousands and ultimately millions will be <br /> able to explore space.</li>
          <br />
          <button className={BUTTON_STYLES.tertiary}>join a mission</button>
        </ul>
      </div>

      <article className='h-20 bg-black text-white flex justify-around items-center gap-30 px-20 font-bold tracking-wider text-[15px]'>
        <p>X</p>

        <ul className='flex gap-10'>
          <li>CAREERS</li>
          <li>UPDATES</li>
          <li>PRIVACY POLICY</li>
          <li>SUPPLIERS</li>
        </ul>

        <p>@ 2026 SPACEX</p>
      </article>

    </section>
  )
}

export default Home
