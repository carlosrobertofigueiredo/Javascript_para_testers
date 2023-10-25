/* Exercicio 2 - Estrutura de decisão

Percorrer uma lista de cidades
Contendo: ['São Paulo', 'Rio de Janeiro', 'Florianopolis', 'Recife']
Para cada item, verificar se a cidade Florianópolis está prsente na lista
Printar nome da cidade
Caso esteja, avisar
Caso não seja o elemento procurado, avisar
Número de execução

Execução 1
Cidades: São Paulo
Encontrado / Encontrado
-----------------------
*/

const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife'];

cidades.forEach((cidades, indice) => {
    console.log('Execução: ', indice + 1);
    console.log('Cidade: ', cidades);

    if (cidades == 'Florianópolis') {
        console.log('Encontrado!');
    } else {
        console.log('Não encontrado!');
    };
    console.log('-----------------------------');
});
