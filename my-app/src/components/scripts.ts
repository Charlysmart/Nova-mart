import { products } from "../JSON/products"

let sortedProducts = products.sort((a,b) => b.id - a.id);
export let LatestProduct = sortedProducts.slice(0, 12);
export let totalPages = Math.ceil(LatestProduct.length / 3);

export function shuffleProducts() {
    const copy = [...products];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); //random index
        [copy[i], copy[j]] = [copy[j], copy[i]]; //swap
    }
    return copy;
}
