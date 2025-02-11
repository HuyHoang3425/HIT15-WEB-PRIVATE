import { API_PRODUCT } from "./constant.js";
import { drawProduct } from "./drawProduct.js";
import { fetchAPI } from "./fetchAPI.js";
import { params } from "./variable.js";
const pagination = document.querySelector(".pagination");

const category = document.querySelector(".product_category");
const exits = document.querySelector(".exits");
let product_length;
fetchAPI(API_PRODUCT)
    .then(data =>{
        const category_list = [];
        data.forEach(item =>{
            if(!category_list.includes(item.category))
            {
                category_list.push(item.category);
            }
        })
        category_list.forEach(item =>{
            const category_item = document.createElement("div");
            category_item.innerHTML = item;
            category_item.classList.add("category_item");
            category.appendChild(category_item);
        })
        const category_item = document.querySelectorAll(".category_item");
        category_item.forEach(item =>{
            item.addEventListener("click",function(){
                params.category = item.innerHTML;
                drawProduct();
                exits.classList.add("show");
                pagination.classList.add("hidden");
            })
        })
        //exits
        exits.addEventListener("click",()=>{
            params.category="";
            drawProduct();
            exits.classList.remove("show");
            pagination.classList.remove("hidden");
        })
    })
    
