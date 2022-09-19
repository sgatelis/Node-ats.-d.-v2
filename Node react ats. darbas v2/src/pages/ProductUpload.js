import {useRef} from 'react'
import {useNavigate} from "react-router-dom"

const ProductUpload = () => {

    const imageRef = useRef()
    const titleRef = useRef()
    const priceRef = useRef()

    const nav = useNavigate()


    function upload() {

        const product = {
            image: imageRef.current.value,
            title: titleRef.current.value,
            price: priceRef.current.value
        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        }

        fetch("http://localhost:4000/productUpload", options)
            .then(res => res.json())
            .then(data => {
                console.log(data) 
                
            })
             nav("/productsList")  
    } 

  return (
    <div>
          <div>
              <input ref={imageRef} type="text" placeholder='image url' />
              <input ref={titleRef} type="text" placeholder='title' />
              <input ref={priceRef} type="number" placeholder='price' />

              <button onClick={upload}>Upload</button>
              
          </div>
    </div>
  )
}

export default ProductUpload
