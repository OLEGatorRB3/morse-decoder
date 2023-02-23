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
    let arr = []
    for(let i = 0; i < expr.length; i+= 10){
        arr.push(expr.slice(i, i + 10))
    }

    let arr2 = arr.map(item => {
         item = item.replace(/00/g, '')
         item = item.replace(/10/g, '.')
         item = item.replace(/11/g, '-')
         item = item.replace(/\*{10}/g, ' ')

         return item
    })

    let letters = arr2.reduce((acc, cur) => {
        for(let key in MORSE_TABLE){
            if(key == cur) {
                cur = MORSE_TABLE[key]                
            }
        }
        return acc += cur
    }, '')
    return letters

}


module.exports = {
    decode
}