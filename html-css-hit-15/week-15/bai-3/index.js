async function fetchAPI(url) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
};


fetchAPI("https://fakestoreapi.com/products")
    .then(data => {
        const list = document.querySelector(".list");
        const categories = {};

        data.forEach((item) => {
            if (!categories[item.category]) {
                const categoryDiv = document.createElement("div");
                const title = document.createElement("h2");
                title.style.marginBottom = '20px';
                const listItem = document.createElement("div");
                listItem.classList.add("listItem");
                title.innerHTML = item.category;
                categoryDiv.appendChild(title);
                categoryDiv.appendChild(listItem);
                list.appendChild(categoryDiv);
                categories[item.category] = listItem;
            }
            const productDiv = document.createElement("div");
            productDiv.classList.add("item");
            productDiv.innerHTML = `
                <div class="heart"><i class="fa-regular fa-heart"></i></div>
                <div class="share"><i class="fa-solid fa-share"></i></div>
                <img class="image" src="${item.image}">
                <div class="title">${item.title}</div>
                <div class="price">$${item.price}</div>
                <div class="rating">Rating: ${item.rating.rate} ( ${item.rating.count} reviews)</div>
                <button class="btn">Mua ngay</button>
            `;
            categories[item.category].appendChild(productDiv);
        });

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const item = document.querySelectorAll(".item");
        item.forEach(item => {
            item.addEventListener("click", () => {
                const div = document.createElement("div");
                const clickedTitle = item.querySelector(".title").textContent;
                const product = data.find(p => p.title === clickedTitle);
                if (product) {
                    div.innerHTML = `
                <div class="close">
                    <i class="fa-regular fa-circle-xmark"></i>
                </div>
                <div class="img">
                    <img src="${product.image}">
                </div>
                <div class="content">
                    <div class="title">${product.title}</div>
                    <div class="category">${product.category}</div>
                    <div class="desc">${product.description}</div>
                     <div class="rating">Rating: ${product.rating.rate} ( ${product.rating.count} reviews)</div>
                    <div class="price">$${product.price}</div>
                    <button class="btn-1">Thêm vào giỏ hàng</button>
                </div>
            `;
                    div.classList.add("info");
                }
                document.body.appendChild(overlay);

                list.appendChild(div);
                const close = document.querySelector(".close");
                close.addEventListener("click", function () {
                    list.removeChild(div);
                    document.body.removeChild(overlay);
                })
                

            });
        });

    })




