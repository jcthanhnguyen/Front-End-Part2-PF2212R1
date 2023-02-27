// bai 4: cho 2 array co cung so phan tu voi nhau.
//hay in ra cac thanh phan trong 2 array theo format, dung document.write:
/**
 * 10 400
 * 20 300
 * 30 200
 * 40 100
 */


let a = [10, 20, 30, 40];
let b = [100, 200, 300, 400];
for (let i = 0; i < a.length; i++) {
    document.write(a[i] + ' ' + b[b.length - 1 - i] + '<br>');
}