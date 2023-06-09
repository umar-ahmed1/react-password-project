import React from 'react';
import { Flex, Heading, Text, Link } from '@chakra-ui/react';

export default function InfoComponent() {
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
        width={{ base: '70%', sm: '40%' }}
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
            mb={5}
          >
            How is password cracking time calculated?
          </Text>
          <Heading fontWeight={700} fontSize="15px" mb={5}>
            Our Algorithm uses the
            <Link color="red.500" href="https://github.com/dropbox/zxcvbn">
              <Heading fontSize="15px" color="red.400">
                zxcvbn
              </Heading>
            </Link>
            password strength estimator, an open-source library developed by
            Dropbox
          </Heading>
        </Flex>
      </Flex>
      <Flex
        width={{ base: '100%', md: '70%' }}
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'flex-start' }}
        justify="center"
      >
        <Text
          width={{base:"75%",md:"50%"}}
          mr={{ base: 0, md: 4 }}
          mb={{ base: 8, md: 0 }}
          textAlign="center"
          border="1px solid"
          borderColor="blue.400"
          p={3}
        >
          Zxcvbn provides accurate strength measurements for passwords,
          surpassing traditional character class or entropy-based estimators. By
          simulating the techniques used by attackers to guess passwords and
          accounting for common password patterns and behaviors, zxcvbn aims to
          realistically evaluate password security. The algorithm starts with
          tokenization, which breaks the input password into smaller tokens
          based on common patterns like words, dates, repeated characters, and
          keyboard patterns. Next, the algorithm compares these tokens against
          various built-in dictionaries, such as common passwords, English
          words, surnames, and user-given data. It also checks for l33t-speak
          variations and possible transformations like capitalization and
          reversed words.
        </Text>
        <Text
          ml={{ base: 0, md: 4 }}
          width={{base:"75%",md:"50%"}}
          textAlign="center"
          border="1px solid"
          borderColor="blue.400"
          p={3}
        >
          The scoring process assigns each matched token a score based on
          frequency and length. Zxcvbn calculates the password's overall
          strength by considering the minimum number of guesses an attacker
          would need to crack it, taking into account the best combination of
          token matches. Finally, the algorithm provides feedback on the
          password's strength, including the estimated time to crack and
          suggestions for improvement. This feedback helps users create stronger
          passwords by highlighting their weaknesses and explaining how to
          address them. By simulating attacker behavior and considering various
          password patterns and transformations, zxcvbn offers a more accurate
          and useful evaluation of password security.
        </Text>
      </Flex>
    </Flex>
  );
}
