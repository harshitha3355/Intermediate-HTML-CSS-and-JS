function addImage(){
    const imageUrl = document.getElementById("galleryurl").value;
    if (!imageUrl) {
        alert("Please enter a valid url");
        return;
    }
    const gallery = document.getElementById("gallery");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    imageContainer.style.position = "relative";

    const img = document.createElement("img");
    img.src = imageUrl;
    imageContainer.alt= "gimage";

    const removeBtn = document.createElement("button");
    removeBtn.innerText= "-";
    removeBtn.classList.add("btnremove");
    removeBtn.onclick = function(){
        gallery.removeChild(imageContainer);
    }

    imageContainer.appendChild(img);
    imageContainer.appendChild(removeBtn);

    gallery.appendChild(imageContainer);
    document.getElementById("galleryurl").value = "";
}