import { Stack, Text, Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import {  BsXSquareFill } from 'react-icons/bs';
import {FaCheckSquare} from 'react-icons/fa'

export default function PasswordContains(props) {
  // Check if the password has at least 8 characters
  function hasEightOrMoreCharacters(password) {
    return password.length >= 8;
  }

  // Check if the password has at least one symbol
  function hasSymbol(password) {
    const symbolPattern = /[^a-zA-Z0-9]/;
    return symbolPattern.test(password);
  }

  // Check if the password has at least one uppercase letter
  function hasUppercase(password) {
    const uppercasePattern = /[A-Z]/;
    return uppercasePattern.test(password);
  }

  // Check if the password has at least one lowercase letter
  function hasLowercase(password) {
    const lowercasePattern = /[a-z]/;
    return lowercasePattern.test(password);
  }

  // Check if the password has at least one number
  function hasNumber(password) {
    const numberPattern = /[0-9]/;
    return numberPattern.test(password);
  }

  return (
    <Stack spacing={3} align="center" justify="center" mt={5}>
      <Text>Contains:</Text>
      <Flex align="center" justify="space-between" width='100%'>
        <Text mr={2}>8+ Characters</Text>
        <Icon
          fontSize={
            hasEightOrMoreCharacters(props.password) ? 29 : 25
          }
          fontWeight={700}
          color={
            hasEightOrMoreCharacters(props.password) ? 'green.400' : 'red.400'
          }
          as={
            hasEightOrMoreCharacters(props.password)
              ? FaCheckSquare
              : BsXSquareFill
          }
        ></Icon>
      </Flex>
      <Flex align="center" justify="space-between" width='100%'>
        <Text mr={2}>Lower Case</Text>
        <Icon
          
          fontSize={
            hasLowercase(props.password) ? 29 : 25
          }
          color={
            hasLowercase(props.password) ? 'green.400' : 'red.400'
          }
          as={
            hasLowercase(props.password)
              ? FaCheckSquare
              : BsXSquareFill
          }
        ></Icon>
      </Flex>
      <Flex align="center" justify="space-between" width='100%'>
        <Text mr={2}>Upper Case</Text>
        <Icon
          fontSize={hasUppercase(props.password) ? 29 : 25}
          color={
            hasUppercase(props.password) ? 'green.400' : 'red.400'
          }
          as={
            hasUppercase(props.password)
              ? FaCheckSquare
              : BsXSquareFill
          }
        ></Icon>
      </Flex>
      <Flex align="center" justify="space-between" width='100%'>
        <Text mr={2}>Numbers</Text>
        <Icon
          fontSize={hasNumber(props.password) ? 29 : 25}
          color={
            hasNumber(props.password) ? 'green.400' : 'red.400'
          }
          as={
            hasNumber(props.password)
              ? FaCheckSquare
              : BsXSquareFill
          }
        ></Icon>
      </Flex>
      <Flex align="center" justify="space-between" width='100%'>
        <Text mr={2}>Symbol</Text>
        <Icon
          fontSize={hasSymbol(props.password) ? 29 : 25}
          color={
            hasSymbol(props.password) ? 'green.400' : 'red.400'
          }
          as={
            hasSymbol(props.password)
              ? FaCheckSquare
              : BsXSquareFill
          }
        ></Icon>
      </Flex>
    </Stack>
  );
}
