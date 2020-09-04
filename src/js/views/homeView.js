import { DOMs } from "./base";

const generatePhotos = (photos) => {
    const photoSmalls = [];
    const photoBigs = [];
    photos.forEach((photo) => {
        const photoDOMString = `
        <div class="photos__box-${photo.width >= photo.height ? "small" : "big"}" data-id="${
            photo.id
        }">
        <img
            src="${photo.urls.regular}" alt="${photo.alt_description}"
        />
        </div>
        `;

        photo.width >= photo.height
            ? photoSmalls.push(photoDOMString)
            : photoBigs.push(photoDOMString);
    });
    return [...photoSmalls, ...photoBigs].join("");
};
export const renderPhotos = (photos) => {
    let markup = `<div class="photos__box">${generatePhotos(photos)}</div>`;

    DOMs.photos.insertAdjacentHTML("beforeend", markup);
};
