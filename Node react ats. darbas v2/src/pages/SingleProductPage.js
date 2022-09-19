import {useEffect, useState} from 'react'
import { useNavigate, useParams } from "react-router-dom"

const SingleProductPage = () => {
    const {id} = useParams()
    
    const nav = useNavigate()

    const [product, setProduct] = useState(null)
   
   

    useEffect(() => {
      
      fetch('http://localhost:4000/getProduct/' + id)
        .then(res => res.json())
        .then(data => {
            setProduct(data.data)
            console.log(data)
          })
    }, [])

    function buy() {
        nav("/boughtProducts")
    }

  return (
    <div>
     
      {product && 
      <div>
        <div>          
          <img src={product.image} alt=""/>
        </div>         
      
        <div>
            <h1>{product.title}</h1>           
            <h1>Kaina: {product.price}$</h1>
            <button onClick={buy}>Buy</button>
        </div>
        
      </div>}
    </div>
  )
}

export default SingleProductPage
