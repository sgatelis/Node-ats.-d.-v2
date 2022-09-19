import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import mainContext from '../context/MainContext'


const SingleMovie = ({item, index}) => {  

  const {quantity} = useContext(mainContext)
  const nav = useNavigate()

  function movieInfo() {

    nav("/reservation/"+ index)

  }
    
  return (
    <div onClick={movieInfo} className="singleMovie" >
      <img src={item.image} alt=""/>
      <h1>{item.title}</h1>
      <p>Census: {item.census}</p>
      <p>Year: {item.year}</p>
      <p>Seats: {item.ocupiedSeats}/out of 50</p>
      {/* <p>Seats: {item.seats.length}/out of 50</p> */}
      {/* <p>Seats: {item[index].seats.map((x, i) => <p key={i}>{x.reserved.includes(true)}</p>
      )}/out of 50</p> */}
    </div>
  )
}

export default SingleMovie
