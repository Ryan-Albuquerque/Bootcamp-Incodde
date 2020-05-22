setInterval(() => {
    const btnRemove = document.querySelectorAll("#delete")

    btnRemove.forEach(element => {
        element.addEventListener("click", (event)=>{
            event.preventDefault()
            event.target.parentNode.parentNode.removeChild(event.target.parentNode)  
        })
    });
}, 2000);


