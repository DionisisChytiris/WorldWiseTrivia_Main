import React, { Component } from 'react';
import { View, Text,Animated, StyleSheet } from 'react-native';

const ScienceQuizHome = () => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    animateBackground();
  }, []);

  const animateBackground = () => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      })
    ).start();
  };

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(0, 0, 255)', 'rgb(255, 0, 0)'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.background, { backgroundColor }]} />
      <View>
        <Text style={{color: 'white', fontSize: 26}}>Hello world</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default ScienceQuizHome;


// export default ScienceQuizHome