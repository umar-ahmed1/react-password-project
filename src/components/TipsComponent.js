import React from 'react';
import { Box, Flex, Stack, Text,AspectRatio } from '@chakra-ui/react';
import Tip from './Tip';

export default function TipsComponent() {
  const tips = [
    {
      title:"Don't use a common password",
      color:"red.200",
      number:0,
      one:"qwerty",
      two:"apple",
      three:"123456",
      altone:"Attackers have large databases of commonly used passwords. Without knowing any additional information about you, attackers can crack your password by simply trying every entry in their database, which is why it is imperative to use unique passwords. Different websites can have their own kinds of common passwords, so make sure to research online what kinds of passwords are common! "
    },
    {
      title:"Don't include any personal information in your password",
      color:"yellow.200",
      number:1,
      one:"Tanaka2003",
      two:"Oct15Tanaka",
      three:"TanakaOct142003",
      altone:"Through web searches and social media, it is relatively easy to find personal information you included in your password. Attackers will find it simpler to guess your password and log into your account without your permission as a result. Another weakness it introduces is that the attacker may use the data they gathered to impersonate you and gain additional unauthorised access to your sensitive information."
    },
    {
      title:"Use passwords that include at least eight letters, lowcase and uppercase letters, numbers, and symbols",
      color:"orange.200",
      number:2,
      one:"T@n@ka62@31",
      two:"Cp$C3@W!nT#R@3",
      three:"J@n3T!$Th3B3$TPr0f",
      altone:"Using a wide variety of characters and increasing the length of your password increases the total possible number of passwords and makes it more difficult for a hacker to brute force guessing your password.For example a password including only the alphabet of length 4 has 26^4 possible combinations while a similar password of length 8 has 26^8 combinations. That's over 456000x more combinations"
    },
    {
      title:"Do not reuse your passwords",
      color:"green.200",
      number:3,
      one:"Instagram: T@n@ka62@31",
      two:"Twitter: J@n3T!$ThB3$TPr0f",
      three:"Youtube:Cp$C3@W1nT#R@3",
      altone:"This is because if attackers have your password for one account, they can also reuse that password to login to your other accounts and gain access to potentially sensitive information. An attack like this is known as credential stuffing."
    },
    {
      title:"Avoid using names or words found in the dictionary",
      color:"blue.200",
      number:4,
      one:"jack",
      two:"orange",
      three:"football",
      altone:"Similar to the commonly used passwords, attackers can perform a dictionary attack, where they try every password in their database as well as try words from a dictionary in order to crack your password. This works because attackers use large databases that not only contain common passwords, but also passwords found from data leaks, along with words from dictionaries which are freely available. Avoiding pre-existing words from a language can boost the strength of your password for this very reason."
    },
    
  ]

  console.log(tips)




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
          {tips.map((tip, idx) => {
          return <Tip key={idx} title={tip.title} color={tip.color} number={tip.number} one={tip.one} two={tip.two} three={tip.three} altone={tip.altone}></Tip>;
        })}
        </Stack>
        <Flex width='100%' height='100%' mt={4} justify='space-between' direction={{ base: 'column', md: 'row' }}>
          <Flex width={{base:'100%',md:'50%'}} height='100%' mr={{base:0,md:2}} mb={{base:2,md:0}}>
            <iframe width='100%' height='200px' title="Tips Video" src="https://www.youtube.com/embed/9LxdtaSvQ3I" allowFullScreen/>
          </Flex>
          <Flex width={{base:'100%',md:'50%'}} height='100%'>
            <iframe width='100%' title="Tips Video" height='200px' src="https://www.youtube.com/embed/NrYhdkrTNMI" allowFullScreen/>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
