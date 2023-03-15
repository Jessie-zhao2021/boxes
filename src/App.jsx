import { useState } from 'react'
import './App.css'
import boxes from './boxes'
import Box from './Box'

function App() {
  const [squares, setSquares] = useState(boxes)
  function toggle(id){
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
          return square.id === id ? {...square, on: !square.on} : square
      })
  })
  //   setSquares(prevSquares => {
  //     const newSquares = []
  //     for(let i = 0; i < prevSquares.length; i++) {
  //         const currentSquare = prevSquares[i]
  //         if(currentSquare.id === id) {
  //             const updatedSquare = {
  //                 ...currentSquare,
  //                 on: !currentSquare.on
  //             }
  //             newSquares.push(updatedSquare)
  //         } else {
  //             newSquares.push(currentSquare)
  //         }
  //     }
  //     return newSquares
  // })
}

  

  const squareElement = squares.map(square=>(
    <Box key={square.id}
         id={square.id}
         on={square.on}
         toggle={toggle}
    />
  ))

  return (
       <main>
         {squareElement}
       </main>
  )
}

export default App
