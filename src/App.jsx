import React, {useState, useEffect} from 'react'

import logo from './logo.svg'

const App = () => {
  const [books, setBooks] = useState([])

  console.log('this message is going to load every time the component renders')

  useEffect(() => {
    const fetchData = () => {
      fetch('https://book-club-json.herokuapp.com/books')
        .then((response) => {
          console.log(`here's what our fetch request returns`, response)
          return response.json()
        })
        .then((books) => {
          console.log(`our json-ified response: `, books)
          return setBooks(books)
        })
    }
    fetchData()
  }, [])

  console.log(`the books array in our state`, books)

  return <div>Hello Rebecca</div>
}

export default App
