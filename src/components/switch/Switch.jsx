import React, { useContext } from 'react'
// import { ThemeContext } from '../../theme/ThemeProvider';

import '@material/web/switch/switch.js';

import { MySwitch } from './Switch.style'

const Switch = (props) => {
  const {
    label,
    handleClick,
    checked
  } = props;

  return (
    <MySwitch>
      <p>{label}</p>
      <md-switch onClick={handleClick} />
    </MySwitch>
  )
}

export default Switch