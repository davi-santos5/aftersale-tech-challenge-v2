import styled from 'styled-components';

interface SkyProps {
  isDay: boolean;
}

const Sky = styled.div<SkyProps>`
  width: 100vw;
  height: 95vh;
  background-color: ${props => props.isDay ? '#4e8dd4' : '#04151d'};

  display: flex;
  justify-content: center;
  align-items: flex-end;

  position: relative;
`

export default Sky;
