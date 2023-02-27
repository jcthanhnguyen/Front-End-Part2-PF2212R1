let arr1 = ['Hello ', 'take '];
let arr2 = ['Dear', 'Sir'];
let result = [];
let index = 0;
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        result[index] = arr1[i] + arr2[j];
        index++;
    }
}

document.write('result: ');
for (let i = 0; i < result.length; i++) {
    document.write(result[i] + '<br> ');
}