import React, { ForwardedRef, forwardRef, useRef } from 'react';

import {
  Avatar,
  Button,
  HStack,
  Icon,
  Text,
  Tooltip,
  VStack,
} from 'native-base';
import { animated, easings, useSpring } from 'react-spring';

import { User } from '../context/user-context';

interface NavButtonProps {
  buttonText: string;
  iconLib: any;
  iconName: string;
  isActive: string;
  isExpanded: boolean;
  onPress: () => void;
  user: User;
}

const NavButton = (
  props: NavButtonProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const { buttonText, isActive, iconLib, iconName, isExpanded, onPress, user } =
    props;
  const componentRef =
    (ref as React.RefObject<HTMLDivElement>) || useRef<HTMLDivElement>(null);

  const iconStyles = {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
  };

  const textFade = useSpring({
    opacity: isExpanded ? 1 : 0,
    config: { easing: easings.easeInCubic, duration: 250 },
  });

  const springRotate = useSpring({
    ...iconStyles,
    transform: isExpanded ? 'rotate(0deg) scale(1)' : 'rotate(180deg) scale(1)',
  });

  const getInitials = () => {
    return user.name.first[0] + user.name.last[0];
  };

  const textColor = isActive === buttonText ? 'dark.100' : 'dark.300';
  const isAccountButton = buttonText === 'Account';
  const isCollapseButton = iconName === 'sidebar-expand';

  const navButton = (
    <Button
      leftIcon={
        <animated.span style={isCollapseButton ? springRotate : iconStyles}>
          {isAccountButton ? (
            <Avatar
              alignItems="center"
              alignSelf="center"
              bg="orange.500"
              boxSize="2rem"
              mx={isExpanded ? '0.25rem' : ''}
              source={{
                uri: user.picture.medium,
              }}
            >
              {getInitials()}
            </Avatar>
          ) : (
            <Icon
              as={iconLib}
              color={textColor}
              mx={isExpanded ? '0.5rem' : ''}
              name={iconName}
            />
          )}
        </animated.span>
      }
      alignItems="center"
      alignSelf={isExpanded ? 'stretch' : 'center'}
      backgroundColor={isActive === buttonText ? 'coolGray.200' : ''}
      height="4rem"
      justifyContent={isExpanded ? 'flex-start' : 'center'}
      mx="1rem"
      onPress={() => onPress()}
      ref={componentRef}
      width={isExpanded ? '' : '4rem'}
    >
      {isAccountButton
        ? isExpanded && (
            <animated.span style={textFade}>
              <HStack alignItems="center" width="11rem">
                <VStack flex={1}>
                  <Text color="dark.100">
                    {user.name.first} {user.name.last}
                  </Text>
                  <Text fontSize="xs" color="dark.300">
                    {user.location.city}, {user.location.state}
                  </Text>
                </VStack>
                <Icon as={iconLib} name="options" size="1rem" />
              </HStack>
            </animated.span>
          )
        : isExpanded && (
            <animated.span style={textFade}>
              <Text color={textColor}>{buttonText}</Text>
            </animated.span>
          )}
    </Button>
  );

  return isExpanded ? (
    navButton
  ) : (
    <Tooltip
      label={isCollapseButton ? 'Expand Menu' : buttonText}
      openDelay={100}
      placement="right"
    >
      {navButton}
    </Tooltip>
  );
};

export default forwardRef(NavButton);
