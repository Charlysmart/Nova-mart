import { products } from "../JSON/products";
import { useState } from "react";

const sortedProducts = products.sort((a,b) => b.rating - a.rating).slice(0, 4);
const PreviewProducts = ({image = 1} : {image : number}) => {
    return (
        <div className="w-full md:h-full h-[70%] rounded-[20px] overflow-hidden bg-[#EDEDED] flex justify-center items-center">
            <img src={ `../public/productImages/${sortedProducts[image].image}`} alt="" className="transition-all duration-200 ease-in-out w-[70%]" />
        </div>
    )
}

const SellingFurniture = () => {
    const [imageIndex, setImageIndex] = useState<number>(0);
    const sortRating = () => {
        return sortedProducts;
    }

    const RatedProducts = sortRating();

    return (
        <div className="mt-15 lg:flex justify-between w-full px-[2%]">
            <div className="lg:w-[40%] pt-5 flex flex-col items-center lg:gap-5 lg:mb-0 mb-5">
                <b className="font-gentium md:text-[40px] text-[30px]">Best Selling Furniture</b>
                <p className="font-inter md:text-[20px]">List of most sold furniture in all categories</p>
            </div>
            <div className="flex lg:w-[60%] md:w-full justify-between">
                <div className="md:w-[25%] w-[40%] flex flex-col items-center justify-center md:gap-2.5 gap-1">
                    {RatedProducts.map((item, i) => (
                        <div key={item.id} className={`w-[140.58px] h-[140.58px] bg-[#EDEDED] flex items-center justify-center overflow-hidden rounded-[20px] transition-all duration-150 ease-in-out ${imageIndex === i ? "border-3" : ""}`}>
                            <img src={`../public/productImages/${item.image}`} className="w-[80%] h-[80%]" alt={item.name} onClick={() => setImageIndex(i)} />
                        </div>
                    ))}
                </div>
                <div className="lg:w-[75%] md:w-[70%] w-[55%] flex items-center">
                    <PreviewProducts image={imageIndex} />
                </div>
            </div>
        </div>
    );
}

export default SellingFurniture;