const menu = document.querySelector("nav");

//function for hiding the menu
function menuDisplay() {
    menu.classList.toggle("hide");
}

document.querySelector("#menu").addEventListener("click", menuDisplay);

//function for resizing
function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

window.addEventListener("resize", handleResize);

//opening up an image, used ChatGPT for this part :')
const gallery = document.querySelector(".gallery");
const modal = document.querySelector("dialog");
const modalImage = document.querySelector("#modal-image");
const closeBtn = modal.querySelector(".close-viewer");

gallery.addEventListener('click', (event) => {
    const clickedImage = event.target.closest('img');

    if (clickedImage) {
        const src = clickedImage.src.split('-')[0] + '-full.jpeg';
        modalImage.src = src;
        modalImage.alt = clickedImage.alt;

        modal.showModal();
    }
});

closeBtn.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});