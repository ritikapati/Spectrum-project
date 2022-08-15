import {Sidenav ,SidenavHeading, SidenavItem} from '@spectrum-web-components/sidenav';

import React from 'react'

const Sidenavigation = () => {
  return (
    <sp-Sidenav>
        <sp-SidenavHeading>TEXT FORMATTING</sp-SidenavHeading><br/>
            <sp-Sidenav-item value="Fontsize">Font Size</sp-Sidenav-item><br/>
            <sp-Sidenav-item value="FontFace">Font Face</sp-Sidenav-item><br/>
    </sp-Sidenav>
  )
}

export default Sidenavigation