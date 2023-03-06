//bai 5: dem xem tron array co bao nhieu so 20
let array1 = [5, 10, 15, 20, 25, 50, 20];
let count = 0;
for (let i = 0; i < array1.length; i++) {
    if (array1[i] == 20) count++;
}
document.write('co ' + count + 'so 20 trong list');