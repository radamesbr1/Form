
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
  ra: document.forms["Cadastro"]["ra"].value,
  sexo: document.forms["Cadastro"]["sexo"].value,
  idade: document.forms["Cadastro"]["idade"].value,
  endereco: document.forms["Cadastro"]["end"].value,
  telefone: document.forms["Cadastro"]["tel"].value,
  email: document.forms["Cadastro"]["email"].value
  };
  
    return pessoa;
};
function salvaAluno() {
  
    
    // pessoa = PegarDados();
    vetAluno.push(PegarDados());
    
  
    document.getElementById("Cadastro");
}

function mostrarPessoa(){
    alert( "Nome: " + pessoa.nome 
           +"RA: " + pessoa.ra           
          + "Sexo: " + pessoa.sexo  
          + "Idade: " + pessoa.idade
          + "Endereço : " + pessoa.endereco 
          + "Telefone : " + pessoa.telefone 
          + "Email : " + pessoa.email);/*"<
          ---------------------------- */
   

}