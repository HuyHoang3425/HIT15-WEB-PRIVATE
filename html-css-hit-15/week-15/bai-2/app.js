const button = document.querySelector(".search-button");
const notification = document.querySelector(".notification");
const input = document.querySelector(".search-input");

async function fetchAPI(url){
        const response = await fetch(url);
        if(!response.ok)
        {
            notification.innerHTML =`
            <h2>Không tìm thấy</h2>
            `
            return;
        }
        const result = await response.json();
        return result;
};

function display()
{
    const name = input.value.trim();
    notification.innerHTML = "";
    if(name == "")
    {
        alert("vui lòng nhập tên pokemon cần tìm kiếm!");
        notification.classList.remove("backgroundNot");
    }
    const api = `https://pokeapi.co/api/v2/pokemon/${name}`
    fetchAPI(api)
        .then(data =>{
            notification.innerHTML =  `
               <div class="content">
                <img src="${data.sprites.front_default}"/>
                <div class="info">
                    <h3>${data.name}</h3>
                    <p><span>Weight:</span> ${data.weight /10} kg</p>
                    <p><span>Height:</span> ${data.height /10} m</p>
                    <p><span>Type:</span> ${data.types.map(t => t.type.name)}</p>
                </div>
               </div>
            `
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
