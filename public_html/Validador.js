var Pessoa = function(nome, ra , sexo ,idade, endereco , telefone ,email ) {
     this.nomejs =  nome;
     this.rajs=ra;
     this.sexojs=sexo;
     this.idadejs=idade;
     this.enderecojs= endereco;
     this.telefonejs=telefone;
     this.emailjs=email;
     
};

var teste = new Pessoa(nome, ra , sexo ,idade, endereco , telefone ,email)

function PegarDados(){
    
  
  //nome= document.forms["Cadastro"]["nome"].value;
  //ra= document.forms["Cadastro"]["ra"].value;
  sexo= document.forms["Cadastro"]["sexo"].value;
  //idade= document.forms["Cadastro"]["idade"].value;
  //endereco= document.forms["Cadastro"]["endereco"].value;
  //telefone= document.forms["Cadastro"]["nome"].value;
  //email= document.forms["Cadastro"]["nome"].value;
  
  
  
};

function Alerta(){
    alert(sexo);  
};

function salvaUsuário(){
    
}