import axios from 'axios';

const API_URL = 'https://the-dune-api.herokuapp.com/';

export const getBooks = () => {
    return axios.get(`${API_URL}books/21`);
}

export const getBook = (bookId: string) => {
    return axios.get(`${API_URL}books/id/${bookId}`);
}