function burger(event) {
    let burger = document.querySelector(".burger");
    burger.classList.toggle("toggle");

    const image = event.currentTarget.querySelector('img');
    
    if (burger.classList.contains('toggle')) {
        image.src = "./public/image/close_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
      } else {
        image.src = "./public/image/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
      }

    document.querySelector(".nav").classList.toggle("open");
}


function openModal() {
    document.querySelector(".modal-window").classList.add("open");
}

function closeModal() {
    document.querySelector(".modal-window").classList.remove("open");
}

function removeFREDUROV() {
    document.querySelector(".profile").classList.add("close");
    document.querySelector(".modal-window").classList.remove("open");
}