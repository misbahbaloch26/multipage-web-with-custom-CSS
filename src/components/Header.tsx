import React from 'react'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'


const Header = () => {
  return (
    <header className='header'>
        <h1 className='logo'>Magical HandBags</h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/bags">Bags</Link>
            <Link href="/contacts">Contacts</Link>
            <FaShoppingCart style={{color:'white' , fontSize:'30px'}}/>
        </nav>
    </header>
  )
}

export default Header