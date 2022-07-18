//Serialização
const objetoJS = {
  name: "Dayane",
  email: "dayane@gmail.com",
  number: 1,
};

const stringJSON = JSON.stringify(objetoJS);
const poc_1 = document.querySelector(".poc_1");
poc_1.innerHTML = stringJSON;
console.log(typeof stringJSON);

//Desserialização
const objJS = JSON.parse(stringJSON);
const poc_2 = document.querySelector(".poc_2");
poc_2.innerHTML = objJS;
console.log(typeof objJS);
console.log(objJS);

//Serialização de uma função

const objFunction = {
  nome: "Ananias",
  idade: 20,
  endereco: {
    rua: "Vergueiro",
    cidade: "São Paulo",
  },
  telefones: ["91234-5678", "98765-4321"],
  "calcula-ano-nascimento": function () {
    //obtem ano atual
    var anoAtual = new Date().getFullYear();
    return anoAtual - this.idade;
  },
};
const stringJSONFunction = JSON.stringify(objFunction);
const poc_3 = document.querySelector(".poc_3");
poc_3.innerHTML = stringJSONFunction;
console.log(typeof stringJSONFunction);
