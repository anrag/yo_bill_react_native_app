import React from 'react';
import {Text, Pressable} from 'react-native';
import {buttonStyle} from '../styles/styles';

export default function IncDec(props) {
  const {onPress, title = 'Save'} = props;
  return (
    <Pressable style={buttonStyle.IncDecbutton} onPress={onPress}>
      <Text style={[buttonStyle.IncDectext]}>{title}</Text>
    </Pressable>
  );
}
