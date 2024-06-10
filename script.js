function calculatePermutation() {
    var n = parseInt(document.getElementById("n").value);
    var k = parseInt(document.getElementById("k").value);

    var resultField = document.getElementById("result");

    var result = factorial(n) / factorial(n - k);
    resultField.value = result;
}

function calculateCombination() {
    var n = parseInt(document.getElementById("n").value);
    var k = parseInt(document.getElementById("k").value);

    var resultField = document.getElementById("result");

    var result = factorial(n) / (factorial(k) * factorial(n - k));
    resultField.value = result;
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
