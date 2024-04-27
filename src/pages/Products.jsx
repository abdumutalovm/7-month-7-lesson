import { useContext } from "react"
import { ThemeContext } from "../App"
function Products() {
    const theme = useContext(ThemeContext);

    return (
        <div className="w-[1106px] mx-auto">

            <div className={`rounded-md px-8 py-4 gap-x-4  gap-y-8 items-center mt-28 ${theme.theme == 'light' ? 'bg-bgHeader text-text1' : 'bg-dMain text-white'}`}>
                <div className="filter-top flex items-center justify-between gap-3">

                    <div className="field flex flex-col gap-2 w-1/4">
                        <label htmlFor="search" className='cursor-pointer'>Search Product</label>
                        <input type="search" id='search' placeholder="Type product name" className="input input-bordered input-sm w-full" />
                    </div>

                    <div className="field flex flex-col gap-2 w-1/4">
                        <label htmlFor="search" className='cursor-pointer'>Search Category</label>
                        <select className="select select-bordered select-sm w-full max-w-xs">
                            <option>all</option>
                            <option>Tables</option>
                            <option>Chairs</option>
                            <option>Kids</option>
                            <option>Sofas</option>
                            <option>Beds</option>
                        </select>                    </div>

                    <div className="field flex flex-col gap-2 w-1/4">
                        <label htmlFor="search" className='cursor-pointer'>Select Company</label>
                        <select className="select select-bordered select-sm w-full max-w-xs">
                            <option>all</option>
                            <option>Modenza</option>
                            <option>Luxora</option>
                            <option>Artifex</option>
                            <option>Comfora</option>
                            <option>Homestead</option>
                        </select>                    </div>

                    <div className="field flex flex-col gap-2 w-1/4">
                        <label htmlFor="search" className='cursor-pointer'>Sort by</label>
                        <select className="select select-bordered select-sm w-full max-w-xs">
                            <option >a-z</option>
                            <option>z-a</option>
                            <option>high</option>
                            <option>low</option>
                        </select>                    </div>
                </div>

                <div className="filter-bottom flex justify-between gap-3 mt-8">
                    <div className="range-block">
                        <input type="range" min={0} max="1000000" value="40" className="range" />
                    </div>
                    <div className="shipping">

                    </div>
                    <div className="search">

                    </div>

                    <div className='reset'></div>
                </div>
            </div>



            <div className="product"></div>

        </div>
    )
}

export default Products 