import {Picker} from '@adobe/react-spectrum';
import { DropdownButton } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

function Dropdownss(){
    /*return(
        <Picker>Select the font styles</Picker>
    );*/
    

  return (
    <DropdownButton title="Font Styles" variant="warning">
      
        <Dropdown.Item href="#/action-1">Arial</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Calibri</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Times New Roman</Dropdown.Item>
      
    </DropdownButton>
  );
}


export default Dropdownss ;