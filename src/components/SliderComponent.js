import React from 'react'
import { Text } from '@chakra-ui/react';

export default function SliderComponent(data) {
    console.log(data.data)
    const [index, setIndex] = React.useState(0);
    const texts = [
        {
            time:data.data.crack_times_display.online_throttling_100_per_hour,
            rate:"at a rate of 100 guesses per hour",
            type:"via a throttled online attack"
        },
        {
            time:data.data.crack_times_display.online_no_throttling_10_per_second,
            rate:"at a rate of 10 guesses per second",
            type:"via an unthrottled online attack"
        },
        {
            time:data.data.crack_times_display.offline_slow_hashing_1e4_per_second,
            rate:"at a rate of 1000 guesses per second",
            type:"via an offline attack"
        },
        {
            time:data.data.crack_times_display.offline_fast_hashing_1e10_per_second,
            rate:"at a rate of 1x10^10 guesses per second",
            type:"via an offline attack"
        },


    ]
  
    React.useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 4000);
      return () => clearInterval(interval);
    }, [texts.length]);
  
    return (
      <>
          <Text fontSize="30px" fontWeight={700}>
            {texts[index].time}
          </Text>
        <Text fontSize="13px">{texts[index].rate}</Text>
        <Text fontSize="13px">{texts[index].type}</Text>
      </>
    );
    
    
}
