const regB = "\\b([a-z0-9]{1,3})?";
const regA = "[a-z0-9]{1,3})?\\b";


const flag = 'gmi';
var isValid = true;
const term1 = 'term1';

try {
    new RegExp(regB + term1 + regA, flag);
} catch(e) {
    isValid = false;
}

console.log(isValid);
