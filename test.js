var url =
  'upi://pay?pa=' + // payment method.
  '8707484110@paytm' + // VPA number.
  '&am=' +
  10 + // this param is for fixed amount (non editable).
  '&pn=Prasahnt%20Verma' + // to showing your name in app.
  '&cu=INR' + // Currency code.
  '&mode=02' + // mode O2 for Secure QR Code.
  '&orgid=189999'; //If the transaction is initiated by any PSP app then the respective orgID needs to be passed.
console.log(url);
