import React, { useState } from 'react'
import memeData from './data'
// import imgs from '../profile.jpg'
// import img from '../images/dp.jpg'
const Header = () => {
    const [id, setImg] = useState("")

    function getMeme(){
      let memeArray = memeData;
      let random = Math.floor(Math.random() * memeArray.length)
      let imgs = memeArray[random].id
      console.log(imgs)
      setImg(imgs)
    }
  return (
    <div>
   <div>
   <button onClick={getMeme}>Click to generate images</button>
   </div>
    <p>{id}</p>
    </div>
  )
}

export default Header
