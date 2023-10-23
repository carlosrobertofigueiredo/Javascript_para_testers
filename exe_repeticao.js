//Exercicio 1 - Estrutura de repetição

//Percorrer uma lista de nomes, contendo os nomes:
//Eduardo, Maria, Fernando, João, Francisco
//Número da execução, começando em 1
//Nome que está sendo executado
//Separadores

const pessoas = ['Eduardo', 'Maria', 'Fernando', 'João', 'Francisco'];

pessoas.forEach((pessoa, indice) => {
    console.log('Execução: ', + indice + 1)
    console.log('Nome:' + pessoa)
    console.log('----------------------')
})


/*
for (let indice = 1; indice < pessoas.length; indice++) {
    console.log('Número de Execução: ' + indice)
    console.log('Nome: ' + pessoas[indice])
    console.log('----------------------')
} */