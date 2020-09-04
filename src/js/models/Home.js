import axios from "axios";

export default class Home {
    constructor(page) {
        this.page = page;
        this.photos = [];
    }

    async getPhotos() {
        const photos = await axios({
            method: "GET",
            url: `https://api.unsplash.com/photos?page=${this.page}`,
            headers: {
                Authorization: "Client-ID hjmyqc6bOXPW8s0sGwjMc398i79EAt7KlFObLwN9VHE",
                "Accept-Version": "v1",
            },
        });

        this.photos.push(photos.data);
    }
}
