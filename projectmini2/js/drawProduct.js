import { API_PRODUCT } from "./constant.js";
import { fetchAPI } from "./fetchAPI.js";
import { params } from "./variable.js";

export let totalPages;
export const drawProduct = ()=>{
    let api;
    let category;
    if(params.category != "")
    {
        category = `category=${params.category}`
        api = `${API_PRODUCT}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&${category}`
    }else
    {
        category = "";
         api = `${API_PRODUCT}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}&${category}`
    }
    console.log(api);
    fetchAPI(api)
    .then(data => {
        let products = data.map(item => {
            return `
            <div class="product_item">
                <div class="img">
                    <img src="${item.image}" alt="">
                </div>
                <div>
                    <div class="product_title">${item.title}</div>
                    <div class="product_decs">${item.description}</div>
                    <div class="product_price">${item.price}$</div>
                    <div class="product_rating">
                    <i class="fa-solid fa-star"></i>
                    ${item.rating.rate}
                    </div>
                    <div class="product_stock">count:${item.rating.count}</div>
                </div>
            </div>
            `
        })
        const product_list = document.querySelector(".product_list");
        product_list.innerHTML = products.join("");
    
    })
}
