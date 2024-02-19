import React, { useContext, useRef, useState } from 'react';

import {
  Divider,
  HStack,
  Icon,
  Image,
  Menu,
  Text,
  View,
  VStack,
} from 'native-base';
import { animated, useSpring } from 'react-spring';

// Fun fact! This lib doesn't support font weights for icons
// So I picked the closest looking ones :)
// SimpleLineIcons & Feather had the thinnest looking ones
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import Logo from '../../images/logo.png';
import NavButton from '../components/nav-button';
import { UserContext } from '../context/user-context';

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<string>('Patients');
  const user = useContext(UserContext);

  const slideSideNav = useSpring({
    minWidth: isExpanded ? 280 : 80,
    config: {
      tension: 500,
    },
  });

  const menuRef = useRef<HTMLDivElement>(null);

  const getNavButton = (
    buttonText: string,
    iconName: string,
    iconLib: any = SimpleLineIcons,
    onPress: () => void = () => setIsActive(buttonText),
    hasRef: boolean = false,
  ) => {
    return (
      <NavButton
        buttonText={buttonText}
        iconLib={iconLib}
        iconName={iconName}
        isActive={isActive}
        isExpanded={isExpanded}
        onPress={() => onPress()}
        ref={hasRef ? menuRef : null}
        user={user}
      />
    );
  };

  const wrapAccountMenu = (triggerProps: any) => {
    const accountButton = React.cloneElement(
      getNavButton('Account', 'Account'),
      triggerProps,
    );

    return accountButton;
  };

  const getAccountMenu = () => {
    return (
      <Menu
        padding={0}
        w="15rem"
        placement="top"
        marginBottom="0.5rem"
        marginLeft="1rem"
        trigger={(triggerProps) => {
          return wrapAccountMenu(triggerProps);
        }}
      >
        <Menu.Item justifyContent="center" height="56px">
          <Icon as={SimpleLineIcons} name="settings" />
          <Text>Account Settings</Text>
        </Menu.Item>
        <Menu.Item justifyContent="center" height="56px">
          <Icon as={SimpleLineIcons} name="info" />
          <Text>About Percipio Health</Text>
        </Menu.Item>
        <Divider bg="dark.700" />
        <Menu.Item justifyContent="center" height="56px">
          <Icon as={Feather} name="log-out" />
          <Text>Log out</Text>
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <animated.div style={slideSideNav}>
      <View
        backgroundColor="coolGray.100"
        height="100%"
        minHeight="40rem"
        pb="1rem"
      >
        <HStack alignItems="center" height="3rem" mt="1rem" mb="2rem">
          <Image
            marginLeft="2rem"
            marginRight="0.5rem"
            source={{ uri: Logo }}
            alt="Percipio Logo"
            size="2rem"
          />
          {isExpanded && (
            <VStack>
              <Text color="dark.100">Percipio Health</Text>
              <Text fontSize="xs" color="dark.300" fontWeight="400">
                AI-Powered Healthcare
              </Text>
            </VStack>
          )}
        </HStack>
        <VStack alignItems="center">
          {getNavButton('Patients', 'users', Feather)}
          {getNavButton('Notifications', 'bell')}
          {getNavButton('Content', 'folder')}
          {getNavButton('Users', 'stethoscope', FontAwesome)}
          {getNavButton('Settings', 'settings')}
          {getNavButton('Help', 'question')}
        </VStack>

        <VStack
          flexDirection="column"
          flex={1}
          justifyContent="flex-end"
          alignItems="center"
        >
          {getNavButton('Collapse Menu', 'sidebar-expand', Octicons, () =>
            setIsExpanded(!isExpanded),
          )}
          {getAccountMenu()}
        </VStack>
      </View>
    </animated.div>
  );
};

export default Navigation;
