//  Bài 2: Hãy tạo ra một mảng  mới bằng cách cộng các phần tử tương ứng của mảng  cũ theo index tương ứng
let array1 = ["M", "na", "i", "Ke"];
let array2 = ["y", "me", "s", "lly"];

for (let i = 0; i < array1.length; i++) {
    array1[i] += array2[i];
}

document.write('<br>new list: ');
for (let i = 0; i < array1.length; i++) {
    document.write(array1[i] + ' ');
}
// ['My', 'name', 'is', 'Kelly']