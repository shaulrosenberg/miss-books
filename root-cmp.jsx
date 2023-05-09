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
import { AppFooter } from "./cmps/app-footer.jsx";
import { BookAdd } from "./views/book-add.jsx";

export function App() {
    return (
        <Router>
            <section className="app main-layout">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<AboutUs />} />
                        <Route path='/book' element={<BookIndex />}>
                            <Route path="add" element={<BookAdd />}/> 
                        </Route>
                        <Route path='/book/:bookId' element={<BookDetails />} />
                        <Route path="/book/edit/:bookId" element={<BookEdit />} />
                        <Route path="/book/edit" element={<BookEdit />} />
                    </Routes>
                </main>
                <UserMsg />
                <AppFooter />
            </section>
        </Router>
    )
} 