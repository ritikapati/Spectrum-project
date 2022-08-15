import React, { useState } from 'react';
import { TextField , Button , Divider, Flex, View, Slider, TextArea,} from '@adobe/react-spectrum';
import './App.css';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() 
{
  const [text, setText] = useState('Ritika');
  const [txtsize,setTxtsize]=useState('40');
  return (
    <>
    <Navbar bg="dark" variant="light" className='nvbar'>
      WELCOME
    </Navbar>
  
    <section className='sidebar' style={{color:"white"}}>      
     <h4 >Text Formatting</h4>
      <br/>
      <Slider label="Font size  : " labelPosition='top' step="10"
          minValue={0} maxValue={100} defaultValue={40} onChange={setTxtsize}
          isFilled />
    </section> 

    <section className='main'>
    <Flex direction="column" gap="size-800" justifyContent="center" alignItems="center">
      <View>
        <TextField
          className="tft"
          onChange={setText}
          label="Your text" position="relative" style={{border: "crimson"}}/>
        
        <p style={{ fontSize: `${txtsize}px` }}>Mirrored text: {text}</p>
        <br />
        <br />

        <TextArea placeholder="text"/>
        <br/>
        <Button onPress={setTxtsize}>Change Size</Button>
      </View>
    </Flex>
    </section></>
 
  );
}

export default App;
