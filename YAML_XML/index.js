import express, { json } from "express";
import cors from "cors";
import { objectToXml } from "js-object-to-xml";
import YAML from "yaml";
import chalk from "chalk";

const app = express();
app.use(cors());
app.use(json());

//Serialização: objeto JavaScript ⇒ XML
const objJS = {
  nome: "Ananias",
  idade: 20,
  endereco: {
    rua: "Vergueiro",
    cidade: "São Paulo",
  },
  telefones: ["91234-5678", "98765-4321"],
};

const object = {
  item: {
    foo: "Lorem",
    bar: "Ipsum",
  },
};

const xml = objectToXml(object);
const ananiasXML = objectToXml(objJS);

console.log(chalk.green(chalk.green("Serialização: objeto JavaScript ⇒ XML")));
console.log(xml);

//Serialização: objeto JavaScript ⇒ YAML

const yaml = YAML.stringify(object);

const ananiasYAML = YAML.stringify(objJS);

console.log(chalk.green("Serialização: objeto JavaScript ⇒ YAML"));
console.log(yaml);

//Comparando
console.log(chalk.blue("Comparando ⇒ JSON"));
console.log(JSON.stringify(objJS));
console.log(chalk.blue("Comparando ⇒ XML"));
console.log(ananiasXML);
console.log(chalk.blue("Comparando ⇒ YAML"));
console.log(ananiasYAML);

app.listen(5000, () => {
  "Servidor funcionando na porta 5000!";
});
