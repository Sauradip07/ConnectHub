import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const [roomCode, setroomCode] = useState('');
    const navigate = useNavigate();
    const handleFromSubmit = (e) =>{
        e.preventDefault();
        navigate(`/room/${roomCode}`)
    }
    useEffect(() => {
      const appID = process.env.REACT_APP_APPID;
      const serverSecret = process.env.REACT_APP_SECRET_KEY;
      console.log("App ID:", appID);
      console.log("Server Secret:", serverSecret);
    
    })
    

    return (
      <div className='home-page'>
        <form onSubmit={handleFromSubmit} className='form'>
          <div>
              <h1>Home Page </h1>
              <label>Enter Room Code </label>
              <input value={roomCode} onChange={(e)=>{setroomCode(e.target.value)}} 
              input={roomCode} 
              type="text" 
              placeholder='Enter Room Code' 
              required/>
          </div>
          <button type='submit'> Enter Room</button>
        </form>
      </div>
  )
}

export default HomePage
