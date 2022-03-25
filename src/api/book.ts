import axios from 'axios';

export const getBooks = () => {
    return axios.get(`https://the-dune-api.herokuapp.com/books/21`);
}

export const getBook = (bookId: string) => {
    return axios.get(`https://the-dune-api.herokuapp.com/books/id/${bookId}`);
}