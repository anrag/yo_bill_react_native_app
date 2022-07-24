import React from 'react';
import {Text, Pressable} from 'react-native';
import {buttonStyle} from '../styles/styles';

export default function Button(props) {
  const {onPress, title = 'Save'} = props;
  return (
    <Pressable style={buttonStyle.button} onPress={onPress}>
      <Text style={[buttonStyle.text]}>{title}</Text>
    </Pressable>
  );
}
