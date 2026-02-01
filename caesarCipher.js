function caesarCipher(string, shiftFactor) {
const stringArray = string.split("");
let newString = ""
let newLetter = ""

    stringArray.forEach((char) => {
        if (char === char.toUpperCase()) {
            let lowerCase = char.toLowerCase();
            let newChar = shiftChar(lowerCase, shiftFactor)
            newLetter = newChar.toUpperCase()
        } else {
            newLetter = shiftChar(char, shiftFactor)
        }
        newString += newLetter
    })

return newString
}

function shiftChar(char, shift) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let index = alphabet.indexOf(char);
    
    if (index < 0) {
        return char
    } else {
        let newChar = (index + shift > 25) ? alphabet[0 + ((index + shift) - 26)] : alphabet[index + shift]
        return newChar
    }
}

export { caesarCipher }