import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Flex align='center' justify='space-between' height='70px' borderBottom='2px solid grey'>
        <Flex width='6%' height='100%' align='center' justify='center' display={{base:'none',lg:'flex'}}>
            <Text ml={3} fontSize='20px' fontWeight={700}>CPSC 329</Text>
        </Flex>
        <Flex flexGrow={1} justify='center' align='center' height='100%' textAlign='center'>
            <Text fontSize={{base:'20px',md:'30px',lg:'40px'}} fontWeight={700} color='blue.400'>The Ultimate Password Strength Checker</Text>    
        </Flex>    
    </Flex>
  )
}
