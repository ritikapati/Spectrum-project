import {Slider } from '@adobe/react-spectrum';
import { ColorWheel } from '@react-spectrum/color';
import Dropdownss from './Dropdown';

import React from 'react'

const Sidenavigation = () => {
  return (
    <section className='sidebar' style={{color:"white"}}>      
     <h4 >Text Formatting</h4>
      <br/>
      <Slider label="Font size  : " labelPosition='top' step="10"
          minValue={0} maxValue={100} defaultValue={40} onChange={setTxtsize}
          isFilled /><br/><br/><br/>
          <label id="lab1">Select the font color:</label>
          <ColorWheel aria-labelledby="lab1" size={100} onChange={setColor} value={color}/>
          <label id="dropbtn">Select the Font Style</label>
          <Dropdownss id="dropbtn"/>
    </section>
  )
}

export default Sidenavigation