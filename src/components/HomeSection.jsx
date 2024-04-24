import { useState, useEffect } from 'react';

function Section() {
    const [prod, setProd] = useState([]);

    useEffect(() => {
        fetch('https://strapi-store-server.onrender.com/api/products?featured=true')
            .then(response => response.json())
            .then(data => {
                setProd(data);
                console.log(data);
            })
            .catch(error => console.error(error))
            .finally(() => {
                // Ishlovingizni bajarish
            });
    }, []);

    return (
        <section>
            <div className='w-[70rem] mx-auto mt-24 border border-t-0 border-l-0 border-r-0 mb-14 pb-4'>
                <h1 className="text-3xl font-medium tracking-wider text-darkBlue capitalize">Featured Products</h1>
            </div>
            <div className='w-[70rem] mx-auto flex items-center gap-4'>
                {
                    prod.data?.map((el, index) => (
                        <div key={index} className="card shadow-norm mb-10 card-compact w-96 bg-base-100 shadow-xl p-4 cursor-pointer transition hover:shadow-2xl ">
                            <img src={el.attributes.image} alt={el.attributes.title} className='rounded-xl h-[192px] object-cover' />
                            <div className="card-body text-center text-darkBlue">
                                <h2 className="card-title mx-auto">{el.attributes.title}</h2>
                                <p>$ {el.attributes.price / 100}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Section;
