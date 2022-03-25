import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from '../../api/book';
import { IBookDetail } from '../../api/bookInterface';
import Loader from '../../common/Loader';

const Book = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [bookInfo, setBookInfo] = useState<IBookDetail>();

    const { bookId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            if (bookId) {
                await getBook(bookId).then(res => {
                    const bookData = res.data;
                    setBookInfo(bookData);
                }).catch(error => {
                    console.log(error);
                }).finally(() => {
                    setIsLoading(false);
                });
            }
        }
        fetchData();
    }, [bookId]);

    const renderBookItem = () => {
        return (
            <article className="card__book">
                <div className="card__content">
                    <h2>{bookInfo?.title}</h2>
                    <span>{bookInfo?.author}</span>
                    <span>{bookInfo?.year}</span>
                    <p className="card_link"><a href={bookInfo?.wiki_url } target="_blank" rel="noreferrer">Read more</a></p>
                </div>
            </article >
        );
    }

    return (
        <div>
            { isLoading ? <Loader /> : null }
            { bookInfo ? renderBookItem() : null }
        </div>
    );
};
export default Book;