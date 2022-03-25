import React, { useEffect, useState } from "react";
import { getBooks } from '../api/book';
import { IBookDetail } from '../api/bookInterface';
import BookList from "./book/BookList";
import Loader from '../common/Loader';

const Home = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [booksList, setBooksList] = useState<IBookDetail[]>([]);

    const fetchData = async () => {
        await getBooks().then(res => {
            const booksData = res.data;
            setBooksList(booksData);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const renderBooksList = () => {
        return booksList
          .map((book, i) => {
            return (
                <React.Fragment key={i}>
                    <BookList book={book} />
                </React.Fragment>
            );
        });
    };

    return (
        <section className="book__outer">
            { isLoading ? <Loader /> : null }
            <div className="wrapper">
                {renderBooksList()}
            </div>
        </section>
    );
};
export default Home;