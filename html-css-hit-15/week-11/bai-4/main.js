let input = document.querySelector(".input");
let table = document.querySelector(".table");
let btn = document.querySelector(".card-btn");
let exactly = document.querySelector("#exactly");
let wrong = document.querySelector("#wrong");
let result = document.querySelector(".result");
let a  = "";
btn.addEventListener("click",add);
function add()
{
    table.innerHTML = "";
    for(let i = 0;i < input.value.length;i++)
    {
        let div = document.createElement("div");
        div.innerHTML = input.value[i];
        div.classList.add("box");
        table.appendChild(div);
    }
    let i = -1;
    let e = 0;
    let w = 0;
    document.addEventListener("keydown",(event) => {
        console.log(event.key);
        let box = document.querySelectorAll(".box");
        i++;
        event.preventDefault();
            if(event.key == input.value[i])
            {
                box[i].classList.add("exactly_down");
                e++;
            }
            else{
                box[i].classList.add("wrong_down");
                w++;
            }
            exactly.innerHTML = e;
            wrong.innerHTML = w;
            if (i + 1 === input.value.length) {
                notification(e, w);
            }
    });
    
}
function notification(e, w) {
    if (e === input.value.length && w === 0) {
        result.innerHTML = "đúng rồi bạn ơi!";
    } else {
        result.innerHTML = "Bạn nhập sai rồi!";
    }
}



