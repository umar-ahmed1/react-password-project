import { Box, Flex, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function Password() {
    var zxcvbn = require('zxcvbn');
    const [password,setPassword] = React.useState('')
    const [passwordCrack,setPasswordCrack] = React.useState(null)

    const handlePasswordChange = (formPassword) => {
        setPassword(formPassword)
        setPasswordCrack(zxcvbn(formPassword))
        console.log(passwordCrack)
    }

  return (
    <> 
    <Flex direction='column' justify='center' align='center' mt={20} ml='6%'>
        <Flex direction='column' width='25%' align='center' justify='center'>
            <Flex width='70%'>
                <Text align='center' fontSize='30px' fontWeight={700} color='blue.400'>How Secure Is Your Password?</Text>
            </Flex>
            <Input
                mt={4}
                value={password}
                border='2px solid'
                height='50px'
                borderColor='black.200'
                placeholder="Enter password"
                fontSize='20px'
                onChange={(e) => handlePasswordChange(e.target.value)}
                textAlign='center'
            >
            </Input>
            <Flex width='100%' align='flex-start' height='13px'>
                {password && passwordCrack.score >= 0 && <Box backgroundColor='red.500' height='100%' width='20%'></Box>}
                {password && passwordCrack.score >= 1 && <Box backgroundColor='orange.400' height='100%' width='20%'></Box>}
                {password && passwordCrack.score >= 2 && <Box backgroundColor='yellow.400' height='100%' width='20%'></Box>}
                {password && passwordCrack.score >= 3 && <Box backgroundColor='green.400' height='100%' width='20%'></Box>}
                {password && passwordCrack.score >= 4 && <Box backgroundColor='blue.400' height='100%' width='20%'></Box>}
            </Flex>
            <Flex border='1px solid gray' width='100%' height='40px' align='center' justify='center'>
                <Flex>
                    <Text fontSize='20px'>Strength:</Text>
                    <Text ml={2} fontSize='20px'>
                        {password && passwordCrack.score === 0 && 'Very Weak'}
                        {password && passwordCrack.score === 1 && 'Weak'}
                        {password && passwordCrack.score === 2 && 'Medium'}
                        {password && passwordCrack.score === 3 && 'Strong'}
                        {password && passwordCrack.score === 4 && 'Very Strong'}
                    </Text>
                </Flex>
            </Flex>

            <Stack align='center' mt={4}>
                  <Text>Estimated time to crack your password:</Text>
                  {passwordCrack && <Text fontSize='30px' fontWeight={700}>{passwordCrack.crack_times_display.online_throttling_100_per_hour}</Text>}
                  <Text fontSize='13px'>at a rate of 100 guesses per hour</Text>  
                  <Text fontSize='13px'>via an online attack</Text>
            </Stack>   

        </Flex>
    </Flex>
    </>
  )
}
