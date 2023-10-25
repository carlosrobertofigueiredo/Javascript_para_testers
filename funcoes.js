// Funções
// Precisa chamar
// Pode ou não receber parâmetros
// Pode ou não retornar dados

/* function gerarNome() {
    const nome = 'Eduardo'
    const sobrenome = 'Finotti'
    const idade = 30

    console.log('Nome: ', nome + ' ' + sobrenome)
    console.log('Idade:', idade)
    */

/* function gerarNome(nome, sobrenome, idade) {


    console.log('Nome: ', nome + ' ' + sobrenome)
    console.log('Idade:', idade)

}

gerarNome('Luiz', 'da Silva', 18)

gerarNome('Fernando', 'Ferreira', 45)
*/

//Função que retorna dados
function gerarNome(nome, sobrenome) {

    return 'Nome: ' + nome + sobrenome

}

//console.log(gerarNome('Joca', 'da Silva'))

const nomeGerado = gerarNome('Pedro', ' Carvalho')

console.log(nomeGerado)