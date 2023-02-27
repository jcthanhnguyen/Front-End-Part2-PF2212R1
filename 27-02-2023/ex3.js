//Bài 3: Cho sẵn một mảng  chứa các số tự nhiên. 
// Bình phương các phần tử trong mảng và lưu vào một mảng  mới.
let arr = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
    arr2[i] = arr[i] * arr[i];
}

document.write('<br>result: ');
for (let i = 0; i < arr.length; i++) {
    document.write(arr2[i] + ' ');
}