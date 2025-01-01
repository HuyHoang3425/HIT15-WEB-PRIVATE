let button = document.querySelector(".card_btn");
let input = document.querySelector("input");
let table = document.querySelector(".table");
let even = document.querySelector("#even");
let odd = document.querySelector("#odd");
let prime_1 = document.querySelector("#prime");

function prime(a)
{
    if(a < 2) return false;
    for(let i= 2;i <= Math.sqrt(a);i++)
    {
        if(a % i == 0) return false;
    }
    return true;
}
function sinhso()
{

    table.innerHTML = "";
    even.innerHTML = "0";
    odd.innerHTML = "0";
    prime_1.innerHTML = "0";
   
    let e = 0;
    let o = 0;
    let p = 0;
    let a = parseInt(input.value);

    if (isNaN(a) || a === "") {
        alert("Vui lòng nhập một số!");
        return;
    }
    for(let i = 0;i < a;i++)
    {
        let x = document.createElement("div");
        x.innerHTML = i;
        if(i % 2 == 0)
        {
            x.classList.add("even_number");
            e++;
        }
        else if(i % 2 == 1)
        {
            x.classList.add("odd_number");
            o++;
        }
        else{
            alert("Vui lòng nhập số!");
        }
        if(prime(i)){
            x.classList.add("prime_number");
            p++;
        }
        table.appendChild(x);
    }
    even.innerHTML = e;
    odd.innerHTML = o;
    prime_1.innerHTML = p;
   
    
}
button.addEventListener("click",sinhso);