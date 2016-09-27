
var vetAluno = [];

var Pessoa = function(nome, ra , sexo ,idade, endereco , telefone ,email ) {
     this.nomejs =  nome;
     this.rajs=ra;
     this.sexojs=sexo;
     this.idadejs=idade;
     this.enderecojs= endereco;
     this.telefonejs=telefone;
     this.emailjs=email;
     
};

var pessoa = new Pessoa(nome, ra , sexo ,idade, endereco , telefone ,email);

function PegarDados(){
    
  
  
  pessoa = {
  nome: document.forms["Cadastro"]["nome"].value,
  //ra: document.forms["Cadastro"]["ra"].value,
  //sexo: document.forms["Cadastro"]["sexo"].value,
  //idade: document.forms["Cadastro"]["idade"].value,
  //endereco: document.forms["Cadastro"]["endereco"].value,
  //telefone: document.forms["Cadastro"]["nome"].value,
  //email: document.forms["Cadastro"]["nome"].value
  };
  
    return pessoa;
};
function salvaAluno() {
  
    
    var pessoa = PegarDados();
    vetAluno.push(pessoa);
  
    document.getElementById("Cadastro");
}

function mostrarPessoa(){
    alert( "Nome: " + pessoa.nome );
           /*"RA: " + pessoa.ra + "<br/>"
          + "Sexo: " + pessoa.sexo + "<br/>"
          + "Idade: " + pessoa.idade + "<br/>"
          + "Endereço : " + pessoa.endereco + "<br/>"
          + "Telefone : " + pessoa.telefone + "<br/>" 
          + "Email : " + pessoa.email + "<br/>" +
          "---------------------------- <br/>*/

}