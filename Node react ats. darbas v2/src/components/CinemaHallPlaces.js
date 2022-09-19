import React from 'react'

const CinemaHallPlaces = ({place}) => {

    

    

  return (
    <div className='seat-number'>
        {place.seatNumber}
        <div ></div>        
        {/* <div>{place.price}$</div> */}      
    </div>
  )
}

export default CinemaHallPlaces
