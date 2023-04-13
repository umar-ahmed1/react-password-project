import React from 'react';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';

export default function TipsComponent() {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      mt={12}
      ml={{ base: '0%', lg: '6%' }}
      mb={20}
    >
      <Flex
        direction="column"
        width={{ base: '85%', sm: '70%', md: '50%' }}
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
            mb={6}
          >
            Basic Password Practices To Follow
          </Text>
        </Flex>

        <Stack
          width="100%"
          spacing={5}
          fontSize={{ base: '13px', sm: '14px', md: '15px' }}
        >
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
              _hover={{ backgroundColor: 'red.100', opacity:0.9}}
            >
              Why?
            </Flex>
            <Box
              backgroundColor="red.200"
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
                <Text fontWeight={700}>Don't use a common password</Text>
                <Text>qwerty</Text>
                <Text>apple</Text>
                <Text>123456</Text>
              </Flex>
            </Box>
          </Flex>
          <Flex width="100%" align="center">
            <Box
              backgroundColor="yellow.200"
              flexGrow={1}
              height="100%"
              borderRadius={10}
              mr={{base:1,md:3}}
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
                <Text fontWeight={700}>
                  Don't include any personal information in your password
                </Text>
                <Text>Tanaka2003</Text>
                <Text>Oct15Tanaka</Text>
                <Text>TanakaOct142003</Text>
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
              fontWeight={700}
              _hover={{ backgroundColor: 'yellow.100', opacity:0.9}}
            >
              Why?
            </Flex>
          </Flex>
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
              _hover={{ backgroundColor: 'orange.100', opacity:0.9}}
            >
              Why?
            </Flex>
            <Box
              backgroundColor="orange.200"
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
                <Text fontWeight={700}>
                  Use passwords that include at least 8 letters, lower case,
                  uppercase, numbers, and symbols
                </Text>
                <Text>T@n@ka62@31</Text>
                <Text>Cp$C3@W!nT#R@3</Text>
                <Text>J@n3T!$Th3B3$TPr0f</Text>
              </Flex>
            </Box>
          </Flex>
          <Flex height="120px" width="100%" align="center">
            <Box
              backgroundColor="green.200"
              flexGrow={1}
              height="100%"
              borderRadius={10}
              mr={{base:1,md:3}}
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
                <Text fontWeight={700}>Do not reuse your passwords</Text>
                <Text>Instagram: T@n@ka62@31</Text>
                <Text>Twitter: J@n3T!$ThB3$TPr0f</Text>
                <Text>Cp$C3@W1nT#R@3</Text>
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
              fontWeight={700}
              _hover={{ backgroundColor: 'green.100', opacity:0.9}}
            >
              Why?
            </Flex>
          </Flex>
          <Flex height="120px" width="100%" align="center">
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
              _hover={{ backgroundColor: 'blue.100', opacity:0.9}}
            >
              Why?
            </Flex>
            <Box
              backgroundColor="blue.200"
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
                <Text fontWeight={700}>
                  Avoid using names or words found in the dictionary
                </Text>
                <Text>jack</Text>
                <Text>orange</Text>
                <Text>football</Text>
              </Flex>
            </Box>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
}
