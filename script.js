function appendSymbol(symbol) {
    var result = document.getElementById('result');
    result.value += symbol;
}

function clearResult() {
    var result = document.getElementById('result');
    result.value = '';
}

function deleteLast() {
    var result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    var result = document.getElementById('result');
    var expression = result.value;
    try {
        var calculatedResult = eval(expression);
        result.value = calculatedResult;
    } catch (error) {
        result.value = 'Error';
    }
}

function calculateLog() {
    var result = document.getElementById('result');
    var value = parseFloat(result.value);
    if (value > 0) {
        result.value = Math.log(value);
    } else {
        result.value = 'Error';
    }
}

function calculatePower() {
    var result = document.getElementById('result');
    var values = result.value.split('^');
    if (values.length === 2) {
        var base = parseFloat(values[0]);
        var exponent = parseFloat(values[1]);
        result.value = Math.pow(base, exponent);
    } else {
        result.value = 'Error';
    }
}

function calculateSin() {
    var result = document.getElementById('result');
    var angle = Math.PI/180*parseFloat(result.value);
    result.value = Math.sin(angle);
}

function calculateCos() {
    var result = document.getElementById('result');
    var angle = Math.PI/180*parseFloat(result.value);
    result.value = Math.cos(angle);
}

function calculateTan() {
    var result = document.getElementById('result');
    var angle = Math.PI/180*parseFloat(result.value);
    result.value = Math.tan(angle);
}
document.addEventListener("contextmenu", (event) => {
           event.preventDefault();
        });
