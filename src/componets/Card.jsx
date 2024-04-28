import React from 'react'
import { ThemeContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Card(props) {
    const theme = useContext(ThemeContext);
    const { image, title, price, company } = props.data.attributes;
    const { id } = props.data;
    const { isGrid } = props;
    const navigate = useNavigate()

    function handleRedirect() {
        navigate(`/product/${id}`);
    }

    return (

        <div onClick={handleRedirect} className={`${isGrid ? 'w-[352px]' : 'w-[1088px] flex items-center flex-row p-5 shadow-lg hover:shadow-2xl'} card  ${theme.theme == 'light' ? 'bg-white' : 'bg-dMain3'} pt-3 shadow-xl cursor-pointer transition hover:shadow-2xl ${isGrid ? 'mb-20' : 'mb-4'}`}>
            <figure>
                <img src={image} alt="Shoes" className={`rounded-xl object-cover  ${isGrid ? 'w-[320px] h-[192px]' : 'w-[128px] h-[128px]'}`} />
            </figure>
            <div className={`card-body  text-center ${isGrid ? 'items-center' : 'flex items-center flex-row justify-between'}`}>
                <div>
                    <h2 className="card-title capitalize">{title}</h2>
                    {
                        !isGrid && <h1 className='text-left'>{company}</h1>
                    }
                </div>
                <h1 className='text-[16px]'>${price / 100}</h1>
            </div>
        </div>

    )
}

export default Card