function fibonacci(n) {

    if (n < 1) {
        return [];
    } else if (n < 2) {
        return [0];
    }

    result = [0, 1];
    for (let i = 2 ; i < n ; i++) {
        result.push(result[i - 2] + result[i - 1]);
    }

    return result;
}

function fibonacciRec(n) {
    if (n === 0 | n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let aux = fibonacciRec(n - 1);
        aux.push(aux[n - 2] + aux[n - 3]);
        return aux;
    }

}

console.log(fibonacci(15));
console.log(fibonacciRec(15));