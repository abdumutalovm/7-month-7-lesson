import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";

function Details() {
    const [data, setData] = useState({});
    const [selectedColor, setSelectedColor] = useState('');
    const [count, setCount] = useState(1);
    const [loader, setLoader] = useState(false);
    const params = useParams();
    const navigate = useNavigate();
    const theme = useContext(ThemeContext);

    const notify = () => toast('Item added to cart');

    useEffect(() => {
        setLoader(true);
        if (!params.id) {
            navigate('/');
            return;
        }

        fetch(`https://strapi-store-server.onrender.com/api/products/${params.id}`)
            .then(res => res.json())
            .then(d => {
                if (!d.data) {
                    navigate('/');
                    return;
                }
                setData(d);
                setSelectedColor(d.data.attributes.colors[0]);
                console.log(d);

            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoader(false);
            })

    }, [params.id, navigate]);

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    function handleAddBag() {
        const productsData = {
            id: data.data.id,
            title: data.data.attributes.title,
            price: data.data.attributes.price,
            color: selectedColor,
            amount: count,
            image: data.data.attributes.image,
            company: data.data.attributes.company,
            tax: 5,
            shipping: data.data.attributes.shipping
        }

        const storedProducts = JSON.parse(localStorage.getItem('cart')) || [];
        storedProducts.push(productsData);
        localStorage.setItem('cart', JSON.stringify(storedProducts));
        setTimeout(() => {
            setTimeout(() => {
                toast.success("This product is add");
            }, 200);
        }, 600);
        navigate('/cart')
    }

    return (
        <div className="w-[1106px] mx-auto py-20 ">

            {
                loader && < span className="loading loading-ring loading-lg block mx-auto mt-52 w-14 h-14"></span>

            }
            {
                !loader && (
                    <>
                        <div className="text-sm breadcrumbs mb-6">
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/products'>Products</Link></li>
                            </ul>
                        </div>

                        <div className="detail flex justify-between">
                            {
                                data.data && <>
                                    <div className="card-img">
                                        <img src={data.data.attributes.image} alt="" className="rounded-xl object-cover w-[512px] h-[384px]" />
                                    </div>
                                    <div className="card-info">
                                        <h1 className={`${theme.theme === 'light' ? 'text-text1' : 'text-white'} capitalize text-3xl font-bold`}>{data.data.attributes.title}</h1>
                                        <p className={`font-bold text-xl  ${theme.theme === 'light' ? 'text-zinc-400' : 'text-zinc-200'} `} >{data.data.attributes.company}</p>
                                        <h3 className={`mt-3 text-xl ${theme.theme === 'light' ? 'text-text1' : 'text-zinc-200'}`}>${data.data.attributes.price / 100}</h3>
                                        <p className={`mt-6 leading-8 w-[512px] ${theme.theme === 'light' ? 'text-text1' : 'text-zinc-200'}`}>{data.data.attributes.description}</p>

                                        <div className="form">
                                            {/* colors */}
                                            <label htmlFor="" className="text-lg mt-8 block">Colors</label>
                                            <div className="colors flex gap-3">
                                                {
                                                    data.data.attributes.colors.length > 0 && data.data.attributes.colors.map((color, index) => {
                                                        return (
                                                            <span key={index} onClick={() => handleColorSelect(color)} style={{ backgroundColor: color, border: color === selectedColor ? "2px solid #394E6A" : "none" }} className={`w-6 h-6 rounded-full block mt-5 cursor-pointer`}></span>
                                                        )
                                                    })
                                                }
                                            </div>

                                            {/* amount */}
                                            <div className="flex flex-col mt-7 gap-2">
                                                <label htmlFor="select">Amount</label>
                                                <select className="select select-bordered w-full max-w-xs" id="select" value={count} onChange={(e) => { setCount(e.target.value) }}>
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                </select>
                                            </div>
                                            <button className="btn btn-active btn-primary mt-8 uppercase" onClick={handleAddBag}>Add to bag</button>

                                        </div>
                                    </div>
                                </>

                            }
                        </div>
                    </>
                )
            }
        </div >
    );
}

export default Details;
