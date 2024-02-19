import React from 'react';

import { Container, Flex, ScrollView } from 'native-base';

import Navigation from './navigation';

const Layout = (props: { children: React.JSX.Element }) => {
  const { children } = props;
  return (
    <Container width="100vw" height="100vh">
      <Flex direction="row" width="inherit" height="inherit">
        <Navigation />
        <ScrollView width="inherit" height="inherit">
          {children}
        </ScrollView>
        {/* Place for toasts or modals or whatever! */}
      </Flex>
    </Container>
  );
};

export default Layout;
