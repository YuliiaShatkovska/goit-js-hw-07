import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const cardsMarkup = createGallaryCards(galleryItems);

function createGallaryCards(cards) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}""
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

galleryContainer.addEventListener("click", onGalleryImagesClick);

function onGalleryImagesClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" >
`);
  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

// document.addEventListener("keydown", (event) => {
//   if (event.code === "Escape") {
//     instance.close();
//   }
// });

// const createEl = galleryItems.forEach(function ({
//   preview,
//   original,
//   description,
// }) {
//   const galleryItemImg = document.createElement("img");
//   const galleryItemLink = document.createElement("a");
//   const galleryItem = document.createElement("li");

//   galleryItemImg.classList.add("gallery__image");
//   galleryItemImg.src = `${preview}`;
//   galleryItemImg.dataset.source = `${original}`;
//   galleryItemImg.alt = `${description}`;

//   //   console.log(galleryItemImg);

//   galleryItemLink.classList.add("gallery__link");
//   galleryItemLink.href = `${original}`;

//   //   console.log(galleryItemLink);

//   galleryItem.classList.add("gallery__item");
//   //   console.log(galleryItem);
// });
