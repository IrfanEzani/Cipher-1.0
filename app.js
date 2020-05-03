/*function cipher() {
  var input = document.getElementById('input').value;
  var result = '';

  for (var i = 0 ; i < input.length; i++) {
    var ciphered = input[i].charCodeAt()
    //charCodeAt() == get number code from ASCII letter
    if (ciphered >= 65 && ciphered <= 77) {
      result += String.fromCharCode(ciphered+13)
      //from CharCode() == get letter from number code ASCII

    } else if (ciphered >= 68 && ciphered <=90) {
      result += String.fromCharCode(ciphered-13)
    } else {
      result += input[i]
    }
  }
  document.getElementById('answer').value = result;
  console.log(result);
}
*/
