import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';

interface WindowDivProps {
  isOn: boolean;
}

const WindowDiv = styled.div<WindowDivProps>`
  width: 80px;
  height: 80px;
  margin: 20px;
  background-color: ${props => props.isOn ? '#eee' : '#333'};
  box-shadow: ${props => props.isOn ? '0 0 10px #fff' : "none"};
  transition: 0.2s;

  :hover {
    cursor: pointer;
  }
`

interface WindowProps {
  isEveryOn: boolean;
}

const Window: React.FC<WindowProps> = ({ isEveryOn }) => {
  const [isOn, setIsOn] = useState(false)

  useEffect(() => {
    setIsOn(isEveryOn)
  }, [isEveryOn, setIsOn])

  const handleClick = () => setIsOn(!isOn)

  return (
    <WindowDiv isOn={isOn} onClick={handleClick}/>
  )
}

export default memo(Window);