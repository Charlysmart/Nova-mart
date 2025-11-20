export type ProductsType = {
    id: number, 
    name: string, 
    price: number, 
    image: string,
    rating: number
}

export type FilterButtonType = {
    label: string,
    onClick : () => void
    className?: string ,
}

export type ControlButtonsProps = {
    label: React.ReactElement,
    className?: string ,
    onClick? : () => void,
    disabled? : boolean
}

export type State = {
    startIndex : number,
    endIndex : number,
    currentPage : number
}

export type Action = 
    | {type: "nextSlide"}
    | {type: "previousSlide"}