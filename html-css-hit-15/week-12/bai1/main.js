const input = document.querySelector("input");
const button = document.querySelector("button");
const notification = document.querySelector(".notification");
const result = document.querySelector(".result");

button.addEventListener("click", function () {
    if (input.value.trim() === "") {
        notification.innerHTML = "Hãy nhập đúng chuỗi kí tự";
        result.innerHTML = "";
        return;
    }
    const arr = input.value.split("");
    const arrReverse = input.value.split("").reverse();
    result.innerHTML = "";
    let p = true;
    for (let i = 0; i < arr.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = arr[i];
        if (arr[i] === arrReverse[i]) {
            div.classList.add("box-e");
        }
        else {
            div.classList.add("box-w");
            p= false;
        }
        result.appendChild(div);
    }
    if (p == true) {
        notification.innerHTML = "Đây là palindrome!";
    }
    else {
        notification.innerHTML = "Đây không phải palindrome.";
    }
});

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        button.click(); // Giả lập sự kiện click
    }
});

