import {StyleSheet} from 'react-native';
import {AppColors} from '../utils/colors';

const {appBlack, appBorderText, redSolid, appWhite} = AppColors;
export const appFontStyle = StyleSheet.create({
  homeText: {
    fontSize: 20,
    color: appBlack,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    elevation: 9,
    justifyContent: 'center',
  },
  inputTextBox: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 9,
    borderColor: appBorderText,
    borderWidth: 1,
  },
});
export const buttonStyle = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 9,
    elevation: 9,
    backgroundColor: redSolid,
  },
  text: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  IncDecbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 15,
    borderRadius: 9,
    elevation: 9,
    backgroundColor: redSolid,
  },
  IncDectext: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export const productCardStyle = StyleSheet.create({
  mainCard: {
    backgroundColor: appWhite,
    marginBottom: 10,
    elevation: 10,
    borderRadius: 9,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  nameLabelStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: appBlack,
  },
  inputQty: {
    borderColor: AppColors.appWhite,
    borderRadius: 10,
    textAlign: 'center',
    borderWidth: 1,
    marginLeft: 4,
    marginRight: 4,
    width: 30,
    fontWeight: 'bold',
    color: appBlack,
    backgroundColor: AppColors.appWhite,
  },
});
