import React, { useCallback, useState } from "react";
import type { FilterButtonType } from "./types";
import { shuffleProducts } from "./scripts";

const FilterButton = React.memo(({label, onClick, className} : FilterButtonType) => {
    return (
        <button onClick={onClick} className={`px-[25px] py-3 rounded-[30px] ${className}`}>{label}</button>
    );
})

const ProductSection = () => {
    const [filter, setFilter] = useState<string>("all");
    
    const shuffledProducts = shuffleProducts();
    
    const filteredProducts = shuffledProducts.filter(item => item.category === filter);
    
    const ourProducts = filter !== "all" ? filteredProducts.slice(0, 6) : shuffledProducts.slice(0, 6);
    console.log(ourProducts);
    
    const categories = [...new Set(shuffledProducts.map(i => i.category))].sort((a,b) => a.localeCompare(b));
    
    const handleFilterClick = useCallback((category: string) => {
        setFilter(category);
    }, [setFilter]);

    return (
        <div>
            <div>
                <div>
                    <FilterButton label="All" onClick={() => handleFilterClick("all")} className={filter === "all" ? "bg-black text-white" : "bg-transparent"} />
                    {categories.map(cat => (
                        <FilterButton label={cat} onClick={() => handleFilterClick(cat)} className={filter === cat ? "bg-black text-white" : "bg-transparent"} />
                    ))}
                </div>
                <div>
                    {ourProducts.map(item => (
                        <div key={item.id}>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductSection;