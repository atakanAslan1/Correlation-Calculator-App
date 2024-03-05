const calculateCorrelation = (x, y) => {
    if (x.length !== y.length) {
        throw new Error('Input arrays must have the same length');
    }

    const n = x.length;
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumX2 = 0;
    let sumY2 = 0;

    for (let i = 0; i < n; i++) {
        sumX += x[i];
        sumY += y[i];
        sumXY += x[i] * y[i];
        sumX2 += x[i] ** 2;
        sumY2 += y[i] ** 2;
    }

    const numerator = n * sumXY - sumX * sumY;
    const denominator = Math.sqrt((n * sumX2 - sumX ** 2) * (n * sumY2 - sumY ** 2));
    const correlation = numerator / denominator;

    return correlation;
}
const clear = () => {
    xValue.value = '';
    yValue.value = '';
    result.innerText = '';
}
const xValue = document.getElementById('x');
const yValue = document.getElementById('y');
const calculateButton = document.getElementById('calculate');
const result = document.getElementById('result');
const clearButton = document.getElementById('clear');
const body = document.querySelector('body');


calculateButton.addEventListener('click', () => {
    const x = xValue.value.split(',').map(Number);
    const y = yValue.value.split(',').map(Number);
    const correlation = calculateCorrelation(x, y);
    result.innerText = `Correlation: ${correlation}`;
});

body.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            calculateButton.click();
        }

    });

clearButton.addEventListener('click', clear);








