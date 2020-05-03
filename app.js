function cipher(str) {
  let result  = ""
  const input = document.getElementById('input').value;

  if (input === "") return alert()

  for (var i = 0 ; i < str.length; i++) {
    let ciphered = str[i].charCodeAt()
    //charCodeAt() == get number code from ASCII letter
    if (ciphered >= 65 && ciphered <= 77) {
      result += String.fromCharCode(ciphered+13)
      //from CharCode() == get letter from number code ASCII

    } else if (ciphered >= 68 && ciphered <=90) {
      result += String.fromCharCode(ciphered-13)
    } else {
      result += str[i]
    }

  }
   return result
}
