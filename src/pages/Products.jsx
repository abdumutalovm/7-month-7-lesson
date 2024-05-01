import { createContext, useEffect, useRef, useState } from "react"
import Card from "../componets/Card";
import { MdWindow } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";

import { useContext } from "react";
import { ThemeContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";

export const GridContext = createContext(null);

function Products() {
    const [price, setPrice] = useState(10000);
    const [shipping, setShipping] = useState(false);
    const [data, setData] = useState([]);
    const [isGrid, setGrid] = useState(true);
    const [loader, setLoader] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const searchRef = useRef(null);
    const categoryRef = useRef(null);
    const companyRef = useRef(null);
    const sortRef = useRef(null);

    const theme = useContext(ThemeContext);

    const navigate = useNavigate();
    const location = useLocation();

    async function getData(url = `https://strapi-store-server.onrender.com/api/products?page=${currentPage}`) {
        setLoader(true)
        try {
            const res = await fetch(url);
            const responseData = await res.json();
            setData(responseData.data);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getData()
            .finally(() => {
                setLoader(false)
            })
        if (location.search) {
            setCurrentPage(location.search.substring(6))
        }



    }, [currentPage]);

    function handleFilter() {
        let resultFilter = '';
        if (searchRef.current.value) {
            resultFilter += `search=${searchRef.current.value}&`;
        }

        if (categoryRef.current.value !== 'all') {
            resultFilter += `category=${categoryRef.current.value}&`;
        }

        if (companyRef.current.value !== 'all') {
            resultFilter += `company=${companyRef.current.value}&`;
        }

        if (sortRef.current.value) {
            resultFilter += `order=${sortRef.current.value}&`;
        }

        if (price !== 1000) {
            resultFilter += `price=${price}&`;
        }

        if (shipping) {
            resultFilter += `shipping=on`;
        }

        getData(`https://strapi-store-server.onrender.com/api/products?${resultFilter}`)
            .finally(() => setLoader(false));
    }

    function handleClear() {
        searchRef.current.value = '';
        categoryRef.current.value = 'all';
        companyRef.current.value = 'all';
        sortRef.current.value = 'a-z';
        setPrice(1000);
        setShipping(false);
    }

    function handleClear() {
        searchRef.current.value = null;
        categoryRef.current.value = 'all'
        companyRef.current.value = 'all';
        sortRef.current.value = 'a-z'
        setPrice(1000);
        setShipping(false);
    }


    function handlePagination(num) {
        navigate(`/products?page=${num}`)
        setCurrentPage(num);
    }


    function handlePrev() {
        if (currentPage > 1) {
            setCurrentPage(currentPage => currentPage - 1)
            navigate(`/products?page=${currentPage - 1}`)
        }
        else {
            setCurrentPage(1);
            navigate(`/products?page=1`)
        }
    }

    function handleNext() {
        if (currentPage < 3) {
            setCurrentPage(currentPage => currentPage + 1)
            navigate(`/products?page=${Number(currentPage) + 1}`)
        }
        else {
            setCurrentPage(3);
            navigate(`/products?page=3`)
        }
    }

    return (

        <div className="w-[1106px] mx-auto">

            <div className={`rounded-md px-8 py-4 gap-x-4  gap-y-8 items-center mt-20 ${theme.theme == 'light' ? 'bg-bgHeader text-text1' : 'bg-dMain text-white'}`}>
                <div className="filter-top flex items-center justify-between gap-3">

                    <div className="field flex flex-col gap-2 w-1/4">
                        <label htmlFor="search" className='cursor-pointer'>Search Product</label>
                        <input type="search" id='search' ref={searchRef} placeholder="Type product name" className="input input-bordered input-sm w-full" />
                    </div>

                    <div className="field flex flex-col gap-2 w-1/4">
                        <label htmlFor="search" className='cursor-pointer'>Search Category</label>
                        <select ref={categoryRef} className="select select-bordered select-sm w-full max-w-xs">
                            <option value='all'>all</option>
                            <option value='Tables'>Tables</option>
                            <option value='Chairs'>Chairs</option>
                            <option value='Kids'>Kids</option>
                            <option value='Sofas'>Sofas</option>
                            <option value='Beds'>Beds</option>
                        </select>                    </div>

                    <div className="field flex flex-col gap-2 w-1/4">
                        <label htmlFor="search" className='cursor-pointer'>Select Company</label>
                        <select ref={companyRef} className="select select-bordered select-sm w-full max-w-xs">
                            <option value='all' selected>all</option>
                            <option value='Modenza'>Modenza</option>
                            <option value='Luxora'>Luxora</option>
                            <option value='Artifex'>Artifex</option>
                            <option value='Comfora'>Comfora</option>
                            <option value='Homestead'>Homestead</option>
                        </select>                    </div>

                    <div className="field flex flex-col gap-2 w-1/4">
                        <label htmlFor="search" className='cursor-pointer'>Sort By</label>
                        <select ref={sortRef} className="select select-bordered select-sm w-full max-w-xs">
                            <option value='a-z' selected>a-z</option>
                            <option value='z-a'>z-a</option>
                            <option value='high'>high</option>
                            <option value='low'>low</option>
                        </select>                    </div>
                </div>

                <div className="filter-bottom flex justify-between items-center gap-3 mt-8">

                    <div className="range-input w-1/4">
                        <div className="range-title flex justify-between items-center mb-2">
                            <p>Select Price</p>
                            <p>${price}</p>
                        </div>
                        <div className="range-field">
                            <input type="range" min={0} max="1000" value={price} className="range" onChange={(e) => { setPrice(e.target.value) }} />
                        </div>
                        <div className="range-max-min font-bold range-title flex justify-between items-center mb-1">
                            <span className="font-bold text-xs">0</span>
                            <span className="font-bold text-xs">Max : $1,000.00</span>
                        </div>
                    </div>

                    <div className="shipping w-1/4 flex flex-col gap-2 form-control items-center">
                        <label htmlFor="shipping" className="cursor-pointer">Free Shipping</label>
                        <input checked={shipping} onChange={(e) => { setShipping(e.target.checked) }} type="checkbox" id="shipping" className="checkbox" />
                    </div>

                    <div className="search w-1/4 mx-auto">
                        <button onClick={handleFilter} className={`w-full btn btn-sm ${theme.theme == 'light' ? 'bg-headerLogo text-white hover:bg-blue-500' : 'bg-hdLogo text-dMain hover:bg-pink-600'}`}>SEARCH</button>
                    </div>

                    <div className='reset w-1/4 mx-auto'>
                        <button onClick={handleClear} className={`w-full btn btn-sm ${theme.theme == 'light' ? 'bg-hdLogo text-white' : 'bg-yellow text-dMain hover:bg-'}`}>RESET</button>
                    </div>
                </div>
            </div>


            <div className="card-header flex items-center border-b border-base-300 justify-between pb-5 mt-10">
                <p className="font-medium text-md text-text1">{data.length} products</p>
                <div className="icons flex items-center gap-1">
                    <span onClick={() => setGrid(true)} className="cursor-pointer flex justify-center items-center hover:bg-zinc-200 rounded-full" style={isGrid ? { color: 'white', backgroundColor: '#057AFF', width: '40px', height: '40px', borderRadius: '50%' } : { width: '40px', height: '40px' }}><MdWindow className="text-2xl"></MdWindow></span>
                    <span onClick={() => setGrid(false)} className="cursor-pointer flex justify-center items-center hover:bg-zinc-200 rounded-full" style={!isGrid ? {
                        color: 'white', backgroundColor: '#057AFF', width: '40px', height: '40px', borderRadius: '50%'
                    } : { width: '40px', height: '40px' }}><HiOutlineMenu className=" text-xl"></HiOutlineMenu></span>
                </div>
            </div>


            <div className={`products flex justify-between my-20 gap-4 flex-wrap ${isGrid ? 'flex-row' : 'flex-col'}`}>
                {
                    loader && <span className="loading loading-ring loading-2xl mx-auto w-10"></span>
                }
                {
                    !loader && data?.length > 0 && data?.map((el, index) => {
                        return (
                            <Card isGrid={isGrid} key={index} data={el}></Card>
                        )
                    })
                }
            </div>

            <div className="pagination mb-20 mx-auto justify-end">
                <button className={`join-item btn`} onClick={handlePrev}>Prev</button>
                <button className={`join-item btn ${currentPage == 1 ? 'btn-active' : ''}`} onClick={() => { handlePagination(1) }}>1</button>
                <button className={`join-item btn ${currentPage == 2 ? 'btn-active' : ''}`} onClick={() => { handlePagination(2) }}>2</button>
                <button className={`join-item btn ${currentPage == 3 ? 'btn-active' : ''}`} onClick={() => { handlePagination(3) }}>3</button>
                <button className={`join-item btn`} onClick={handleNext}>Next</button>
            </div>
        </div>

    )
}

export default Products  