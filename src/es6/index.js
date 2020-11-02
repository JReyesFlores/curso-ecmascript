function newFunction (name, age, country) {
    var name=name||'Jhon';
    var age=age||28;
    var country=country||'PE';

    console.log(name, age, country);
};

//es6
function newFunction2 (name='Jhon', age=28, country='PE') {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Javier', 27, 'PE');

let hello='Hello';
let world='world';
let epicPhrase=hello+' '+world;
console.log(epicPhrase);

let epicPhrase2=`${hello} ${world}`; //es6

let lorem='Qui sonceisd dadquetiman situamn nodel porak citus. \n'+'otra frase...';
let lorem2=`demo frase 1 
otra frase`;

console.log(lorem);
console.log(lorem2); //es6

let person={
    'name': 'Jhon',
    'age': 28,
    'country': 'PE'
};
console.log(person.name, person.age);
let {name, age, country}=person; //es6
console.log(name, age, country);

let team1=['Jhon', 'Javier', 'Ricardo'];
let team2=['Valeria', 'Jessica', 'Diana'];
let education=['David', ...team1, ...team2]; //es6
console.log(education);

{
    var global='Global';
}

{
    let globalLet='globalLet';
    console.log(globalLet);
}

console.log(global);
//console.log(globalLet); //Solo accesible a la sección del código indicado (es6)


const a = 'b'; //es6