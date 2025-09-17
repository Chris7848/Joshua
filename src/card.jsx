


export default function Card({img,name,price}){
    return(
        <>
        <div className="px-5 ">
            <img src={img} alt="" className="w-65 h-75" />
            <p className="name text-white mt-2">
                {name}
            </p>
            <div>
                <p className="text-[#f3dd60ff] mt-1">
                    {price}
                </p>
            </div>
            <div className="quantity mt-4 flex gap-3">
                <button className=" rounded py-1 px-2 text-sm text-black bg-[#f3dd60ff]">
                    100ml
                </button>
                <button className=" rounded py-1 px-2 text-sm text-white border border-white">
                    50ml
                </button>
            </div>

            <button className=" w-65 rounded  py-2 px-2 text-black  mt-5 bg-[#f3dd60ff]">
                Add to cart
            </button>
        </div>
        </>
    )

}