import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { books } from './books'
import Book from './Book'

const BookList = () => {
  return (
    <>
      <h1>best selling books</h1>
      <section className="bookList">
        {books.map((book) => {
          return <Book {...book} key={book.id} />
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
