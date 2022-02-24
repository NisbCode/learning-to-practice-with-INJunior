/*
Nesse arquivo em anexo(gods.js) tem um array de objetos representando deuses do jogo Smite. 

    Q1. Imprima o nome e a quantidade de features de todos os deuses usando uma única linha de código. (Feito em aula)
*/
gods.forEach(god => console.log(`Nome: ${god.name} - Quant. de Features: ${god.features.length}`))




console.log('==========Deuses com papel de Mid==========')
//Q2. Imprima todos os deuses que possuem o papel de "Mid" (em aula)
let filtrados = gods.filter(god => god.roles.includes('Mid'))
console.log(filtrados)




console.log('==========Organizando por panteão==========')
//Q3. Organize a lista pelo panteão do deus.
let sorteados = gods.sort((a, b) => {
    if(a.pantheon < b.pantheon){
        return -1
    }else{
        return 1
    }
})
console.log(sorteados)




console.log('==========Por nome e Classe==========')
/*
Q4. Faça um código que retorne um novo array com o nome de cada deus e entre parênteses, a sua classe.
    Por exemplo, o array deverá ficar assim: ["Achilles (Warrior)", "Agni (Mage)", ...]
*/

let nomeClasse = gods.map(function(deus) {
    return `${deus.name} (${deus.class})`
})
console.log(nomeClasse)




console.log('==========Classe Hunter, Panteão Greek e Role Mid==========')

//Q5. Faça um código que retorne um novo array apenas com o(s) deus(es) que seja da classe "Hunter", do panteão "Greek" e possua a role "Mid".

let filtros = gods.filter(god => god.class.includes('Hunter') & god.pantheon.includes('Greek') & god.roles.includes('Mid'))
console.log(filtros)