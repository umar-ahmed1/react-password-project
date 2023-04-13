import React from 'react'
import { Box, Flex, Stack, Text,AspectRatio } from '@chakra-ui/react';

export default function Tip({title,color,number,one,two,three,altone}) {
    const [isClicked,setIsClicked] = React.useState(false)
  return (
    <>
    {number % 2 === 0 ? (
    <Flex width="100%" align="center">
            <Flex
              cursor="pointer"
              width={{base:'60px',md:"100px"}}
              height={{base:'60px',md:"100px"}}
              borderRadius="full"
              border="1px solid grey"
              align="center"
              justify="center"
              mr={{base:1,md:3}}
              fontWeight={700}
              _hover={{ backgroundColor: color, opacity:0.9}}
              onClick={() => setIsClicked(!isClicked)}
            >
              Why?
            </Flex>
            <Box
              backgroundColor={color}
              flexGrow={1}
              height="100%"
              borderRadius={10}
              align="center"
              justify="center"
            >
              <Flex
                width="100%"
                justify="center"
                align="center"
                direction="column"
                p={1}
              >
                <Text fontWeight={700}>{title}</Text>
                {!isClicked && (<><Text>{one}</Text>
                <Text>{two}</Text>
                <Text>{three}</Text></>)}
                {isClicked && (<><Text>{altone}</Text></>)}
              </Flex>
            </Box>
          </Flex>
    ) : (
        <Flex width="100%" align="center">
        <Box
              backgroundColor={color}
              flexGrow={1}
              height="100%"
              borderRadius={10}
              align="center"
              justify="center"
            >
              <Flex
                width="100%"
                justify="center"
                align="center"
                direction="column"
                p={1}
              >
                <Text fontWeight={700}>{title}</Text>
                {!isClicked && (<><Text>{one}</Text>
                <Text>{two}</Text>
                <Text>{three}</Text></>)}
                {isClicked && (<><Text>{altone}</Text></>)}
              </Flex>
            </Box>
            <Flex
              cursor="pointer"
              width={{base:'60px',md:"100px"}}
              height={{base:'60px',md:"100px"}}
              borderRadius="full"
              border="1px solid grey"
              align="center"
              justify="center"
              mr={{base:1,md:3}}
              fontWeight={700}
              _hover={{ backgroundColor: color, opacity:0.9}}
              onClick={() => setIsClicked(!isClicked)}
            >
              Why?
            </Flex>
      </Flex>
    )}
    </>
  )
}
