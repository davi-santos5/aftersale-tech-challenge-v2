import styled from 'styled-components';

interface SwitchProps {
  isEveryOn: boolean;
}

const Switch = styled.button<SwitchProps>`
  background-color: transparent;
  border: none;
  outline: none;
  
  position: absolute;
  bottom: 0;
  right: 20px;
  font-size: 100px;
  
  color: ${props => props.isEveryOn ? '#eee' : '#000'};
  text-shadow: ${props => props.isEveryOn ? '0 0 20px  #fff' : "none"};
  transition: 0.2s;

  :hover {
    cursor: pointer;
    transform: scale(0.98)
  }
`

export default Switch;
