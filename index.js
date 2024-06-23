document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('factorForm').addEventListener('submit', function (event) {
        event.preventDefault();

        let number = parseInt(document.getElementById('number').value);

        if (isNaN(number) || number <= 0) {
            alert('Please enter a valid positive number.');
            return;
        }

        let factors = findFactors(number);
        displayFactors(factors);
    });
});

function findFactors(number) {
    let factors = [];

    for (let i = 1; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0) {
            factors.push(i);
            if (i !== number / i) {
                factors.push(number / i);
            }
        }
    }

    factors.sort(function (a, b) {
        return a - b;
    });

    return factors;
}

function displayFactors(factors) {
    let factorResult = document.getElementById('factorResult');
    factorResult.innerHTML = '';

    if (factors.length === 0) {
        factorResult.innerHTML = '<p>No factors found.</p>';
        return;
    }

    let factorsHTML = '<p>Factors:</p><ul>';
    factors.forEach(function (factor) {
        factorsHTML += `<li>${factor}</li>`;
    });
    factorsHTML += '</ul>';

    factorResult.innerHTML = factorsHTML;
}
