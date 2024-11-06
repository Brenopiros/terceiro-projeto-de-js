//#1
let number = 1;
if (number % 2 === 0) {
console.log(`seu numero é ${number} e ele é par`);
}else{
console.log(`seu numero é ${number} e ele não é par`);
}


//#2
let ano = [2024, 2007]
if (ano[0]-ano[1] >= 18) {
  console.log('vc é maior de idade ');
} else {
  console.log('vc ainda é novato');
}

//#3

let nota = [10, 10]
if(((nota[0]+nota[1])/nota.length)>7){
  console.log('true');
  
}else{
  console.log('false');
  
}

//#4
let age = 17;
if (age >= 16) {
  console.log('vc já pode votar');
  
} else if(age >= 18){
  console.log('vc deve votar se não quiser perder o titulo');
  
}else{
  console.log('vc ainda não tem idade, quem sabe no ano que vem');
  
}

//#5
let variavel = [22, 13]
console.log(variavel[0]>variavel[1]? `o numero ${variavel[0]} é maior que ${variavel[1]}`: `o numero ${variavel[1]} é maior que ${variavel[0]}` );



//#6

let espediente = [10, 8, 6, 7, 9]

if ((espediente[0]+espediente[1]+espediente[2]+espediente[3]+espediente[4])> 40) {
  console.log('vc faz hora extra');
  
  
} else if ((espediente[0]+espediente[1]+espediente[2]+espediente[3]+espediente[4])< 40){
  console.log('vc vai  ter que compensar, trabalho menos do que o tempo esperado');
  
}else{
  console.log('vc está fazendo exatamente o tempo requisitado'); 

}


//#7

let tip = 55;
if (tip >= 10 && tip <= 50) {
  console.log(`seu numero é ${tip} e esta entre 10 e 50`);
  
} else {
  console.log(`seu numero é ${tip} e não esta entre 10 e 50`);
  
}

//#8


let vogal = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let word = 'ì';
const filtro = vogal.includes(word)
console.log(filtro);

//#9

let mes = 'fevereiro';
let ferias = ["janeiro", "junho", "dezembro"]
if (ferias.includes(mes)) {
  console.log('ferias');
  
} else {
  console.log('mes comum');
  
}

//#10

let pontuação = 9;
if(pontuação >= 9 && pontuação <= 10){
   console.log('excelente! Sua nota é A');
}else if(pontuação >= 8 && pontuação < 9){
  console.log('Parabens sua nota  é B');
}else if(pontuação >= 7 && pontuação < 8){
  console.log(' Sua nota foi C, não foi desta vez! Continue melhorando');
}else if(pontuação >= 6 && pontuação < 7){
  console.log('Sua nota foi D, melhore muito');
}else if(pontuação >= 5 && pontuação < 6){
  console.log('Sua nota foi E, não fique brincando e melhore muito');
}else{console.log('Sua nota é F, por favor leve a serio isso');}


//#11

let n1 = 10;
let n2 = 15;
let n3 = 20;

if (n1 > n2 && n1 > n3) {
  console.log('o primeiro numero é maior');
  
} else if(n2 > n1 && n2 > n3) {
  console.log('o segundo numero é maior');
  
}else{
  console.log('o terceiro numero é maior');
  
}

//#12

let nome = "Douglas";
let wd = nome.charAt(0);
if (wd >=  "A" && wd <= "Z"){
  console.log('sua letra tem maisculo');
  
} else if (wd >=  "a" && wd <= "z"){
  console.log('sua letra tem minusculo');
  
}


//#13

let temp = 15;
if (temp < 15) {
  console.log('a temperatura está fria');
  
}else if (temp >= 15 && temp <=30){
  console.log('a temperatura esta moderada');
  
}else{
  console.log('a temperatura está quente');
  
}

//#14

let data = 2024;
if(data % 4 === 0 && data % 100 !== 0 && data % 400 === 0){
  console.log('bissexto'); 
}else{
  console.log('não bissexto');
  
}


//#15

let num = [10, 15 ];
if (num[0] % 5 === 0 && num[1] % 5 === 0) {
  console.log(`o ${num[0]} e o ${num[1]} são divisiveis por 5`);
  
} else {
  console.log(`o ${num[0]} e o ${num[1]} não são divisiveis por 5`);
  
}

//#16

let semaforo = ['verde', 'vermelho', 'amarelo'];
let imput = 'vermelho';
if (semaforo[0] === imput) {
  console.log('seguir');
  
} else if(semaforo[1] === imput){
  console.log('parar');
  
}else{
  console.log('esperar');
  
}

//#17

let primo = 9;
if (primo % primo === 0 && primo % 2 !== 0 && primo % 3 !== 0 && primo<=100) {
  console.log(`numero é ${primo} e ele é primo`);
  
} else {
    console.log(`numero é ${primo} e não é primo`);
  
}


let n = 28; // Você pode mudar este número para testar outros
let sd = 0;

for (let i = 1; i < n; i++) {
    if (n % i === 0) {
        sd += i;
    }
}

if (sd === n) {
    console.log(n + " é um número perfeito.");
} else {
    console.log(n + " não é um número perfeito.");
}

//Exercícios com Arrays
//#1

console.log(Math.max(10, 15, 20, 13));

//#2
