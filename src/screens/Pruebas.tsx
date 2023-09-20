import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

class Prueba3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedValue: new Animated.Value(0),
      isExpanded: false,
    };
  }

  toggleAnimation = () => {
    const { isExpanded, animatedValue } = this.state;
    const toValue = isExpanded ? 0 : 1;
    const duration = 300; // 0.3 segundos

    Animated.timing(animatedValue, {
      toValue,
      duration,
      useNativeDriver: false, // Importante para React Native
    }).start();

    this.setState({ isExpanded: !isExpanded });
  };

  render() {
    const { animatedValue } = this.state;

    const containerStyle = {
      opacity: animatedValue,
      transform: [
        {
          scale: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.2],
          }),
        },
      ],
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, containerStyle]}>
          {/* Contenido de tu componente */}
        </Animated.View>
        <TouchableOpacity onPress={this.toggleAnimation}>
          <Text>Toggle Animation</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default Prueba3;