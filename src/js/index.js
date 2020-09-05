import Home from "./models/Home";
import * as homeView from "./views/homeView";
import Photo from "./models/Photo";
import * as photoView from "./views/photoView";
import { DOMs, loader, clearLoader, clearPhoto, removeScrollBar } from "./views/base";

const state = {
    homeScroll: 1,
    fetchData: false,
};

/*************************
 * HOME
 */
const homeHandler = async (type) => {
    try {
        DOMs.photos.insertAdjacentHTML("beforeend", loader());
        if (type === "scroll") {
            state.fetchData = true;
        }

        state.home = new Home(state.homeScroll);

        await state.home.getPhotos();
        clearLoader();
        state.home.photos.forEach((photo) => {
            homeView.renderPhotos(photo);
        });
        state.fetchData = false;
    } catch (err) {
        alert(err);
    }
};
window.addEventListener("load", homeHandler);

/*************************
 * SCROLL
 */
window.addEventListener("scroll", () => {
    if (!state.fetchData) {
        if (window.scrollY + window.innerHeight >= DOMs.photos.scrollHeight) {
            state.homeScroll += 1;
            homeHandler("scroll");
        }
    }
});

/***********************
 * Full Photo
 */

const fullPhotoHandler = async (id) => {
    try {
        state.photoDetail = new Photo(id);
        await state.photoDetail.getPhoto();
        console.log(state.photoDetail.photo);
        photoView.renderPhoto(state.photoDetail.photo);
        DOMs.details.style.display = "flex";
        removeScrollBar();
    } catch (err) {
        alert(err);
    }
};
DOMs.photos.addEventListener("click", (e) => {
    const id = e.target.parentElement.dataset.id;

    if (id) fullPhotoHandler(id);
});

document.querySelector(".details__close").addEventListener("click", () => {
    clearPhoto();
    DOMs.details.style.display = "none";
    removeScrollBar();
});
