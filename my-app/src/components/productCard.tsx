import { LatestProduct, totalPages } from "./scripts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useReducer } from "react";
import type { State, Action, ControlButtonsProps } from "./types";
import { useState } from "react";

// Initial state for the slide indexes
const init = {
    startIndex : 0,
    endIndex : 3,
    currentPage : 1
}

// For the control buttons in the latest products
const ControlButtons = ({ label, className, onClick, disabled } : ControlButtonsProps) => {
    return (
        <button style={{boxShadow: "inset 2.8px 2.8px 5.6px rgba(0, 0, 0, 0.15), 2.8px 2.8px 5.6px rgba(0, 0, 0, 0.25)"}} className={`w-14 h-14 rounded-full border border-gray-400 overflow-hidden absolute z-50 ${className}`} onClick={onClick} disabled = {disabled}>{label}</button>
    );
}

// function for handling useReducer
const reducer = ( state : State, action : Action ): State => {
    switch (action.type) {
        case "nextSlide":
            return { startIndex: state.startIndex + 3, endIndex: state.endIndex + 3, currentPage: state.currentPage < 4 ? state.currentPage + 1 : 1 }
        case "previousSlide":
            return { startIndex: Math.max(0, state.startIndex - 3), endIndex: Math.max(3, state.endIndex - 3), currentPage: state.currentPage > 1 ? state.currentPage - 1 : 1}    
        default:
            return state;
    }
}

const ProductCard = () => {
    const [state, dispatch] = useReducer(reducer, init ); //for handling the states of the slide indexes
    const { startIndex, endIndex, currentPage } = state; // destructured states
    const [slice, setSlice] = useState<any[]>([]); //sliced products state for mapping

    useEffect (() => {
        setSlice(LatestProduct.slice(startIndex, endIndex)) //setting the sliced products only when the indexes change
    }, [startIndex, endIndex]);  
    
    return (
        <div className="w-[1269px] relative h-[425px] flex flex-col items-center justify-center">
            <div className="h-[353px] mb-3 overflow-hidden">
                <ControlButtons className="left-2 top-1/3" label={<ChevronLeft size={50} />} onClick={() => dispatch({type: "previousSlide"})} disabled = {startIndex > 0 ? false : true} />
                <div className="w-[1200px] h-full flex gap-5 flex-nowrap overflow-hidden transition-transform duration-700 ease-in-out">
                    {slice.map(item => (
                        <div key={item.id} className="w-[387px] h-[353px] px-[43px] rounded-[20px] bg-gray-200 flex flex-col items-center flex-none hover:shadow-custom">
                            <img className="w-[200px] flex items-start h-[245px]" src={`/productImages/${item.image}`} alt={item.image} />
                            <div className="w-[247px] h-[90px] flex flex-col items-center justify-between">
                                <p className="font-medium font-inter text-[20px] text-center">{item.name}</p>
                                <p className="font-bold font-inter text-[22px]">${item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <ControlButtons className="right-2 top-1/3" label={<ChevronRight size={50} />} onClick={() => dispatch({type: "nextSlide"})} disabled = {endIndex <= 12 ? false : true} />
            </div>
            <div className="flex gap-4">
                {Array.from ({length : totalPages}).map((_, i) => ( //creates fake arrays for looping through the buttons depending on the total pages
                    <button key={i} className={`w-6 h-6 rounded-full ${i + 1 === currentPage ? "bg-black" : "bg-gray-300"}`} />
                ))}
            </div>
        </div>
    )
}

export default ProductCard;