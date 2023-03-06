function findPrime(start, end) {
    let result = '';
    for (let i = start; i <= end; i++) {
        if (isPrimeNumber(i)) result += (i + '&nbsp;');
    }
    return result;
}

document.write(findPrime(2, 24));