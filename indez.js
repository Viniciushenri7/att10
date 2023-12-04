let num1 = Number(prompt('digite o primeiro numero'));
let num2 = Number(prompt('Digite o segundo numero'));
let total = 0;

if (num1 % 2 != 0 && num2 % 2 != 0 && num1 != num2) {

    for (let index = num1; index <= num2; index++) {

        if (index % 2 != 0) 
            total += index;
    }
    alert(total)
} else {
    alert('Digite o primeiro numero menor que o segundo numero ')
}
