// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');

const newGalleryListMarkup = createGalleryMarkup(galleryItems);

galleryListEl.insertAdjacentHTML('beforeend', newGalleryListMarkup);

function createGalleryMarkup(items) {
  return items
    .map(
      ({ original, preview, description }) =>
        `
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
     `
    )
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
