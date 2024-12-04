// *** LIGHTBOX ***
const x = document.querySelector("#lightbox");
x.addEventListener("click", function() {
    x.close();
    });
    const photos = document.querySelectorAll("[data-full-img]");

    photos.forEach(image => {
        image.addEventListener("click", function() {
            const fullImg = image.dataset.fullImg;
            const imgElement = x.querySelector("img");
            imgElement.src = fullImg;
            x.showModal();
        });
    });

