//start 1 

let array = [1,2,3,4,5,6,7,8,9,10]
let chet = []
let nechet =[]



for(let i = 0;i < array.length;i++){
    array[i] % 2 == 0 ? chet.push(array[i]) : '';
    array[i] % 2 == 1 ? nechet.push(array[i]) : '';
}
console.log(chet);
console.log(nechet);

//end 1 


//start 2 
let arr = [];

for(i = 0;i < Infinity;i++){
    let word = prompt('Введите число')
    let splited = word.split(", ")
    if(splited[0] == 'add'){
        arr.push(splited[1])
    }else if( splited[0] = 'del'){
        for(let i = 0; i<arr.length;i++){
            arr[i] == splited[1] ? arr.splice(i,1): ''
        }
    }else if(word == 'stop'){
        break
    }
    console.log(arr);
}


//end 2