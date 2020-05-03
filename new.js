const alphabet = [
  'A','B','C','D','E','F',
  'G','H','I','J','K','L',
  'M','N','O','P','Q','R',
  'S','T','U','V','W','X',
  'Y','Z'
]

const form1 = document.forms.cipher; //first encrypt form
const output = form1.answer;

form1.addEventListener('submit', event => {
event.preventDefault();
output.innerHTML = [...form1.inputtext.value].map(char => encrypt(char)).join('');
}
);


function encrypt(char) {
  const shift = 3;
  if (alphabet.includes(char.toUpperCase())) {
    const position = alphabet.indexOf(char.toUpperCase())
    const newPosition = (position + shift)%26;
    return alphabet[newPosition];
  }
  else {
    return char;
  }
}


const form2 = document.forms.decipher;
const decryptedOutput = form2.answer;

form2.addEventListener('submit', event => {
  event.preventDefault();
  decryptedOutput.innerHTML = [...form2.inputtext.value].map(char => decrypt(char)).join('');
}
);

function decrypt(char) {
  const decryptShift = 3;
  if(alphabet.includes(char.toUpperCase())) {
    const decryptedPosition = alphabet.indexOf(char.toUpperCase())
    const newDecryptedPosition = (decryptedPosition - decryptShift)%26;
    return alphabet[newDecryptedPosition];
  }
  else {
    return char;
  }
}
