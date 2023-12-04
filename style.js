let quantidade = Number(prompt('Digite a quantidade de numeros'))
let soma = 0
let i = 0

while(i<quantidade){
    num = Number(prompt('Digite um numero'))
    soma += num
    i++
}
alert('Resultado da soma é ' + soma)