import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const newItem = galleryItems.reduce(
  (item, image) =>
    item +
    `<li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a>
</li>`,
  ''
);

gallery.innerHTML = newItem;

const lightbox = new SimpleLightbox('.gallery a', {
  nav: true,
  captionDelay: 250,
  captionsData: 'alt',
  close: true,
  enableKeyboard: true,
  docClose: true,
});