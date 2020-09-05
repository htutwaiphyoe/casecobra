export const DOMs = {
    photos: document.querySelector(".photos"),
};

export const loader = () => `<div class="loader">Loading...</div>`;
export const clearLoader = () =>
    document.querySelector(".loader").parentElement.removeChild(document.querySelector(".loader"));
