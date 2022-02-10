import React, { useState } from 'react';
import {listElementsStyle, activeOsStyle} from './stylesheet'

const Installation = () => {
    const [activeOs, setActiveOs] = useState('ubuntu')
    return(
        <div style={{}}>
            <h1>Shortcut Installation</h1>
            <p1>For quick access to your latest motivation updates click the install
                shortcuts button and open our mini-app shortcut by clicking on the icon on your device's home screen.
            </p1>
            <div style={{width:'50%', marginTop:'2em'}}>
                <ul style={{display:'flex', justifyContent:'space-between'}}>
                    <li style={{...listElementsStyle, ...activeOs==='ubuntu'?activeOsStyle:{}}} onClick={() => setActiveOs('ubuntu')}>Ubuntu OS</li>
                    <li style={{...listElementsStyle, ...activeOs==='kali'?activeOsStyle:{}}} onClick={() => setActiveOs('kali')}>Kali Linux</li>
                    <li  style={{...listElementsStyle,...activeOs==='pi'?activeOsStyle:{}}} onClick={() => setActiveOs('pi')}>PI os</li>
                </ul>
            </div>
        </div>
    )
}
export default Installation