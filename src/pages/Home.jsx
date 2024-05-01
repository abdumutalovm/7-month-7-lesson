import { Link } from "react-router-dom"
import { ThemeContext } from "../App";
import { useContext, useEffect, useState } from "react";
import bg1 from '../assets/bg1.webp'
import bg2 from '../assets/bg2.webp'
import bg3 from '../assets/bg3.webp'
import bg4 from '../assets/bg4.webp'
import Card from "../componets/Card";
import { GridContext } from "./Products";
import { data } from "autoprefixer";


function Home() {
    const theme = useContext(ThemeContext);
    const [featured, setFeatured] = useState([]);
    const [loader, setLoader] = useState(false);



    useEffect(() => {
        setLoader(true);
        fetch(`https://strapi-store-server.onrender.com/api/products?featured=true`)
            .then(res => res.json())
            .then(data => { setFeatured(data.data) })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoader(false);
            })
    }, [])
    console.log(featured);


    return (
        <div className={`${theme.theme == 'light' ? 'bg-white' : 'bg-dMain3'}`}>
            <div className="w-[1106px] mx-auto pt-20">
                <main className="main flex items-center justify-between">
                    <div className="info w-[496px]">
                        <h1 className={`max-w-2xl text-4xl font-bold ${theme.theme == 'light' ? 'text-text1' : 'text-white'} tracking-tight sm:text-6xl`}>We are changing the way people shop</h1>
                        <p className="mt-8 mb-8 max-w-xl text-lg leading-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
                        <Link to='/products' className={`btn text-sm uppercase   ${theme.theme == 'light' ? 'bg-headerLogo text-zinc-200  border-none hover:bg-[#069AFF]' : 'bg-hdLogo hover:bg-[#FF54C6] text-dMain3 border-none'}`}>Our products</Link>
                    </div>
                    <div className="slider w-[464px]">
                        <div className={`carousel carousel-center max-w-md p-4 space-x-4 ${theme.theme == 'light' ? 'bg-bgLogin' : 'bg-dMain2'} rounded-box`}>
                            <div className="carousel-item">
                                <img src={bg1} className="rounded-box object-cover w-[320px] h-[416px]" />
                            </div>
                            <div className="carousel-item">
                                <img src={bg2} className="rounded-box object-cover w-[320px] h-[416px]" />
                            </div>
                            <div className="carousel-item">
                                <img src={bg3} className="rounded-box object-cover w-[320px] h-[416px]" />
                            </div>
                            <div className="carousel-item">
                                <img src={bg4} className="rounded-box object-cover w-[320px] h-[416px]" />
                            </div>

                        </div>
                    </div>
                </main>

                <div className="featured mt-20 text-3xl ">
                    <h2 className={`mb-4 tracking-wider font-medium ${theme.theme == 'light' ? 'text-text1' : 'text-white'}`}>Featured Products</h2>
                    <hr />

                    <div className="featured-wrapper flex items-center gap-4 mt-11">
                        {
                            loader && <span className="loading loading-ring loading-lg mx-auto block mt-20"></span>
                        }
                        {
                            !loader && featured.length > 0 && featured.map((el, index) => {
                                return (
                                    <Card key={index} data={el}></Card>
                                )
                            })
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home