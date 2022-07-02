import React from 'react'
import '../App.css';
import SportsFootballSharp from '@mui/icons-material/SportsFootballSharp';
const Navbar = () => {
  return (
    <div className='navbar'>
     <h1>Football MatchBoard</h1>
     <SportsFootballSharp sx ={{fontSize:28}} className='icon'/>
    </div>
  )
}

export default Navbar;