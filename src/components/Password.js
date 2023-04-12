import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Tooltip,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import SliderComponent from './SliderComponent';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

export default function Password() {
  var zxcvbn = require('zxcvbn');
  const [password, setPassword] = React.useState('');
  const [passwordCrack, setPasswordCrack] = React.useState({});
  const [show, setShow] = React.useState(false);
  const [strengthColor, setStrengthColor] = React.useState('black.100');
  const [attackType, setAttackType] = React.useState('online');

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
      if (passwordCrack.score === 0) setStrengthColor('red.500');
      else if (passwordCrack.score === 1) setStrengthColor('orange.400');
      else if (passwordCrack.score === 2) setStrengthColor('yellow.400');
      else if (passwordCrack.score === 3) setStrengthColor('green.400');
      else if (passwordCrack.score === 4) setStrengthColor('blue.400');
    }
  }, [passwordCrack,password]);

  return (
    <>
      <Flex
        direction="column"
        justify="center"
        align="center"
        mt={20}
        ml={{ base: '0%', lg: '6%' }}
      >
        <Flex
          direction="column"
          width={{ base: '50%', sm: '40%', md: '35%', lg: '25%' }}
          align="center"
          justify="center"
        >
          <Flex width={{ base: '100%', sm: '70%' }}>
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
              fontSize={{ base: '14px', sm: '15px', md: '17px', lg: '20px' }}
              height="100%"
              onChange={e => handlePasswordChange(e.target.value)}
            ></Input>
            <InputRightElement
              width={{ base: '2rem', md: '3rem', lg: '4rem' }}
              height="100%"
              right={{ base: 1, md: 0.5, lg: 0 }}
            >
              <Button
                h="100%"
                width="100%"
                fontSize={{ base: '13px', md: '15px' }}
                onClick={() => setShow(!show)}
              >
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
              <Text
                fontSize={{ base: '13px', sm: '17px', md: '20px' }}
                fontWeight={700}
              >
                Strength:
              </Text>
              <Text
                ml={2}
                fontSize={{ base: '13px', sm: '17px', md: '20px' }}
                fontWeight={700}
                color={strengthColor}
              >
                {password && passwordCrack.score === 0 && 'Very Weak'}
                {password && passwordCrack.score === 1 && 'Weak'}
                {password && passwordCrack.score === 2 && 'Medium'}
                {password && passwordCrack.score === 3 && 'Strong'}
                {password && passwordCrack.score === 4 && 'Very Strong'}
              </Text>
            </Flex>
          </Flex>
          <Flex justify="center" align="center" textAlign="center" mt={2}>
            <Stack align="center" mt={6} height="300px">
              <Text mb={1} fontWeight={700} fontSize="25px" color="blue.400">
                How Long Would It Take To Crack Your Password?
              </Text>
              <RadioGroup
                defaultValue="2"
                onChange={setAttackType}
                value={attackType}
                width="100%"
              >
                <Stack spacing={5} direction="row" mt={3} width="100%">
                  <Tooltip
                    hasArrow
                    fontSize="12px"
                    label="An online password attack involves attempting to guess or crack a password by submitting login attempts through a website or application's login page, typically using automated tools or scripts. This method requires an active internet connection and access to the login page."
                  >
                    <Flex align="center" width="50%">
                      <Radio colorScheme="blue" value="online">
                        <Flex align="center">
                          <Text mr={2} fontSize="20px">
                            Online Attack
                          </Text>
                          <Icon
                            fontSize={19}
                            as={AiOutlineQuestionCircle}
                          ></Icon>
                        </Flex>
                      </Radio>
                    </Flex>
                  </Tooltip>
                  <Tooltip
                    hasArrow
                    fontSize="12px"
                    label="An offline hash-based attack involves cracking passwords without internet by accessing a system's database, where passwords are stored as hash values. Attackers use tools to apply the hash function to numerous potential passwords to find a matching stolen hash value."
                  >
                    <Flex align="center" width="50%">
                      <Radio colorScheme="red" value="offline">
                        <Flex align="center">
                          <Text mr={2} fontSize="20px">
                            Offline Attack
                          </Text>
                          <Icon
                            fontSize={19}
                            as={AiOutlineQuestionCircle}
                          ></Icon>
                        </Flex>
                      </Radio>
                    </Flex>
                  </Tooltip>
                </Stack>
              </RadioGroup>
              {password && Object.keys(passwordCrack).length !== 0 && (
                <SliderComponent data={passwordCrack} attackType={attackType} />
              )}
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
