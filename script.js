function calc () {
    const arithOperat = prompt("Оберіть арифметичну операцію: add, sub, mult, div");
    let result = '';
    if (arithOperat === 'add' || arithOperat === 'sub' || arithOperat === 'mult' || arithOperat === 'div') {
        const numberOne = +prompt("Введіть перше число:");
        if (typeof numberOne === 'number') {
            const numberTwo = +prompt("Введіть друге число:");
            if (typeof numberTwo === 'number') {
                if (arithOperat === 'add') {
                    result = `"${numberOne} + ${numberTwo} = ${numberOne + numberTwo}"`
                }
                if (arithOperat === 'sub') {
                    result = `"${numberOne} - ${numberTwo} = ${numberOne - numberTwo}"`
                }
                if (arithOperat === 'mult') {
                    result = `"${numberOne} * ${numberTwo} = ${numberOne * numberTwo}"`
                }
                if (arithOperat === 'div') {
                    result = `"${numberOne} / ${numberTwo} = ${numberOne / numberTwo}"`
                }
            }

        }
        alert(result);
    }
    else {
        alert("Ви ввели не коректні дані")
    }
}

calc();