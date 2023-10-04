//boolean
var vOuF = false;
console.log(typeof(vOuF))

//number
var numero = 1;
console.log(typeof(numero));

//string
var nome = 'marcio';
console.log(typeof(nome));

//function
var funcao = function(){}
console.log(funcao)

//var
var variavel;
console.log(typeof(variavel))
variavel = 'Tanan'
console.log(typeof(variavel))

//let
let variavel2 = 'Tanan';
variavel = 'Marcio';
console.log(variavel2);

//const
const constante = 'Tanan';
console.log(constante);


// escopo
var escopoGlobal = 'Global';
console.log(escopoGlobal)

function escopoLocal() {
  let escopoLocalInterno = 'Local';
  console.log(escopoLocalInterno);
}

escopoLocal();

// atribuição
var atribuição = 'Marcio'

//comparação
var comparação = '0' == 0;
console.log(comparação);

//comparação identica
var comparaçãoIdentica = '0' === 0;
console.log(comparaçãoIdentica);

//adição
var adicao = 1 + 1;
console.log(adicao);

//subtracao
var subtracao = 2 - 1;
console.log(subtracao)

//multiplicacao
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisao real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//divisao inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira)

//potenciação
var potenciação = 2 ** 10;
console.log(potenciação);

// maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual a
var maiorOuIgual = 5 >= 2;

//menor ou igual a
var menorOuIgual = 5 <= 2;

// e &&
var e = true && true;
console.log(e);

// ou ||
var ou = false || false;
console.log(ou);

// nao !
var nao = !true;
console.log(nao);

