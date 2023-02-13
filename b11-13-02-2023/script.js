// ex1


let btnComp = document.getElementById('comp');
btnComp.addEventListener("click", () => {
    let l = parseFloat(document.getElementById('length').value);
    let w = parseFloat(document.getElementById('width').value);


    if (l <= 0 || w <= 0) alert('Input positive numbers!!!');
    else if (l == w) alert('This is a square');
    else alert('This is not a square');
});