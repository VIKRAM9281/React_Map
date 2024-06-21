import React from 'react'
import { pages } from '../Utils/constant'

const Navbar = () => {

  return (
    <div>
    <navbar>
        <ul>
{pages.map((item,ind)=>{
    <li>{item}</li>
})}
        </ul>
    </navbar>
    </div>
  )
}

export default Navbar
