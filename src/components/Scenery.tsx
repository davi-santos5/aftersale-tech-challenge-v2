import React, { memo, useState } from 'react';
import styled from 'styled-components';

import Sky from './Sky';
import Building from './Building';
import Window from './Window';
import Switch from './Switch';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`
const Ground = styled.div`
  width: 100vw;
  height: 5vh;
  background-color: #3d3d3d;
`
//creating array to generating windows trough map
const NUMBER_OF_WINDOWS:Number = 12; 
const windows: Array<any> = Array.from(new Array(NUMBER_OF_WINDOWS), value => 0);

interface SceneryProps {
  sunriseSunset: {sunrise: string, sunset: string};
}

const Scenery: React.FC<SceneryProps> = ({sunriseSunset}) => {
  const [isEveryOn, setIsEveryOn] = useState(false)

  const { sunrise, sunset } = sunriseSunset;
  
  //converting api timing in minutes
  const getTimeInMinutes = (time:any) => {
    if (!time) return 0;
    let hours = Number(time.match(/^(\d+)/)[1]);
    let minutes = Number(time.match(/:(\d+)/)[1]);
    let AMPM = time.match(/\s(.*)$/);

    if (AMPM) {
      if (AMPM[1] === "PM" && hours < 12) hours = hours + 12;
      if (AMPM[1] === "AM" && hours === 12) hours = hours - 12;
    }

    minutes += hours * 60;
    return minutes;
  };

  //getting UTC current time in minutes
  const date = new Date()
  const hours = date.getUTCHours()
  const minutes = date.getUTCMinutes()
  const timeNowInMinutes = (hours * 60) + minutes; 

  const sunriseInMinutes = getTimeInMinutes(sunrise);
  const sunsetInMinutes = getTimeInMinutes(sunset);

  //checking if is day or night
  const isDay = (timeNowInMinutes > sunriseInMinutes && timeNowInMinutes < sunsetInMinutes)

  return (
    <Wrapper>
      <Sky isDay={isDay} >
        <Building>
         {windows.map((window: any, index: number) => (
            <Window key={`window${index}`} isEveryOn={isEveryOn} />
          ))}
        </Building>
        <Switch isEveryOn={isEveryOn} onClick={() => setIsEveryOn(!isEveryOn)}>
          <i className="fas fa-lightbulb"></i>
        </Switch>
      </Sky>
      <Ground />
    </Wrapper>
  )
}

export default memo(Scenery);