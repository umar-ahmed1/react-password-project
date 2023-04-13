import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function PersonalizedTips({ suggestions, sequence }) {
  console.log(suggestions);
  const [filteredSequence, setFilteredSequence] = React.useState([]);

  React.useEffect(() => {
    let temp = [];
    sequence.forEach(item => {
      if (item.pattern === 'dictionary' || item.pattern === 'repeat') {
        temp.push(item);
      }
    });
    setFilteredSequence(temp);
  }, [sequence]);

  React.useEffect(() => {
    console.log('sequence', sequence);
    console.log('filtered sequence', filteredSequence);
  }, [filteredSequence]);

  return (
    <Flex
      width="100%"
      border="1px solid"
      borderColor="blue.400"
      mt={4}
      align="center"
      justify="center"
      direction="column"
      p={2}
    >
      <Text fontWeight={700}>Tips to improve YOUR password</Text>
      {suggestions.length === 0 && sequence.length === 0 && (
        <Text>No suggestions. Your password is excellent.</Text>
      )}
      {suggestions.length > 0 &&
        suggestions.map((suggestion, idx) => {
          return <Text key={idx}>{`-${suggestion}`}</Text>;
        })}
      {filteredSequence.length > 0 &&
        filteredSequence.map((item, idx) => {
          return (
            <Flex
              mt={1}
              mb={1}
              fontSize="15px"
              key={idx}
              align='center'
              textAlign='center'
            >
                {item.pattern === 'dictionary' && (<Text>{`-The sequence "${filteredSequence[idx].token}" was found in our dictionary in only ${filteredSequence[idx].guesses} guesses. We suggest to change it`}</Text>)}
                {item.pattern === 'repeat' && (<Text>{`-The sequence "${filteredSequence[idx].token}" repeats and was found in only ${filteredSequence[idx].guesses} guesses. We suggest to change it`}</Text>)} 
            </Flex>
          );
        })}
    </Flex>
  );
}
