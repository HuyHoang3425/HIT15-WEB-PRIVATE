let width = document.querySelector(".width");
let height = document.querySelector(".height");
let padding = document.querySelector(".padding");
let margin = document.querySelector(".margin");
let background = document.querySelector(".background");
let img = document.querySelector(".img");
let color = document.querySelector(".color");
let content = document.querySelector(".content");
let box = document.querySelector(".box");
let draw = document.querySelector(".draw");
let reset = document.querySelector(".reset")


draw.addEventListener("click", picture);
function picture() {

    console.log(width.value);
    box.style.width = `${width.value}`;
    box.style.height = `${height.value}`;
    box.style.padding = `${padding.value}`;
    box.style.margin = `${margin.value}`;
    box.style.backgroundImage = `url("${img.value}")`;
    box.style.backgroundRepeat = "no-repeat";
    box.style.backgroundPosition = "center";
    box.style.backgroundColor = `${background.value}`;
    box.style.color = `${color.value}`;
    box.innerHTML = content.value;
}
reset.addEventListener("click",()=>{
    location.reload();
});

