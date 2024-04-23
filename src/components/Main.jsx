import React from 'react'
import bg1 from '../assets/bg1.webp'
import bg2 from '../assets/bg2.webp'
import bg3 from '../assets/bg3.webp'
import bg4 from '../assets/bg4.webp'

import { Link } from 'react-router-dom'

function Main() {
    return (
        <div className='w-[70rem] mx-auto mt-20 flex items-center justify-between'>

            <div className="left-block">
                <h1 className='w-[458px] text-4xl font-bold text-darkBlue tracking-tight sm:text-6xl'>We are changing the way people shop</h1>
                <p className="mt-8 max-w-xl text-lg leading-8 text-darkBlue">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
                <Link to='/products' className='btn bg-mLogo text-white text-bold px-4  text-md uppercase mt-9 hover:bg-[#0560FF]'>Our products</Link>
            </div>

            <div className="right-block">
                <div className="carousel carousel-center max-w-md h-[28rem] p-4 space-x-4 bg-header rounded-box">
                    <div className="carousel-item">
                        <img src={bg1} className="rounded-box w-[320px] bg-local object-cover" />
                    </div>
                    <div className="carousel-item">
                        <img src={bg2} className="rounded-box w-[320px] bg-local object-cover" />
                    </div>
                    <div className="carousel-item">
                        <img src={bg3} className="rounded-box w-[320px] bg-local object-cover" />
                    </div>
                    <div className="carousel-item ">
                        <img src={bg4} className="rounded-box w-[320px] bg-local object-cover" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main