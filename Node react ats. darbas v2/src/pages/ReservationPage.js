import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CinemaHallPlaces from '../components/CinemaHallPlaces'

import MainContext from '../context/MainContext'

const ReservationPage = () => {

    const {socket, user, setUser, movies} = useContext(MainContext)

    const {index} = useParams()

    const [seatIndex, setSeatIndex] = useState(null)
    const [ticketsAmount, setTicketsAmount] = useState(null)
    const [totalAmount, setTotalAmount] = useState(null)
    const [quantity, setQuantity] = useState(null)
    const [error, setError] = useState(false)
    const [seatsUpdate, setSeatsUpdate] = useState(null)
     

     const getClass = (checked, num) => {
     let result = checked === "" ? "hall" : "hall reserv"

     if(seatIndex === num) result += " border"
     return result
     
    }
  
  // useEffect(() => {
  //   // setQuantity(1)
  // }, [])

    let counter = 0
    let ticketCounter = quantity
    let seatCounter = seatsUpdate
    
    function buy() {       
      
      if (user.money > movies[index].seats[0].price && user.age >= movies[index].census){
       counter ++ 
       ticketCounter ++
       seatCounter ++
       
       const newOcupiedSeats = movies[index].ocupiedSeats + seatCounter
       let ticketsPrice = movies[index].seats[0].price * counter      
       let ticketsAmount = movies[index].seats[0].price * ticketCounter   
       
       setTicketsAmount(ticketsPrice)
       setTotalAmount(ticketsAmount)

       setSeatsUpdate(seatCounter)
       setQuantity(ticketCounter)
       socket.emit("reserve", {seatIndex, index, newOcupiedSeats})       

      } else {
        setError(true)
      }      

    }

        const updateUserMoney = {
          username: user.username,
          ticketsAmount
        }

    useEffect(() => {
        const options = {
          method: "POST",
          headers: {
          "content-type": "application/json"
          },
          body: JSON.stringify(updateUserMoney)
        }

        fetch("http://localhost:4000/updateMoney", options)
          .then(res => res.json())
          .then(data => {
            setUser(data.data)
          console.log(data)
        })    
        
    },[totalAmount])

  
        useEffect(() => {
          setQuantity(null)          
        }, [])

        useEffect(() => {
         setSeatsUpdate(null)
        }, [user])
 
     
  return (
    
    <div> 
      <div className='info'>
        <div className='d-flex'>Tickets buys: <div style={{fontSize: 
          20, color: "red", fontWeight: "bold"}}>{user.username} </div></div>  
         <div className='d-flex'>You bought <div style={{fontSize: 
          20, color: "red", fontWeight: "bold"}}>{quantity}</div>  tickets</div>
      </div>   
      
      <div className='toolbar d-flex'>

        <div>
          <p className='money'>Money:  {user.money.toFixed(2)}</p>
        </div>
        
        <div>
          <p className='amount'>Amount: {totalAmount}</p>
        </div>

        <div>
            <button className='buy-tickets'onClick={buy}>Buy Tickets</button>
        </div>          
        
      </div>      
      
      {error ? <p style={{ color: "red" }}>Jums per mažai metų arba neužtenka pinigų:)</p> : null}
            
      <div className='reservation'>
        {movies[index].seats.map((x, i) => <div className={getClass(x.reserved, i)} onClick={() => setSeatIndex(i)} key={i}>
          <CinemaHallPlaces place={x} key={i} />
        </div> 
        )}
      </div>      
     
     
    </div>
  )
}

export default ReservationPage
