// Code your solutions in this file
function writeCards(obj, adjective) {
    let arrayObj = [];
    for (let i=0; i<obj.length; i++) {
        // console.log(obj[i]);
        let msg = `Thank you, ${obj[i]}, for the wonderful ${adjective} gift!`;
        arrayObj.push(msg);
        // console.log(arrayObj);
    }
    return arrayObj;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num = num - 1;
    }
}