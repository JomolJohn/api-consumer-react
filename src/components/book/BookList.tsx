import { Link } from "react-router-dom";
import { IBookDetail } from '../../api/bookInterface';
import './Book.css';

export interface IBookProps {
    book: IBookDetail;
}

const BookList = (props: IBookProps) => {

    return (
        <>
            <article className="card">
                <div className="card__content">
                    <h2>{props.book.title}</h2>
                    <span>{props.book.author}</span>
                    <span>{props.book.year}</span>
                    <p className="card_link"><Link to={`book/${props.book.id}`}>Read more</Link></p>
                </div>
            </article>
        </>
    );
};
export default BookList;