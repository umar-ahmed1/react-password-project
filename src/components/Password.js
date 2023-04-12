import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import SliderComponent from './SliderComponent';

export default function Password() {
  var zxcvbn = require('zxcvbn');
  const [password, setPassword] = React.useState('');
  const [passwordCrack, setPasswordCrack] = React.useState({});
  const [show, setShow] = React.useState(false);
  const [strengthColor,setStrengthColor] = React.useState('black.100')

  const handlePasswordChange = formPassword => {
    setPassword(formPassword);
    setPasswordCrack(zxcvbn(formPassword));
  };

  React.useEffect(() => {
    console.log(password);
    console.log(passwordCrack);
  }, [password, passwordCrack]);

  React.useEffect(() => {
    if (password) {
        if (passwordCrack.score == 0) setStrengthColor('red.500')
        else if (passwordCrack.score == 1) setStrengthColor('orange.400')
        else if (passwordCrack.score == 2) setStrengthColor('yellow.400')
        else if (passwordCrack.score == 3) setStrengthColor('green.400')
        else if (passwordCrack.score == 4) setStrengthColor('blue.400')
    }
  }, [passwordCrack]);

  return (
    <>
      <Flex direction="column" justify="center" align="center" mt={20} ml={{base:'0%',lg:"6%"}}>
        <Flex direction="column" width={{base:'50%',sm:'40%',md:'30%',lg:"25%"}} align="center" justify="center">
          <Flex width={{base:'100%',sm:"70%"}}>
            <Text
              align="center"
              fontSize="30px"
              fontWeight={700}
              color="blue.400"
            >
              How Secure Is Your Password?
            </Text>
          </Flex>
          <InputGroup
            height="50px"
            borderRadius={7}
            border="2px solid"
            borderColor="black.200"
            position="relative"
            mt={6}
          >
            <Input
              textAlign="center"
              type={show ? 'text' : 'password'}
              value={password}
              border="none"
              placeholder="Enter password"
              fontSize={{base:'15px',md:'17px',lg:'20px'}}
              height="100%"
              onChange={e => handlePasswordChange(e.target.value)}
            ></Input>
            <InputRightElement width="4rem" height="100%" right={0}>
              <Button h="100%" width="100%" onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Flex width="100%" align="flex-start" height="13px">
            {password && passwordCrack.score >= 0 && (
              <Box backgroundColor="red.500" height="100%" width="20%"></Box>
            )}
            {password && passwordCrack.score >= 1 && (
              <Box backgroundColor="orange.400" height="100%" width="20%"></Box>
            )}
            {password && passwordCrack.score >= 2 && (
              <Box backgroundColor="yellow.400" height="100%" width="20%"></Box>
            )}
            {password && passwordCrack.score >= 3 && (
              <Box backgroundColor="green.400" height="100%" width="20%"></Box>
            )}
            {password && passwordCrack.score >= 4 && (
              <Box backgroundColor="blue.400" height="100%" width="20%"></Box>
            )}
          </Flex>
          <Flex
            border="1px solid gray"
            width="100%"
            height="40px"
            align="center"
            justify="center"
          >
            <Flex>
              <Text fontSize={{base:'13px',sm:'17px',md:'20px'}} fontWeight={700}>Strength:</Text>
              <Text ml={2} fontSize={{base:'13px',sm:'17px',md:'20px'}} fontWeight={700} color={strengthColor}>
                {password && passwordCrack.score === 0 && 'Very Weak'}
                {password && passwordCrack.score === 1 && 'Weak'}
                {password && passwordCrack.score === 2 && 'Medium'}
                {password && passwordCrack.score === 3 && 'Strong'}
                {password && passwordCrack.score === 4 && 'Very Strong'}
              </Text>
            </Flex>
          </Flex>
          <Flex justify='center' align='center' textAlign='center'>
            <Stack align="center" mt={4} height='200px'>
                {password.length === 0 && <Text>Estimated time to crack your password:</Text>}
                {password && Object.keys(passwordCrack).length !== 0 && <SliderComponent data={passwordCrack}/>}
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
