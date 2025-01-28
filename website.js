const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
  ];
  
  const imageGallery = document.getElementById("image-gallery");
  
  images.forEach(image => {
    const img = document.createElement("img");
    img.src = image;
    img.alt = "Product Image";
    img.classList.add("gallery-image");
    imageGallery.appendChild(img);
  });
