/* eslint-disable  no-undef */
const Constants = require('./constants.js')

//------------ MIXINS ------------------//
const buttonMixin = {
  alignItems: 'center',
  borderRadius: 30,
  borderWidth: 2,
  height: 60,
  justifyContent: 'center'
}

const buttonTextMixin = {
  fontWeight: '700',
  textAlign: 'center'
}

//------------ Buttons ------------------//

const ButtonStyles = {
  primaryButton: {
    ...buttonMixin,
    backgroundColor: Constants.primaryColor,
    borderColor: Constants.whiteHex
  },
  primaryButtonText: {
    ...buttonTextMixin,
    color: Constants.whiteHex
  },
  primaryUnderlayColor: 'transparent',
  secondaryButton: {
    ...buttonMixin,
    backgroundColor: Constants.whiteHex,
    borderColor: Constants.primaryColor
  },
  secondaryButtonText: {
    ...buttonTextMixin,
    color: Constants.primaryColor
  },
  secondaryUnderlayColor: 'transparent'
}

export default ButtonStyles
