const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click",function()
{
    const input = document.querySelector("input");
    const task = input.value.trim();
    if(task)
    {
        const div = document.createElement("div");
        div.innerHTML = `
          <p>${task}</p>
          <button class="delete_btn">Delete</button>
        `
        div.classList.add("child-list"); 
        list.appendChild(div);
        input.value = ''; 
        div.querySelector('.delete_btn').addEventListener('click', function () {
            list.removeChild(div);
          });
    }
    else{
        alert("Vui lòng nhập nhiệm vụ!")
    }

})
