let input = document.getElementById("addToDo");
let list = document.querySelector("ul");
let trash = document.querySelector("span").querySelector(".fa-trash");


input.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        if (input.value !== '') {
            let element = document.createElement("li");
            element.innerHTML = `
                <span><i class="fa fa-trash"></i></span> ${input.value}
            `
            list.appendChild(element);
            input.value = '';

            deleteTask();
        }
    }
})

const deleteTask = () => {
    for(let item of list.children) {
        const buttonTrash = item.children[0].children[0];
        buttonTrash.addEventListener('click', () => item.remove());
    }
}
deleteTask();