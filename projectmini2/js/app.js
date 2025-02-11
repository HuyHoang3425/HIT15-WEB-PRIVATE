
import { drawProduct } from "./drawProduct.js";
import { fetchAPI } from "./fetchAPI.js";
import { params } from "./variable.js";

drawProduct();

const inputSearch = document.querySelector(".product_search input");
const buttonSearch = document.querySelector("button");


//Search
function search() {
    params.q = inputSearch.value;
    drawProduct();
}
buttonSearch.addEventListener("click", () => {
    search();
})
inputSearch.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        search();
    }
})
//End Search

//Sort
const productSelect = document.querySelector("#sort");
productSelect.addEventListener("click", function () {
    switch (this.value) {
        case "default":
            params.order = "";
            params.sort = "";
            break;
        case "price-asc":
            params.order = "asc";
            params.sort = "price";
            break;
        case "price-desc":
            params.order = "desc";
            params.sort = "price";
            break;
        case "rating-desc":
            params.order = "desc";
            params.sort = `rating.rate`;
            break;
    }
    console.log(params.sort,params.order);
    drawProduct();
});

//End Sort

// Pagination
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const number_page = document.querySelector(".number_page");

next.addEventListener("click", function () {
    if(parseInt(params.page) < 3)
    {
        params.page = `${parseInt(params.page) + 1}`;
        number_page.innerHTML = params.page;
        drawProduct();
    }
});

prev.addEventListener("click", function () {
    if(parseInt(params.page) > 1)
    {
        params.page = `${parseInt(params.page) - 1}`;
        number_page.innerHTML = params.page;
        drawProduct();
    }
});
//End Pagination
