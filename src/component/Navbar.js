import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
         <Link to='/' className='navbar-brand ml-5'>Welcome to react readux book contuct</Link>
        
        </nav>
    )
}

