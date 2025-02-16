const button = document.querySelector(".search-button");
const notification = document.querySelector(".notification");
const input = document.querySelector(".search-input");

async function fetchAPI(url){
        const response = await fetch(url);
        const result = await response.json();
        return result;
};

function display()
{
    const country = input.value.trim();
    notification.innerHTML = "";
    if(country == "")
    {
        alert("vui lòng nhập tên nước cần tìm kiếm!");
    }
    const api = `https://restcountries.com/v3.1/name/${country}`
    fetchAPI(api)
        .then(data =>{
            if (data.status == "404") {
                notification.innerHTML = `
                <h2>Không tìm thấy</h2>`
            }
            else
            {
            notification.innerHTML =  `
             <div class="content">
                <img src="${data[0].flags.svg}"/>
                <div class="info">
                    <h2>${data[0].name.common}</h2>
                    <p><span>Region:</span> ${data[0].region}</p>
                    <p><span>Capital:</span> ${data[0].capital}</p>
                    <p><span>Population:</span> ${data[0].population}</p>
                </div>
            `
            }
        }) 
        input.value = "";    
}
button.addEventListener("click",function()
{
    display();
})
input.addEventListener("keydown",function(e){
    if(e.key == "Enter")
    {
        display();
    }
})
