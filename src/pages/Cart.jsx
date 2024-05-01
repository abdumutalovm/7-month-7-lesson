import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";

function Cart() {
    const theme = useContext(ThemeContext);
    const [data, setData] = useState([]);
    const [count, setCount] = useState(null);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            const cartData = JSON.parse(storedCart);
            setData(cartData);
        }


    }, []);

    function handleDelete(id) {
        const newData = data.filter(item => item.id !== id);
        setData(newData);
        localStorage.setItem('cart', JSON.stringify(newData));
    }

    return (
        <div className="w-[1106px] mx-auto mt-20">
            <h1 className={`text-3xl font-medium tracking-wider capitalize mb-5 ${theme.theme == 'light' ? 'text-text1' : 'text-white'}`}>Shopping Cart</h1>
            <hr className="mb-1" />

            <div className="flex">
                <div>
                    <div className="w-[770px]"></div>
                    {data.map((item, index) => (
                        <div key={index} className="product-detail  h-[200px] flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="img mr-16">
                                    <img className="h-24 w-24 rounded-lg sm:h-32 sm:object-cover" src={item.image} alt={item.title} />
                                </div>

                                <div className={`flex flex-col gap-3 mr-32 ${theme.theme == 'light' ? 'text-text1' : 'text-white'} font-semibold`}>
                                    <h2 className='font-semibold'>{item.title}</h2>
                                    <h3 className="text-sm">{item.company}</h3>

                                    <h4 className="flex items-center text-tex1">Color : <span className="w-3.5 h-3.5 rounded-full bg-green-600 block mt-1 ml-2"></span></h4>
                                </div>

                                <div className="product-amount flex flex-col mr-48 gap-2">
                                    <label htmlFor="amount" className="text-sm text-text1">Amount</label>
                                    <select id="amount" className="select select-bordered select-sm max-w-xs">
                                        <option>{item.amount}</option>
                                    </select>
                                    <button onClick={() => handleDelete(item.id)} className={`${theme.theme == 'light' ? 'text-headerLogo' : 'text-hdLogo'} hover:underline`}>remove</button>
                                </div>

                                <div className="product-price">
                                    <h2 className="text-text1 mr-16 font-semibold">${item.price / 100}</h2>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
                <div>
                    <div className={`w-[325px] mt-24 flex flex-col total-price p-8 rounded-xl ${theme.theme == 'light' ? 'bg-bgHeader' : 'bg-dMain'}`}>
                        <div className="flex items-center justify-between">
                            <h1 className="text-xs text-text1 mb-3">Subtotal</h1>
                            <h2>${count}</h2>
                        </div>
                        <hr className="mb-2" />

                        <div className="flex items-center justify-between">
                            <h1 className="text-xs text-text1 mb-3">Shipping</h1>
                            <h2>$5.00</h2>
                        </div>
                        <hr className="mb-2" />

                        <div className="flex items-center justify-between">
                            <h1 className="text-xs text-text1 mb-3">Tax</h1>
                            <h2>$34.00</h2>
                        </div>
                        <hr className="mb-2" />

                        <div className="flex items-center justify-between">
                            <h1>Order Total</h1>
                            <h2>${count}</h2>
                        </div>
                    </div>
                    <button className={`btn mt-4 w-full text-center ${theme.theme == 'light' ? 'bg-headerLogo text-zinc-300 uppercase' : 'bg-hdLogo text-white'} `}>Please Login</button>
                </div>
            </div>
            <hr className="w-[700px]" />
        </div>
    );
}

export default Cart;
