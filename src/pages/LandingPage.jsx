import React from 'react'
import TapHere from '../assets/TapHere.png'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()

    const handleOnClick = () => {
        try {
            navigate('/home')
        } catch (error) {
            console.log("Some Error occured")
        }
    }

  return (
    <div className='justify-center'>
        <button onClick={handleOnClick}>
            <img src={TapHere} alt="Tap Here"/>
        </button>
    </div>
  )
}

export default LandingPage
