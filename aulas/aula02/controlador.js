const readline = require('readline-sync');
const contato = require ('./modelo');

const contatos = [{nome: "jose", telefone: "9999-9999"}];

function listar (){
  contatos.forEach(contato=> 
   console.log(contato.nome,'-', contato.telefone));
   readline.question ("precione enter para continuar");
}

function Criar (){
  const nome = 
    readline.question('informe o nome do contato');
  const telefone =
    readline.question('informe o telefone do contato');
  const novo = new contato(nome,telefone)
  contatos.push (novo);
  readline.question("precione enter para continuar");
}

function Buscar() {
  const nome = 
   readline.question("informe o nome do contato")
  const buscarContato = 
   contatos.find (contato => contato.nome === nome)
    if (buscarContato) {
     console.log (buscarContato,'-',
        buscarContato.telefone);
     } else {
       console.log ("contato não localizado");
     }
     readline.question ("pressione ENTER para continuar");
} 

function atualizar() {
 const nome = 
  readline.question("informe o nome do contato")
 const buscarContato = 
  contatos.find (contato => contato.nome === nome)
   if (buscarContato) {
     const telefone = 
     readline.question ("informe o novo telefone de contato:   ")
     buscarContato.telefone = telefone 
    } else {
      console.log ("contato não localizado");
    }
    readline.question ("pressione ENTER para continuar");
   }
   
function Remover () {
 const nome =
   readline.question ("informe o nome de contato")
  const posicao = contatos.findIndex (contato => contato.nome === nome);
  if (posicao >=0){
   contatos.splice(posicao, 1);
  } else {
    console.log ("contato não localizado")
  } 
  readline.question ("pressione ENTER para continuar");
} 

module.exports = {listar, Criar, Buscar, atualizar,Remover }
