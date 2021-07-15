alert('Далее будет предлагаться ввести два числа для их подальшего сравнения');
let num1 = parseInt(prompt('Введите первое число: '));
let num2 = parseInt(prompt('Введите второе число: '));

if (num1 > num2) {
    let sum = num1 + num2;
    alert(`Сумма чисел: ${sum}`);
} else if (num1 < num2) {
    let proizvod = num1 * num2;
    alert(`Произведение чисел: ${proizvod}`);
} else {
    alert('Числа одинаковые');
}

