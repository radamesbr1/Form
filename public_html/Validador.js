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
    
  
  nome= document.getElementsByName(nome);
  ra= document.getElementsByName(ra);
  sexo= document.getElementsByName(sexo);
  idade= document.getElementsByName(idade);
  endereco= document.getElementsByName(endereco);
  telefone= document.getElementsByName(telefone);
  email=document.getElementsByName(email);
};

function Alerta(){
    
};