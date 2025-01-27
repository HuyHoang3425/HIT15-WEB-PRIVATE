const button = document.querySelector("button");
const input = document.querySelector("textarea");
const date = document.querySelector(".time");
const note = document.querySelector(".note");
const list = document.querySelector(".list");

button.addEventListener("click", () => {
    if (input.value.trim() === "") {
        alert("Bạn vui lòng hãy nhập nội dung!");
    } else if (date.value.trim() === "") {
        alert("Bạn vui lòng hãy nhập thời gian!");
    }
    else {
        const task = document.createElement("div");
        task.classList.add("task");
        const formattedDate = new Date(date.value);
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        const formattedDateStr = formattedDate.toLocaleDateString('vi-VN', options);
        task.innerHTML = `
    <div class="row">
        <div class="text-input">
            <div class="dots"></div>
            <div class="text-input-2"><p>${input.value}</p></div>
        </div>
        <div class="item-date">📅${formattedDateStr}</div>
        <div class="tag">🏷️${note.value}</div>
        <div class="btn">
            <button class="complete">Complete</button>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    </div>
    `;
        input.value = "";
        date.value = "";
        note.value = "";
        list.appendChild(task);

        const longText = task.querySelector(".text-input p");
        const longDiv = task.querySelector(".text-input-2");
        const dots = task.querySelector(".dots");

        const range = document.createRange();
        range.selectNodeContents(longText);
        const rect = range.getBoundingClientRect();
        const height = rect.height;
        let expanded = false;
        if (height > 55) {
            dots.classList.add("show");
            dots.onclick = () => {
                if (expanded) {
                    longDiv.style.height = "55px";
                    dots.innerHTML = "";
                    dots.classList.remove("up");
                    longDiv.classList.remove("expanded");
                } else {
                    longDiv.style.height = height + "px";
                    dots.innerHTML = `<i class="fa-solid fa-caret-up"></i>`;
                    dots.classList.add("up");
                    longDiv.classList.add("expanded");
                }
                expanded = !expanded;
            };
        }
        //complete
        const completeButton = task.querySelector(".complete");
        completeButton.addEventListener("click", () => {
            if (completeButton.innerHTML === "Complete") {
                completeButton.innerHTML = "Undo";
                longText.classList.add("done");
            } else {
                completeButton.innerHTML = "Complete";
                longText.classList.remove("done");
            }
        });

        // edit
        const textInput = task.querySelector(".text-input");
        const editButton = task.querySelector(".edit");
        editButton.addEventListener("click", () => {
            const longText = textInput.querySelector("p");
            let test = true;
            if (editButton.innerHTML === "Edit") {
                const newInput = document.createElement("textarea");
                newInput.value = longText.textContent;
                newInput.style.resize = "none";
                newInput.rows = 3;
                longText.replaceWith(newInput);
                editButton.innerHTML = "Save";
                editButton.classList.add("save");
                editButton.classList.remove("edit");
            } else if (editButton.innerHTML === "Save") {
                const textarea = textInput.querySelector("textarea");
                const newParagraph = document.createElement("p");
                newParagraph.innerHTML = textarea.value;
                textarea.replaceWith(newParagraph);
                editButton.innerHTML = "Edit";
                editButton.classList.remove("save");
                editButton.classList.add("edit");
                const range = document.createRange();
                range.selectNodeContents(newParagraph);
                const rect = range.getBoundingClientRect();
                const height = rect.height;
                let expanded = false;
                console.log(height);
                if (height > 55 && test == true) {
                    dots.classList.add("show");
                    dots.onclick = () => {
                        if (expanded) {
                            longDiv.style.height = "55px";
                            dots.innerHTML = "";
                            dots.classList.remove("up");
                            longDiv.classList.remove("expanded");
                        } else {
                            longDiv.style.height = height + "px";
                            dots.innerHTML = `<i class="fa-solid fa-caret-up"></i>`;
                            dots.classList.add("up");
                            longDiv.classList.add("expanded");
                        }
                        expanded = !expanded;
                    };
                } else {
                    dots.classList.remove("show");
                }
            }
        });


        //delete
        const deleteButton = task.querySelector(".delete");
        deleteButton.addEventListener("click", () => {
            list.removeChild(task);
        });
    }
});

