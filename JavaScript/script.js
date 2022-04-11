// Base dos cálculos:
// Carne - 400 gr por pessoa  + de 6 horas - 600
// Cerveja - 1200 ml por pessoa  + 6 horas - 1800 ml
// Refrigerante/água - 1000 ml por pessoa  + 6 horas 1600 ml

// crianças valem por 0,5

// Início:

// pegando os elementos HTML
let adultos = document.getElementById('adultos');
let crianças = document.getElementById('crianças');
let tempo = document.getElementById('tempo');
let calculo = document.getElementById('calculo');

// função que calcule a quantidade de carne
function calcCarne() {
    let carne = tempo.value > 6 ? 600 : 400;
    let calcA = carne * adultos.value * tempo.value;
    let calcC = (carne * crianças.value * tempo.value) / 2;
    let resultado = calcA + calcC;
    // colocando uma li com o resultado dentro da ul
    let lista = document.createElement('li');
    let texto = document.createTextNode(
        'Carne -' + ' ' + resultado + ' ' + 'gr'
    );
    lista.appendChild(texto);
    document.getElementById('lista').appendChild(lista);
}
// função que calcule a quantidade de cerveja
function calcCerveja() {
    let cerveja = tempo.value > 6 ? 1800 : 1200;
    let calcA = cerveja * adultos.value * tempo.value;
    // colocando uma li com o resultado dentro da ul
    let lista = document.createElement('li');
    let texto = document.createTextNode('Cerveja -' + ' ' + calcA + ' ' + 'ml');
    lista.appendChild(texto);
    document.getElementById('lista').appendChild(lista);
}
// função que calcule a quantidade de refrigerante/água
function calcRefri_agua() {
    let refri_agua = tempo.value > 6 ? 1600 : 1000;
    let calcA = refri_agua * adultos.value * tempo.value;
    let calcC = (refri_agua * crianças.value * tempo.value) / 2;
    let resultado = calcA + calcC;
    // colocando uma li com resultado dentro da ul
    let lista = document.createElement('li');
    let texto = document.createTextNode(
        'Refrigerante/Água -' + ' ' + resultado + ' ' + 'ml'
    );
    lista.appendChild(texto);
    document.getElementById('lista').appendChild(lista);
}
// função onde tudo será calculado de uma vez só
function calcTodos() {
    // adicionando um título para lista
    let titulo = document.createElement('h2');
    let textoT = document.createTextNode('Quantidade necessária de:');
    titulo.appendChild(textoT);
    document.getElementById('lista').appendChild(textoT);
    // executando todas as funções
    calcCarne();
    calcCerveja();
    calcRefri_agua();
    // adicionando um aviso ao final da lista
    let lista = document.getElementById('lista').innerHTML;
    lista +=
        '<br>' +
        '<li>' +
        'OBS: Jamais permita que um menor de idade faça uso de bebidas alcóolicas.';
    document.getElementById('lista').innerHTML = lista;
}
// função para resetar a lista de itens
function resetar() {
    let lista = document.getElementById('lista');
    lista = location.reload();
}
