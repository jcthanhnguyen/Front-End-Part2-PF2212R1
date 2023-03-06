let array1 = [5, 10, 15, 20, 25, 50, 20];
let count = 0;
for (let i = 0; i < array1.length; i++) {
    if (array1[i] == 20) array1[i] = 200;
}
document.write('list moi: ');
for (let i = 0; i < array1.length; i++) {
    document.write(array1[i] + ' ');
}