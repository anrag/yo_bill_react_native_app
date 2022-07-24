import React from 'react';
import {View, TextInput, Text, StyleSheet, Button, Image} from 'react-native';
import {appFontStyle} from '../styles/styles';
import {AppColors} from '../utils/colors';
import {AppImages} from '../utils/images';

const LoginOtp = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 200, height: 200}}
        source={{
          uri: AppImages.keyLock,
        }}
      />
      <Text style={appFontStyle.homeText}>
        Enter 4 digit OTP sent on your phone
      </Text>

      <View>
        <TextInput
          style={[appFontStyle.inputTextBox]}
          placeholder="input your number"
          keyboardType={'number-pad'}
          autoFocus
          maxLength={4}
        />
        <Button color={AppColors.redSolid} title="Submit" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default LoginOtp;
