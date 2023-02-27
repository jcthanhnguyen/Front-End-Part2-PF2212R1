// Bài 1: Hãy viết một chương trình để đảo ngược các phần tử trong list
let aList = [100, 200, 300, 400, 500];

let blist = [];
for (let i = 0; i < aList.length; i++) {
    blist[i] = aList[aList.length - 1 - i];
}

document.write('b list: ');
for (let i = 0; i < blist.length; i++) {
    document.write(blist[i] + ' ');
}
// bList = [500, 400, 300, 200, 100]