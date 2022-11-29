import React, {useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'

const App = () => {
  const [books, setBooks] = useState([])

  console.log('this message is going to load every time the component renders')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        console.log(`here's what our fetch request returns`, response)

        const books = await response.json()
        console.log(`our json-ified response: `, books)
        setBooks(books)
      } catch (errors) {
        console.log(errors)
      }
    }

    fetchData()
  }, [])

  console.log(`the books array in our state`, books)

  return (
    <>
      <BooksContainer books={books} />
    </>
  )
}

export default App
