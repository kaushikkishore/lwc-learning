import { LightningElement } from "lwc";
const EXTERNAL_URL = "https://www.googleapis.com/books/v1/volumes?q=first";
export default class BookAppBasedOnExternalAPI extends LightningElement {
    connectedCallback() {
        this.fetchBooks();
    }

    async fetchBooks() {
        console.log(`fetching books`);
        try {
            const books = await fetch(EXTERNAL_URL);
            const booksJson = await books.json();
            console.log(`Books details `, books);
            console.log(`Books json `, booksJson);
        } catch (e) {
            console.error(e);
        }
    }
}
