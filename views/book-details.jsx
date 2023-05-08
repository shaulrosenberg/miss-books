import { LongTxt } from "../cmps/long-txt.jsx"
import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouterDOM


export function BookDetails() {

    const [book, setBook] = useState(null)
    const navigate = useNavigate()
    const params = useParams()
    console.log(params)

    // get id from params and render details

    useEffect(() => {
        loadBook()
    }, [])

    function loadBook() {
        bookService.get(params.bookId)
        .then(setBook)
        .catch(err => {
            console.log('Had issued in book details:', err);
            navigate('/car')
        })
    }

    function getColorClass() {
        let colorClass = ''
        if (book.listPrice.amount < 20) colorClass = 'green'
        else if (book.listPrice.amount > 150) colorClass = 'red'
    }

    function getYearDiff(pastDate = book.publishedDate) {
        const today = new Date()
        return today.getFullYear() - pastDate
    }

    function onBack() {
        navigate('/book')
    }


    if (!book) return <div>Loading...</div>

    return (
        <section className="book-details">
            <h1>Book Title: {book.title}</h1>
            <div className="book-img">
                <img src={book.thumbnail} alt="" />
                {book.listPrice.isOnSale && <h2 className="sale-icon">ON SALE</h2>}
            </div>

            {book.pageCount > 500 && <h5>Pages: {book.pageCount}(Serious Reading)</h5>}
            {book.pageCount > 200 && book.pageCount <= 500 && <h5>Pages: {book.pageCount}(Decent Reading)</h5>}
            {book.pageCount < 100 && <h5>Pages: {book.pageCount}(Light Reading)</h5>}
            {getYearDiff() > 10 && (<h5>published: {book.publishedDate}(Vintage)</h5>)}
            {getYearDiff() <= 1 && (<h5>published: {book.publishedDate}(New)</h5>)}
            <h5 className={getColorClass()}>Price: {book.listPrice.amount}</h5>
            <LongTxt txt={book.description} length={20} />
            <button onClick={onBack}>Back</button>
        </section>
    )

}