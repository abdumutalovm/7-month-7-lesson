import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";

function Details() {
    const [data, setData] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    const theme = useContext(ThemeContext);
    const [selectedColor, setSelectedcolor] = useState('');
    useEffect(() => {
        if (!params.id) {
            navigate('/');
        }

        fetch(`https://strapi-store-server.onrender.com/api/products/${params.id}`)
            .then(res => res.json())
            .then(d => {
                if (!d.data) {
                    navigate('/');
                    return;
                }
                setData(d);
                setSelectedcolor(d.data.attributes.color[0]);

            })
            .catch(err => {
                console.log(err);
            });

    }, [params.id, navigate]);

    return (
        <div className="w-[1106px] mx-auto py-20 ">
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
                            <h1 className={`${theme.theme == 'light' ? 'text-text1' : 'text-white'} capitalize text-3xl font-bold`}>{data.data.attributes.title}</h1>
                            <p className={`font-bold text-xl  ${theme.theme == 'light' ? 'text-zinc-400' : 'text-zinc-200'} `} >{data.data.attributes.company}</p>
                            <h3 className={`mt-3 text-xl ${theme.theme == 'light' ? 'text-text1' : 'text-zinc-200'}`}>${data.data.attributes.price / 100}</h3>
                            <p className={`mt-6 leading-8 w-[512px] ${theme.theme == 'light' ? 'text-text1' : 'text-zinc-200'}`}>{data.data.attributes.description}</p>




                            <div className="form">
                                <div className="colors flex gap-3">
                                    {
                                        data.data.attributes.colors.map((color, index) => {
                                            return (
                                                <span key={index} style={{ backgroundColor: color, border: color == selectedColor ? "1px solid black" : "none" }} className={`w-6 h-6 rounded-full block mt-5 cursor-pointer`}></span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>


                    </>
                }
            </div>
        </div>
    );
}

export default Details;
