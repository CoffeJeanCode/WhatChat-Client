import CryptoJS from 'crypto-js'

export const encrypt = (text, passphrase) => {
  return CryptoJS.AES.encrypt(text, passphrase).toString()
}
