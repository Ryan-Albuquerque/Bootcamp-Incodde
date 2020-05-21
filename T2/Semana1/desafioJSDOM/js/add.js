const buttonAdd = document.querySelector("#add>button");
const modalAdd = document.querySelector(".modalAdd");
const closeModalAdd = document.querySelector("#closeModalAdd");

let index = [

]

const mainUsers = document.querySelector('.mainUsers')

const add = document.querySelector(".modalAddFooter button");

buttonAdd.addEventListener("click", () => {
  modalAdd.style.display = "block";
});

closeModalAdd.addEventListener("click", () => {
  modalAdd.style.display = "none";
});

add.addEventListener("click", () => {
  const name = document.querySelector("#inputName");

  const book = document.querySelector("#inputBook");

  const list = ()=>{
      return`
        <div class="texts">
            <h4>${name.value}</h4>
            <h6>Livro: ${book.value}</h6>
        </div>
        <button id="delete" type="submit">X</button>
      
    `}

    index.push(list())

    document.querySelector(".mainUsers").value = ""
    mainUsers.innerHTML = ""
    index.forEach(element => {

        const user = document.createElement("div")

        user.classList.add('user')

        user.innerHTML = element

        mainUsers.appendChild(user)
    });
    
});
