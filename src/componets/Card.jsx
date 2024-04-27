import React from 'react'
import { ThemeContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Card(props) {
    const theme = useContext(ThemeContext);
    const { image, title, price } = props.data.attributes;
    const { id } = props.data;
    const navigate = useNavigate()

    function handleRedirect() {
        navigate(`/product/${id}`);
    }

    return (

        <div onClick={handleRedirect} className={`card w-[352px] ${theme.theme == 'light' ? 'bg-white' : 'bg-dMain3'} shadow-xl mb-20 cursor-pointer transition hover:shadow-2xl`}>
            <figure>
                <img src={image} alt="Shoes" className="rounded-xl object-cover w-[320px] h-[192px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <h1 className='text-[16px]'>${price / 100}</h1>
            </div>
        </div>

    )
}

export default Card