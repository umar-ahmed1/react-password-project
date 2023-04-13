import React from 'react'
import { Box, Flex, Stack, Text } from '@chakra-ui/react';

export default function TipsComponent() {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      mt={5}
      ml={{ base: '0%', lg: '6%' }}
      mb={20}
    >
      <Flex
        direction="column"
        width={{ base: '70%', sm: '60%', md:'50%' }}
        align="center"
        justify="center"
      >
        <Flex
          width={{ base: '100%', sm: '90%' }}
          mb={5}
          align="center"
          justify="center"
          direction="column"
          textAlign="center"
        >
          <Text
            align="center"
            fontSize="30px"
            fontWeight={700}
            color="blue.400"
            mb={3}
          >
            Basic Password Practices To Follow
          </Text>
        </Flex>


      <Stack width='100%' spacing={5} fontSize={{base:'13px',sm:'14px',md:'15px'}}>
        <Flex height='120px' width='100%' align='center'>
          <Flex width='100px' height='90%' borderRadius='full' border='1px solid grey' align='center' justify='center' mr={3} display={{base:'none',md:'flex'}}>1</Flex>
          <Box backgroundColor='red.200' flexGrow={1} height='100%' borderRadius={10} align='center' justify='center'>
            <Flex width='100%' justify='center' align='center' direction='column' p={1}>
              <Text fontWeight={600}>Avoid using names or words found in the dictionary</Text>
              <Text>jack</Text>
              <Text>orange</Text>
              <Text>football</Text>
            </Flex>
          </Box>
        </Flex>
        <Flex height='120px' width='100%' align='center'>
          <Box backgroundColor='yellow.200' flexGrow={1} height='100%' borderRadius={10} mr={3} align='center' justify='center'>
            <Flex width='100%' justify='center' align='center' direction='column' p={1}>
              <Text fontWeight={600}>Avoid using names or words found in the dictionary</Text>
              <Text>jack</Text>
              <Text>orange</Text>
              <Text>football</Text>
            </Flex>
          </Box>
          <Flex width='100px' height='90%' borderRadius='full' border='1px solid grey' align='center' justify='center' display={{base:'none',md:'flex'}}>2</Flex>
        </Flex>
        <Flex height='120px' width='100%' align='center'>
          <Flex width='100px' height='90%' borderRadius='full' border='1px solid grey' align='center' justify='center' mr={3} display={{base:'none',md:'flex'}}>3</Flex>
          <Box backgroundColor='orange.200' flexGrow={1} height='100%' borderRadius={10} align='center' justify='center'>
            <Flex width='100%' justify='center' align='center' direction='column' p={1}>
              <Text fontWeight={600}>Avoid using names or words found in the dictionary</Text>
              <Text>jack</Text>
              <Text>orange</Text>
              <Text>football</Text>
            </Flex>
          </Box>
        </Flex>
        <Flex height='120px' width='100%' align='center'>
          <Box backgroundColor='green.200' flexGrow={1} height='100%' borderRadius={10} mr={3} align='center' justify='center'>
            <Flex width='100%' justify='center' align='center' direction='column' p={1}>
              <Text fontWeight={600}>Avoid using names or words found in the dictionary</Text>
              <Text>jack</Text>
              <Text>orange</Text>
              <Text>football</Text>
            </Flex>
          </Box>
          <Flex width='100px' height='90%' borderRadius='full' border='1px solid grey' align='center' justify='center' display={{base:'none',md:'flex'}}>4</Flex>
        </Flex>
        <Flex height='120px' width='100%' align='center'>
          <Flex width='100px' height='90%' borderRadius='full' border='1px solid grey' align='center' justify='center' mr={3} display={{base:'none',md:'flex'}}>5</Flex>
          <Box backgroundColor='blue.200' flexGrow={1} height='100%' borderRadius={10} align='center' justify='center'>
            <Flex width='100%' justify='center' align='center' direction='column' p={1}>
              <Text fontWeight={600}>Avoid using names or words found in the dictionary</Text>
              <Text>jack</Text>
              <Text>orange</Text>
              <Text>football</Text>
            </Flex>
          </Box>
        </Flex>
      </Stack>



      </Flex>
    </Flex>
  )
}
