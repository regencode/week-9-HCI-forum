

function digitalDecipher(message, key){
    const alphabets = ['buffer','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let myFunc = num => Number(num);
    var keyArr = Array.from(String(key), myFunc);
    let output = [];
    let word = [];
    let i;
    let j = 0;

    for(i = 0; i < message.length; i++){ //get output array of message after using key
        if(j === keyArr.length){
            j = 0
        }
            output[i] = message[i] - keyArr[j]
            j++
    }

    for(i = 0; i < output.length; i++){//get word from the output array
        word[i] = alphabets[output[i]];
    }
    let txt = word.join("")
    
    console.log(txt);

}

digitalDecipher([20, 12, 18, 30, 21], 1939);
digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990);
digitalDecipher([6, 4, 1, 3, 9, 20], 100);
