// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const createGallery = createCardsImg(galleryItems);

function createCardsImg(arrObj) {
  let output = galleryItems
    .map(
      item => `
    <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}">
    </a>
  `
    )
    .join('');
  return output;
}
gallery.insertAdjacentHTML('beforeend', createCardsImg());
const ligthBox = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
  close: false,
});