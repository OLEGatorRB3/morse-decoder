const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split('');
    let newArr = arr.map((item) => {
        for(let key in MORSE_TABLE){
            if(MORSE_TABLE[key] == item){                 
                  item = key;
            }            
        }
        return item        
    })
    let newArrChange = newArr.map((item) => {
        if(item.includes("-")) item = item.replace(/-/g, "10")
        if(item.includes(".")) item = item.replace(/\./g, "11")
        if(item.includes(" ")) item = item.replace(/\s/g, "**********")
        return item
    })

    let newArr10 = newArrChange.map((item) => {
        while(item.length < 10) item = "0" + item
        return item
    })

    return newArr10.join('')

    console.log(newArr)
    console.log(newArrChange)
    console.log(newArr10)
}
decode("me")

module.exports = {
    decode
}