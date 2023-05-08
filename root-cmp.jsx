const { useState } = React

const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

import { AboutUs } from "./views/about.jsx";
import { BookIndex } from "./views/book-index.jsx";
import { Home } from "./views/home.jsx";
import { AppHeader } from "./cmps/app-header.jsx";
import { BookDetails } from "./views/book-details.jsx";
import { UserMsg } from "./cmps/user-msg.jsx";
import { BookEdit } from "./views/book-edit.jsx";
import { AddReview } from "./cmps/add-review.jsx";
// TODO: book edit, 

export function App() {
    // const [page, setPage] = useState('book')
    // function onSetPage(page) {
    //     setPage(page)
    // }
    return (
        <Router>
            <section className="app main-layout">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<AboutUs />} />
                        <Route path='/book' element={<BookIndex />} />
                        <Route path='/book/:bookId' element={<BookDetails />} />
                        <Route path="/book/edit/:bookId" element={<BookEdit />} />
                        <Route path="/book/edit" element={<BookEdit />} />
                    </Routes>
                </main>
                <UserMsg />
            </section>
        </Router>
    )
} 