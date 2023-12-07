/* FUNÇÕES
É um bloco de código projetado para executar uma tarefa específica.

É como uma máquina, entra uma coisa e sai outra

function soma (valor1,valor2){
     return valor1+valor2;
}

return é a saída da fábrica

*/


/*OBJETOS

São basicamente variáveis com muitos valores dentro

Os valores dentro do objeto são chamados de propriedades

Ex.: const car = {marca: "Ford", Modelo: "ka", ano: 2015}
*/


/*
Eventos são ações disparadas pela intreração do usuário na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas


Existem muitos evento. Veja os mais utilizados:

onclick -> Um clique do mouse
ondblclick -> Clique duplo do mouse
onmouseover -> Quando o mouse está sobre
onmouseout -> Quando o mouse é movido para fora
onmousemove ->
onmouseup ->
onfocus ->
oncharge -> 
onblur ->
onkeyup
onkeydown ->
onkeypress ->
onkeyup ->
onload ->
onresize ->

function EventClick0(){
    //print('Olá Mundo!')
    return document.body.style.backgroundColor = "blue"
}


function EventClick1(){
    return document.body.style.backgroundColor = "yellow"
    print('Você clicou duas vezes no botão')
}

function mouseover(){
    return document.body.style.backgroundColor = "green"
}

function mouseout(){
    return document.body.style.backgroundColor = "white"
}

function mouseover1(){
    return ("Olá Mundo!")
}
*/
//setTimeout e setInterval(funções de timer):
//Após algum tempo //(tempo em tempo)
//*Podemos com estas funções criar ações no software
// que executam depois de um tempo ou de tempos em
//tempos;

//*Um dos argumentos destas funções de um callback function

/*

Laço de repetição For

Oderecem um jeito fácil e rápido de executar uma ação
repitidas vezes.

for (Ponto inicial, condição) {
    o que vai acontecer dps da condição
}

*/

//for (let i = 0; i <= 1000; i++) {
//    document.getElementById("teste").innerHTML += i +", ";
//}

/*
var ano = new Date().getFullYear();

for (let i = ano; i >= 1900; i--){
    document.getElementById("ano").innerHTML +="<option value'"+i+"'>"+i+"</option>"
}

console.error("Fail")

console.warn("alerta")

console.log("%c Hello Word!", "color: green")

*/

var numero1 = document.getElementById("inputs1")

var numero2 = document.getElementById("inputs2")

function click(){
    document.getElementById("resultado").innerHTML(numero1 + numero2)
}

function mousecima1(){
    return document.getElementById("inputs1").innerHTML("Digite um número")
}

document.getElementById("inputs1").innerHTML(mousecima1)

/* Javascript Assíncrono

*Leva um tempo para ser executado, e 
pode ser bem sucedido ou não
*Chamadas para APIs
*Interações com banco de dados

*Há três maneiras de lidar com esse tipo de código

  *Callbacks
  *Promises
  *Promises com Async/Await

*/


//Código Callbacks
//Tudo que for colocado vai ser executado o tempo especificado depois
const loginUser = (email, passorwd, Callback) => {
  setTimeout(() => {
    console.warn("O usuário foi logado")
    Callback({ email });
}, 1500);
};

const user = loginUser('Emanuel@gmail.com','123414')

console.log({ user })
//Map, Filter & Reduce -- são métodos

/*MAP*/

//lista/array:
const number = [
  1,2,3,4,5,6,7
]
number.map//Vai executar uma função em cada item da lista e vai retornar uma nova lista com a função aplicada

const NumberMultiplieByTwo = number.map(function(number){
  return this.number * 2
})

//vai multiplicar todos os números multiplicados por 2

/*Filte*/

const ages = [12,43,65,32,,3,43,1,,3,2,]

ages.filter()//vai filtrar uma lista e retornar uma lista nova 
//baseada no filtro passado

const filtro = ages.filter(function(ages){
  return ages % 2 === 0  
})

/*Reduce*/


const Idades = [1,3,5,6,3,3,66,8,4]

Idades.reduce()//Utilizado para reduzir todos os valores de uma lista para um valor só

const soma = Idades.reduce(function(idade,accumulator){
  return accumulator + ages;

}, 0)

//------------------------------------------------------------------------------------

/*Conceito Trithy & Falsy*/

//!! usado para saber se é false or true

//Uma variável vazia sempre é: false

const i = '';
console.log(!!x); //retorno: false 

const y = 0 //Sempre é false

//null e undefined também são false

const list = []; //Sempre vai ser true
const object = {}; //Sempre vai ser true
//-------------------------------------------------------------------------------------------------------------------------
//Arrays:

var frutas = ["Maçã", "Banana"];

console.log(frutas.length);

push()//Adiciona um elemento no array
pop()//Remove o ultimo elemento do array
shift()//remove o primeiro elemento do array
unshift()//Adiciona ao início

console.log(frutas.shift())

//----------------------------------------------------------------------------------------------------------------------------

//Tipos de Dados:

/*Primitivos:*/ string, number, boolean, null, undefined, symbol.
/*Complexos:*/ object, array, function

//Estruturas de Controle:
/*if, else if, else
for, while, do...while
switch...case
*/

const q = 1;

while(q < 5)
{console.log("Oi"); 
q++
}
//-----------------------------------------------------------------------------------------------------------------------------


//FUNÇÕES:

//Tipos de funções em JavaScript são diferentes formas de criar e usar blocos de código para realizar 
//tarefas específicas. Temos dois principais tipos de funções:
//funções declaradas e
//funções expressas.

//1. Funções Declaradas
//As funções declaradas são definidas usando a palavra-chave `function` seguida por um nome e parâmetros. 
//Elas têm um formato assim:

function saudacao(nome) {
  return "Olá, " + nome + "!";
}

//2. Funções Expressas
//Atribui-se as funções expressas a variáveis e podem ser anônimas (sem nome) ou nomeadas. Por exemplo:

const saudacao1 = function(nome) {
  return "Olá, " + nome + "!";
};

//Aqui, a função é armazenada na variável `saudacao`. Você pode chamá-la da mesma forma que a 
//função declarada: `saudacao("Maria")`.


//A complexidade das funções varia. Funções simples fazem uma tarefa única, 
//enquanto funções complexas podem conter lógica elaborada.

//1. Arrow Functions
//Utilizam a sintaxe curta `() => {}`. Melhoram a legibilidade, especialmente para funções curtas. Por exemplo:

const saudacaoArrow = () => "Olá, arrow!";

//2. Funções Anônimas
//Usa-se em lugares específicos, como argumentos de outras funções. Por exemplo:

setTimeout(function() {

  console.log("Execução após intervalo de tempo");

}, 1000);

//4. Funções Imediatamente Invocadas (IIFE)
//Executadas imediatamente após sua definição. Úteis para encapsulamento. Por exemplo:

(function() {

  console.log("IIFE executada imediatamente");

})();

//5. Funções Construtoras
//Usadas para criar objetos. Começam com letra maiúscula. Por exemplo:

function Pessoa(nome) {

  this.nome = nome;

}

//6. Funções de Callback
//Passa-se como argumentos para outras funções. Comuns em operações assíncronas. Por exemplo:

const processarDados = (dados, callback) => {

  // Processamento dos dados

  callback();

};

processarDados(dados, () => {

  console.log("Dados processados com sucesso");

});


/*
call, apply e b


*/

/*
JavaScript Avançado

Nome oficial:ECMAScript

Let e cosnt:

Não user var, e sim let e const
-var só se limita a uma função

let: Usada para poder ser alterada mais tarde no código

const: não pode ser reatribuida mas pode ter seus valores alterados

*/

if(true){
    var exposta = "exposta";
    let nãoexposta = "Não exposta"
}

console.log(exposta, nãoexposta)

const variável = 12
 
variável = 14

variável(length)

//IIFF
(function (){
   const meuNome = "Emanuel"; //código
})();


const resultado = (function (){
   const meuNome = "Emanuel"; //código
})();

console.log(resultado)


//Caracterizada por estar encapsulada dentro
//de parenteses () e um parenteses de chamada no
//final ()
//A IIFE é caracterizada por envolver a função a
//ser executada entre parênteses e depois
//chamar a mesma com 

//For/Of loop

const listaDeEstados = ["RJ", "SP", "MG"];

let estado;

for(estado of listaDeEstados){
    console.log(estado + "É um estado brasiliro")
}

//Callbacks: 

const saudacao = nome => alert("Olá" + nome)

const processo = (Callback) => {

    const nome = prompt("Digite seu nome")
    Callback(nome)
}

processo(saudacao);


const Callback = e => alert("Aconteceu um evento" + e.type);

window.addEventListener('click', Callback)

//Callback é uma função que é usada como "callback". 
//Ela é tipicamente passada como argumento de outra fun
//ção e/ou chamada quando um evento for acontecido, ou 
//quando uma parte de código receber uma resposta de 
//que estava à espera.

/*As callbacks no JavaScript servem como
funções em argumentos, que serão executadas
após uma determinada ação
*/

//Prototypes:

class Pessoa{}

Pessoa.prototype.falar = function() {
    console.log()
}

const pedro = new Pessoa;

pedro.falar();

/**JSON
 
É uma forma de converter um objeto em texto e o contrário também


É usado para transmitir dados entre sistemas de forma simples
já que no formato texto é lido por praticamente todas linguagesn de programação


JSON.parse() -> Converte texto no padrão JSON em objetos

JSON.Stringify() -> Converte objetos em texto padrão JSON

  **/
 //OBJETO CARRO
const carro = {
  marca: 'Fiat',
  modelo: 'Uno',
  ano: 2003,
}

document.getElementById('area').innerHTML = carro

//-------------------------------------------------------------------------------------------------------------------------------------

/* Lista com boa parte dos métodos em javascrypt*/

//Métodos de String:


charAt()
charCodeAt()
concat()
includes()
indexOf()
lastIndexOf()
length()
match()
replace()
search()
slice()
split()
substr()
substring()
toLowerCase()
toUpperCase()
trim()


//Métodos de Array:


concat()
copyWithin()
entries()
every()
fill()
filter()
find()
findIndex()
forEach()
includes()
indexOf()
join()
keys()
lastIndexOf()
map()
pop()
push()
reduce()
reduceRight()
reverse()
shift()
slice()
some()
sort()
splice()
toString()
unshift()
values()


//Métodos de Objeto:


assign()
create()
defineProperty()
entries()
freeze()
fromEntries()
getOwnPropertyDescriptor()
getOwnPropertyDescriptors()
getOwnPropertyNames()
getOwnPropertySymbols()
getPrototypeOf()
hasOwnProperty()
is()
isExtensible()
isFrozen()
isSealed()
keys()
preventExtensions()
seal()
setPrototypeOf()
values()


//Promises

//-Vai representar eventual CONCLUSÃO ou FALHA de uma operação assincrona qualquer

//Pode estar: CONCLUÍDO, DENTRO DE UMA FALHA, OU PENDENTE
//-PEDING
//-FULFILLED ou RESOLVED
//-REJECT

//*É como um tratamento de erro



const UmaPromessa = new Promise((resolve, reject) => {
    let soma = 1 + 3
    if(soma ===2){
      resolve('Certo')
    }else {
      reject('Errado')}
})

//then é quando a função promisse foi resolvida
UmaPromisse.then((resultado => {
    console.log(resultado)
}).catch((erro) => {
    console.error("valor de catch")
}).finally(() => {
    console.log("Sempre irá aparecerr independete do resultado")
}))


//Promisse.All() e Promisse.race()

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {resolve('promisse 1 resolvida')}, 1000) 
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {resolve('promisse 2 resolvida')}, 500) 
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {resolve('promisse 3 resolvida')}, 100)
});


//Ele vai resolver todas essas promises e depois vai para o .then

Promise.all([promise1, promise2, promise3]).then((messages) => {
  console.log(messages)
})

//A primeira ou a com menos delay ganha, no caso a promise3
Promise.race( [promise1,promise2,promise3] ).then((message) => {
  console.log(message)
})

/*existem as Promises, ou, literalmente, promessas. O sentido de Promise em JavaScript é similar ao literal: Uma 
pessoa te passa o contato do Telegram e pede para que você mande uma mensagem pra ela, prometendo que vai responder... 
O que não temos como saber se vai acontecer.*/ 


//Async/ Await

//Revisão Assíncrona: um código após o outro
//Conseguimos controlar esse assincronismo com o Async e o Await 

//OBS.: event loop o java script da uma passada em todo o código e depois ele volta tudo de novo para ver se  tem mais alguma coisa

//Async: estamos dizendo que algo é assíncrono

//Para o await funcionar ele tem que estar dentro de uma função Async

//Para o Async funcionar temos que esta lidando com códigos assíncronos
//Algum dos códigos ou todos os condigos dentro da função são assíncronos

//Sincrona: No mesmo tempo

//Assíncrona: Tempos diferente

const UmSegundo = new Promise((resolve, reject) => {
  setTimeout(() => {resolve('promisse 1 resolvida')}, 1000) 
});

const MeioSegundo = new Promise((resolve, reject) => {
  setTimeout(() => {resolve('promisse 2 resolvida')}, 500) 
});

const UmMiliSegundo = new Promise((resolve, reject) => {
  setTimeout(() => {resolve('promisse 3 resolvida')}, 100)
});
//Para o await funcionar ele tem que estar dentro de uma função assíncrona


const resolvedoraDePromises = async () => {
    const resultado1 = await UmSegundo();  
    const resultado2  = await MeioSegundo();
    const resultado3  = await UmMiliSegundoSegundo();
  
}

//Clousures

/*Uma closure é a combinação de uma função com as referências ao estado que a circunda 
(o ambiente léxico). Em outras palavras, uma closure lhe dá acesso ao escopo de uma função 
externa a partir de uma função interna. Em JavaScript, as closures são criadas toda vez que 
uma função é criada, no momento da criação da função.*/

//Exemplo:
function init() {
  var name = "Mozilla"; // name é uma variável local criada pelo init
  function displayName() {
    // displayName() é a função interna, uma closure
    console.log(name); // usa a variável declarada na função pai
  }
  displayName();
}
init();
//Só exibe o numero maior:

let InputNum1 = prompt
let InputNum2 = prompt

if (InputNum1 < InputNum2){console.log(InputNum1)}else{InputNum2};