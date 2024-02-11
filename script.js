function calc() {
    const arithOperat = prompt("Оберіть арифметичну операцію: add, sub, mult, div");
    let result = '';
    if (arithOperat === 'add' || arithOperat === 'sub' || arithOperat === 'mult' || arithOperat === 'div') {
        const numberOne = +prompt("Введіть перше число:");
        const numberTwo = +prompt("Введіть друге число:");
        if (!isNaN(numberOne) && !isNaN(numberTwo)) { 
            if (arithOperat === 'add') {
                result = `"${numberOne} + ${numberTwo} = ${numberOne + numberTwo}"`;
            }
            if (arithOperat === 'sub') {
                result = `"${numberOne} - ${numberTwo} = ${numberOne - numberTwo}"`;
            }
            if (arithOperat === 'mult') {
                result = `"${numberOne} * ${numberTwo} = ${numberOne * numberTwo}"`;
            }
            if (arithOperat === 'div') {
                if (numberTwo !== 0) { 
                    result = `"${numberOne} / ${numberTwo} = ${numberOne / numberTwo}"`;
                } else {
                    result = "На 0 ділити не можна";
                }
            }
        } else {
            result = "Одне або обидва введені значення не є числами";
        }
        alert(result);
    } else {
        alert("Ви ввели не коректні дані");
    }
}

calc();
