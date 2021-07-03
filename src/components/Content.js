import React from 'react'
import imageOne from "../images/smileEgg.jpeg"
import imageTwo from "../images/smileEgg.jpeg"

const Content = () => {
    return (
        <>
        <div className="menu-card">
            <img src={imageOne} className="h-full rounded mb-20 shadow" alt=""/>
        
            <div className="center-content">
            <h2 className="text-2xl mb-2">Egg Muffins</h2>
            <p className="mb-2">Cripsy, delicious, and nutritious</p>
            <span className="">$16</span>
            {/* <img src={imageTwo} className="h-full rounded mb-20 shadow" alt=""/> */}
            </div>
        </div>

        <div className="menu-card">
            <img src={imageTwo} className="h-full rounded mb-20 shadow" alt=""/>
        
            <div className="center-content">
            <h2 className="text-2xl mb-2">Egg Salad</h2>
            <p className="mb-2">Cripsy, delicious, and nutritious</p>
            <span className="mb-2">$18</span>
            {/* <img src={imageTwo} className="h-full rounded mb-20 shadow" alt=""/> */}
            </div>
        </div>
        </>

    )
}

export default Content
