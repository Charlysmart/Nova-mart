import { products } from "../JSON/products"

let sortedProducts = products.sort((a,b) => b.id - a.id);
export let LatestProduct = sortedProducts.slice(0, 12);
export let totalPages = Math.ceil(LatestProduct.length / 3);
