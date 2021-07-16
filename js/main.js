// alert('Далее будет предлагаться ввести два числа для их подальшего сравнения');
// let num1 = parseInt(prompt('Введите первое число: '));
// let num2 = parseInt(prompt('Введите второе число: '));

// if (num1 > num2) {
//     let sum = num1 + num2;
//     alert(`Сумма чисел: ${sum}`);
// } else if (num1 < num2) {
//     let proizvod = num1 * num2;
//     alert(`Произведение чисел: ${proizvod}`);
// } else {
//     alert('Числа одинаковые');
// }

let $num1 = document.querySelector('#num1');
let $num2 = document.querySelector('#num2');
let $start = document.querySelector('#start');
let $result = document.querySelector('#result');


$start.addEventListener('click', comparison);

function comparison() {
    let n1 = parseInt($num1.value);
    let n2 = parseInt($num2.value);

    if (n1 > n2) {
            let sum = n1 + n2;
            $result.innerHTML = "Сумма = " + sum;
        } else if (n1 < n2) {
            let proizvod = n1 * n2;
            $result.innerHTML = "Произведение = " + proizvod;
        } else {
            $result.innerHTML = "Числа одинаковые.";
        }
}
