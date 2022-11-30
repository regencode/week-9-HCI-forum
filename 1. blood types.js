
function canGiveBlood(a, b){
    let bloodTypes = ["O+", "O-", "A+", "A-","AB+", "AB-","B+", "B-",]
    let compatible = [];
    let i;

    if(a.charAt(0) === "O"){
        if (a.slice(-1) === "+"){
            for(i = 0; i < bloodTypes.length; i += 2){
                compatible.push(bloodTypes[i]);
            }
        } else {compatible = bloodTypes}

    } else if (a.slice(0,2) === "AB"){
        if (a.slice(-1) === "+"){
            for(i = 2; i < bloodTypes.length; i += 2){
                compatible.push(bloodTypes[i]);
            }
        } else {compatible = bloodTypes.slice(2)}


    } else if (a.charAt(0) === "A"){
        if (a.slice(-1) === "+"){
            for(i = 2; i < 6; i += 2){
                compatible.push(bloodTypes[i]);
            }
        } else { compatible = bloodTypes.slice(2,6); }
    } else if (a.charAt(0) === "B"){
        if (a.slice(-1) === "+"){
            for(i = 4; i < bloodTypes.length; i += 2){
                compatible.push(bloodTypes[i]);
            }
        } else { compatible = bloodTypes.slice(4); }
    }

    console.log(compatible.includes(b))

}

canGiveBlood("O+", "A+");
canGiveBlood("A-", "B-");
canGiveBlood("A-", "AB+");

