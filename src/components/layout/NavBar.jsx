import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCountdown } from '../../hooks/useCountdown'
import { NAV_MENU_ITEMS } from '../../config/constants'

const NavBar = () => {
  const timeLeft = useCountdown("May 26, 2026 20:20:00")
  const renderMenuItem = (items) => (
    items.map((item) =>
      item.path ? (
        <NavLink key={item.label} to={item.path}>
          <li className='cursor-pointer'>{item.label}</li>
        </NavLink>
      ) : (
        <li key={item.label} className='cursor-pointer'>{item.label}</li>
      )
    )
  )

  return (
    <nav className='w-screen flex items-start justify-between px-10 fixed top-0 left-0 z-50 '>
      <div className='flex text-[13px] font-bold tracking-wider text-gray-100 z-20'>
        <NavLink to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg" alt="logo" className='h-4.5 opacity-60 brightness-500 mt-5 cursor-pointer'  /></NavLink>

        <article className="group relative hover:bg-black/40 duration-500 text-center w-30 h-40 pt-6">
          <h1 className='cursor-pointer hover:text-white text-gray-300'>VEHICLES</h1>
          <ul className='text-[14px] opacity-0 -translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 uppercase flex flex-col gap-2 mt-2'>
            {renderMenuItem(NAV_MENU_ITEMS.vehicles)}
          </ul>
        </article>

        <article className="group relative hover:bg-black/40 duration-500 text-center w-40 h-50 pt-6 right-5">
          <h1 className='cursor-pointer hover:text-white text-gray-300'>HUMAN SPACEFLIGHT</h1>
          <ul className='text-[14px] opacity-0 -translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 uppercase flex flex-col gap-2 mt-2'>
            {renderMenuItem(NAV_MENU_ITEMS.humanSpaceflight)}
          </ul>
        </article>

        <h1 className='pt-6 cursor-pointer hover:text-white text-gray-300'>STARLINK</h1>
        <NavLink to="/starShield"><h1 className='pt-6 cursor-pointer pl-8 hover:text-white text-gray-300'>STARSHIELD</h1></NavLink>

        <article className="group relative hover:bg-black/40 duration-500 text-center w-30 h-40 pt-6 right-3">
          <h1 className='cursor-pointer hover:text-white text-gray-300'>xAI</h1>
          <ul className='text-[14px] opacity-0 -translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 uppercase flex flex-col gap-2 mt-2'>
            {renderMenuItem(NAV_MENU_ITEMS.xai)}
          </ul>
        </article>

        <h1 className='relative pt-6 cursor-pointer right-5 hover:text-white text-gray-300'>TERAFAB</h1>

        <article className="group relative hover:bg-black/40 duration-500 text-center w-30 h-40 pt-6 right-3">
          <h1 className='cursor-pointer hover:text-white text-gray-300'>COMPANY</h1>
          <ul className='text-[14px] opacity-0 -translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 uppercase flex flex-col gap-2 mt-2'>
            {renderMenuItem(NAV_MENU_ITEMS.company)}
          </ul>
        </article>

        <article className="group relative hover:bg-black/40 duration-500 text-center w-20 h-40 pt-6 right-5">
          <h1 className='cursor-pointer hover:text-white text-gray-300'>SHOP</h1>
          <ul className='text-[14px] opacity-0 -translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 uppercase flex flex-col gap-2 mt-2'>
            {renderMenuItem(NAV_MENU_ITEMS.shop)}
          </ul>
        </article>
      </div>

      <div className='text-gray-300 font-bold text-[10px] tracking-wider p-2 z-10 border border-gray-500 mt-5'>
        UPCOMING LAUNCHES  T{timeLeft.days}days{timeLeft.hours}hr{timeLeft.minutes}min{timeLeft.seconds}sec
      </div>


    </nav>
  )
}

export default NavBar
