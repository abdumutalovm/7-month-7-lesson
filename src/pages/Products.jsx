import { useContext, useEffect, useRef, useState } from "react"
import Card from "../componets/Card";
import { ThemeContext } from "../App"
import { MdWindow } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
function Products() {

    const [price, setPrice] = useState(1000);
    const [shipping, setShipping] = useState(false);
    const [data, setData] = useState([]);
    const [isGrid, setGrid] = useState();

    const searchRef = useRef(null);
    const categoryRef = useRef(null);
    const companyRef = useRef(null);
    const sortRef = useRef(null);

    const theme = useContext(ThemeContext);

    async function getData(url = 'https://strapi-store-server.onrender.com/api/products') {
        try {
            const res = await fetch(url);
            const responseData = await res.json();
            setData(responseData.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    function handleFilter() {

    }

    function handleClear() {
        searchRef.current.value = null;
        categoryRef.current.value = 'all'
        companyRef.current.value = 'all';
        sortRef.current.value = 'a-z'
        setPrice(1000);
        setShipping(false);
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
                            <option value={'all'} selected>all</option>
                            <option value={'Tables'}>Tables</option>
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
                        <button onClick={handleFilter} className={`w-full btn btn-sm ${theme.theme == 'light' ? 'bg-headerLogo text-white' : 'bg-hdLogo text-dMain'}`}>SEARCH</button>
                    </div>

                    <div className='reset w-1/4 mx-auto'>
                        <button onClick={handleClear} className={`w-full btn btn-sm ${theme.theme == 'light' ? 'bg-hdLogo text-white' : 'bg-yellow text-dMain'}`}>RESET</button>
                    </div>
                </div>
            </div>


            <div className="card-header flex items-center border-b border-base-300 justify-between pb-5 mt-10">
                <p className="font-medium text-md text-text1">{data.length} products</p>
                <div className="icons flex items-center gap-3">
                    <span className={`rounded-full p-1 cursor-pointer transition ${theme.theme == 'light' ? 'bg-headerLogo text-zinc-300 hover:bg-[#0562FF]' : 'bg-hdLogo text-zinc-800 hover:bg-[#FF54C6]  '}`}><MdWindow className="text-2xl"></MdWindow></span>
                    <span className=""><HiOutlineMenu className=" text-xl"></HiOutlineMenu></span>
                </div>
            </div>


            <div className="products flex justify-between my-20 gap-4 flex-wrap">

                {
                    data.length > 0 && data.map((el, index) => {
                        return (
                            <Card key={index} data={el}></Card>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Products 