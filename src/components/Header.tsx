import React from 'react'
import link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='logo'>Magical HandBags</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/bags">Bags</a>
            <a href="/contacts">Contacts</a>
            <FaShoppingCart style={{color:'white' , fontSize:'30px'}}/>
        </nav>
    </header>
  )
}

export default Header