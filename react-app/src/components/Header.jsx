import React from 'react'

const header = () => {
  return (
    <header className="py-2 px-10 fixed top-0 w-full shadow-md">
      <nav className="flex justify-center"> 
        <ul className="flex space-x-10 text-sm">
          <li><a href="#" className="">Inicio</a></li>
          <li><a href="#" className="">Categorías</a></li>
          <li><a href="#" className="">Favoritos</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default header