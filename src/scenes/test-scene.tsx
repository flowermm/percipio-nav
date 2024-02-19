import React from 'react';

import {
  Center,
  Flex,
  Heading,
  useBreakpointValue,
  useTheme,
  VStack,
} from 'native-base';

const TestScene = () => {
  const { colors } = useTheme();
  const direction = useBreakpointValue({
    base: 'column',
    lg: 'row',
  });

  return (
    <Flex
      flexDirection={direction}
      alignItems="center"
      justifyContent="center"
      m="4rem"
    >
      <Center mt="3" mb="4">
        <Heading fontSize="xl" mx="2rem">
          Orange!
        </Heading>
      </Center>
      <VStack
        flex="1"
        width="100%"
        style={{
          maxWidth: 1200,
        }}
      >
        {Object.keys(colors.orange).map((key, index) => {
          if (index >= 1 && index <= 8) {
            return (
              <Center key={key} py="4" bg={`orange.${key}`}>
                {key}
              </Center>
            );
          }
          return null;
        })}
      </VStack>
    </Flex>
  );
};

export default TestScene;
