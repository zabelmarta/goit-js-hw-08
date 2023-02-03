// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// const gallery = document.querySelector('.gallery');
// const createGallery = createCardsImg(galleryItems);


// function createCardsImg(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
     
//     `<a class="gallery__item" href="${original}">
//     <img class="gallery__image" src="${preview}" alt="${description}"></a>`;
//     })
//     .join("");
// }

// const ligthBox = new SimpleLightbox(".gallery__item", {
//   captionsData: "alt",
//   captionDelay: 250,
//   close: false,
// });


// gallery.insertAdjacentHTML('beforeend', createGallery);

const galleryElement = document.querySelector('.gallery');

let galleryTemplate = '';
galleryItems.forEach(item => {
  galleryTemplate += `
    <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}">
    </a>
  `;
});

galleryElement.insertAdjacentHTML('beforeend', galleryTemplate);