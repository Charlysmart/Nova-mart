import React, { useCallback, useEffect, useMemo, useState } from "react";
import type { FilterButtonType, ProductsType } from "./types";
import { shuffleProducts } from "./scripts";
import ProductBg from "../assets/images/Subtract.png"
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FilterButton = React.memo(({label, onClick, className} : FilterButtonType) => {
    return (
        <button onClick={onClick} className={`px-[25px] py-3 rounded-[30px] md:border ${className}`}>{label}</button>
    );
})

const ProductSection = () => {
    const [filter, setFilter] = useState<string>("all");
    const [products, setProducts] = useState<ProductsType[]>([]);

    const shuffledProducts = shuffleProducts();
    useEffect(() => {        
        const filteredProducts = shuffledProducts.filter(item => item.category === filter);        
        const ourProducts = filter !== "all" ? filteredProducts.slice(0, 6) : shuffledProducts.slice(0, 6);
        console.log(ourProducts);
        setProducts(ourProducts);
    }, [filter]);
    
    
    const categories = useMemo(() => [...new Set(shuffledProducts.map(i => i.category))].sort((a,b) => a.localeCompare(b)), []);
    
    const handleFilterClick = useCallback((category: string) => {
        setFilter(category);
    }, [setFilter]);

    return (
        <div>
            <div>
                <div className="flex justify-center md:gap-3 md:text-[20px] text-[14px] font-medium mb-5 font-inter">
                    <FilterButton label="All" onClick={() => handleFilterClick("all")} className={filter === "all" ? "bg-black text-white" : "bg-transparent"} />
                    {categories.map(cat => (
                        <FilterButton label={cat} onClick={() => handleFilterClick(cat)} className={filter === cat ? "bg-black text-white" : "bg-transparent"} />
                    ))}
                </div>
                <div className="flex w-full flex-wrap md:justify-between justify-center gap-y-5 px-[2%]">
                    <AnimatePresence mode="sync">
                        {products.map(item => (
                            <motion.div key={item.id} className="lg:w-[32%] md:w-[48%] w-[92%] h-[400px] relative rounded-[20px]" layout  // 💡 This line makes layout transitions smooth
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}>
                                <div className="w-full h-full">
                                    <img src={ProductBg} className="w-full h-full" alt="" /> 
                                </div>
                                <div className="w-full h-full flex flex-col justify-between absolute top-0">
                                    <div className="w-full h-[330px] flex flex-col items-center justify-between">
                                        <div className="w-[280px] h-[290px] flex items-center justify-center">
                                            <img src={`../public/productImages/${item.image}`} className="h-[80%]" alt={item.image} />
                                        </div>
                                    </div>
                                    <div className="w-[60%] h-[90px] mb-5 pl-2 font-inter">
                                        <b className="block text-[18px]">{item.name}</b>
                                        <b className="block">${item.price}</b>
                                    </div>
                                </div>
                                <div className="absolute bottom-2 md:right-5 right-3 w-[85px] h-[85px] bg-black flex justify-center items-center rounded-full">
                                    <ArrowUpRight size={70} color="white"/>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default ProductSection;