import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-yellow-500 text-white pb-10 rounded-b-3xl':"hidden"}>
            <Link to="/" className="p-4" onClick={toggle}>Home</Link>
            <Link to="/menu" className="p-4" onClick={toggle}>Menu</Link>
            <Link to="/about" className="p-4" onClick={toggle}>About</Link>
            <Link to="/contact" className="p-4" onClick={toggle}>Contact</Link>
        </div>
    )
}

export default Dropdown
