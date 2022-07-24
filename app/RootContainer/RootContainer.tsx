import React from 'react';
import {View, StyleSheet, Image, Text, TextInput} from 'react-native';
import Button from '../component/button';
import IncDec from '../component/incdec';
import {appFontStyle, productCardStyle} from '../styles/styles';
import {AppColors} from '../utils/colors';

const prepareData = [
  {
    id: 1,
    name: 'Parle-g big win',
    qty: 1,
    price: {
      mrp: '40',
      sp: '30',
    },
    img: 'https://r-mart.co.in/images/thumbs/0006532_parle-g-65gm_510.png',
  },
  {
    id: 2,
    name: 'Parle-g big win',
    qty: 1,
    price: {
      mrp: '40',
      sp: '30',
    },
    img: 'https://r-mart.co.in/images/thumbs/0006532_parle-g-65gm_510.png',
  },
  {
    id: 3,
    name: 'Parle-g big win',
    qty: 1,
    price: {
      mrp: '40',
      sp: '30',
    },
    img: 'https://r-mart.co.in/images/thumbs/0006532_parle-g-65gm_510.png',
  },
];
const RootContainer = () => {
  return (
    <View style={styles.container}>
      {prepareData.map(e => (
        <View style={productCardStyle.mainCard}>
          <Image source={{uri: e.img}} style={{width: 100, height: 100}} />
          <View>
            <Text style={productCardStyle.nameLabelStyle}>{e.name}</Text>
            <Text
              style={[
                productCardStyle.nameLabelStyle,
                {color: AppColors.redSolid, textDecorationLine: 'line-through'},
              ]}>
              {' '}
              MRP - {e.price.mrp}
            </Text>
            <Text
              style={[
                productCardStyle.nameLabelStyle,
                {color: AppColors.appGreen},
              ]}>
              {' '}
              Price -{e.price.sp}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 35,
              alignSelf: 'center',
            }}>
            <IncDec title="-" />
            <TextInput
              style={productCardStyle.inputQty}
              maxLength={2}
              editable={false}
              placeholder={'Q'}
              value={'10'}
            />
            <IncDec title="+" />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: AppColors.appWhite,
  },
});

export default RootContainer;
