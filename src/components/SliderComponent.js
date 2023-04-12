import React from 'react'
import { Text } from '@chakra-ui/react';

export default function SliderComponent() {

    const [index, setIndex] = React.useState(0);
    const texts = ["abc", "bcd", "def"];
  
    React.useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [texts.length]);
  
    return <h1>{texts[index]}</h1>;
}
