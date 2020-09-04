import Home from "./models/Home";

const state = {};

/*************
 * HOME
 */

const homeHandler = async () => {
    try {
        state.home = new Home(1);
        console.log(state.home);
        await state.home.getPhotos();
        console.log(state.home);
    } catch (err) {
        alert(err);
    }
};
window.addEventListener("load", homeHandler);
