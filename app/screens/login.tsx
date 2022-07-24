import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import Button from '../component/button';
import {appFontStyle} from '../styles/styles';
import {AppColors} from '../utils/colors';
import {AppImages} from '../utils/images';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 200, height: 200}}
        source={{
          uri: AppImages.homeImageMen,
        }}
      />
      <Text style={appFontStyle.homeText}>
        Start your Billing Today with yo Bill
      </Text>

      <View>
        <TextInput
          style={appFontStyle.inputTextBox}
          autoComplete={'tel'}
          placeholder="input your number"
          keyboardType={'number-pad'}
          autoFocus
          maxLength={10}
        />
        <Button color={AppColors.redSolid} title="Login" />
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
export default Login;
