/*
Exercício #01:
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos.
*/
console.log('============Exercício 1============')
function transformarEmHorarioFormatado(sec){
    hour = Math.floor(sec / (60*60))
    resto = sec % (60*60)
    mins = Math.floor(sec / 60)
    resto %= 60
    sec = Math.ceil(resto)
    console.log(hour + ":" + mins + ":" + sec)
}
transformarEmHorarioFormatado(1569)


/*
Exercício #02:
Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], [25,50], [50,75], [75,100]) este valor se encontra. Obviamente se o valor não estiver em nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.

O símbolo ( representa "maior que". Por exemplo:
[0,25]  indica valores entre 0 e 25.0000, inclusive eles.
(25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

Entrada
O arquivo de entrada contém um número qualquer (inteiro ou decimal).

Saída
A saída deve printar o intervalo que o valor está.
*/

console.log('============Exercício 2============')
let valor = 101

if(valor >= 0 & valor <= 25 ){
    console.log('Valor entre 0 e 25 incluindo ambos')
}else if(valor > 25 & valor <= 50){
    console.log('Valor acima de 25 e até 50')
}else if(valor > 50 & valor <= 75){
    console.log('Valor acima de 50 e até 75')
}else if(valor > 75 & valor <= 100){
    console.log('Valor acima de 75 e até 100')
}else{
    console.log('Fora de intervalo')
}


/*
Exercício #03:
Joaozinho quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem, ao utilizar um automóvel que faz 12 KM/L. Para isso, ele gostaria que você o auxiliasse através de um simples programa. Para efetuar o cálculo, deve-se fornecer o tempo gasto na viagem (em horas) e a velocidade média durante a mesma (em km/h). Assim, pode-se obter distância percorrida e, em seguida, calcular quantos litros seriam necessários. Aproxime o valor para cima.
Entrada
O arquivo de entrada contém dois inteiros. O primeiro é o tempo gasto na viagem (em horas) e o segundo é a velocidade média durante a mesma (em km/h).

Saída
Imprima a quantidade de litros necessária para realizar a viagem, com o valor aproximado para cima.
*/


console.log('============Exercício 3============')
let horas = 9
let velocidadeMedia = 13.6
function quantidadeLitros(a, b) {
    distancia = (a * b) / 12
    litros = Math.ceil(distancia)
    console.log(litros)
}
quantidadeLitros(horas, velocidadeMedia)