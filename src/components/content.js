import React,{useState} from 'react'
import '../App.css';
import Leagues from './leagues';
import Standings from './standings';

const Content = () => {
    const [active, setActive] =useState(true);

  return (
    <div className='content-container'>
     <div className='tabs'>
        <div className='tab-league' onClick={()=>setActive(true)}>
            <h2 style={{color: active ? "red" : null}}>Leagues</h2>
        </div>
        <div className='tab-standings' onClick={()=>setActive(false)}>
           <h2  style={{color: !active ? "red" : null}}>standings</h2>
        </div>
     </div>

     {active ? <Leagues /> : <Standings/>}
    </div>
  )
}

export default Content;