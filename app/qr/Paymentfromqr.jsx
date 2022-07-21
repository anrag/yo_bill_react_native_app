import React from 'react';
import {View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const PaymentFromQr = () => {
  return (
    <View>
      <QRCode value="http://awesome.link.qr" />
    </View>
  );
};

export default PaymentFromQr;
