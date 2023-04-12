import React from 'react'
import { Flex, Text } from '@chakra-ui/react';

export default function SliderComponent(props) {
    const [index, setIndex] = React.useState(0);
    const [texts,setTexts] = React.useState([])

    React.useEffect(() => {
      console.log(props.attackType)
      if(props.attackType === 'online'){
        setTexts([
          {
            time:props.data.crack_times_display.online_throttling_100_per_hour,
            rate:"at a rate of 100 guesses per hour",
            type:"via a throttled"
        },
        {
            time:props.data.crack_times_display.online_no_throttling_10_per_second,
            rate:"at a rate of 10 guesses per second",
            type:"via an unthrottled"
        },
        ])
      }
      else{
        setTexts([
          {
            time:props.data.crack_times_display.offline_slow_hashing_1e4_per_second,
            rate:"at a rate of 1000 guesses per second",
            type:"via a slow"
        },
        {
            time:props.data.crack_times_display.offline_fast_hashing_1e10_per_second,
            rate:"at a rate of 1x10^10 guesses per second",
            type:"via a fast"
        },
        ])
      }
    },[props.attackType,props.data])
  
    React.useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [texts.length]);
  
    return (
      <>
        {texts.length !== 0 && (
          <>
            <Text fontSize="30px" fontWeight={700}>
              {texts[index].time}
            </Text>
              <Text fontSize="14px">{texts[index].rate}</Text>
            <Flex>
              <Text fontSize="14px" mr={1}>{texts[index].type}</Text>
              <Text fontSize="14px" mr={1} fontWeight={700} color={props.attackType === 'online' ? 'blue.400' : 'red.400'}>{props.attackType}</Text>
              <Text fontSize="14px">attack</Text>
            </Flex>
          </>
        )}
      </>
    );
    
    
}
