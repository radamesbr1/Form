
var vetAluno = [];


//var pessoa = new Pessoa(nome, ra , sexo ,idade, endereco , telefone ,email);

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
  
    
    var pessoa = PegarDados();
        vetAluno.push(pessoa.nome,pessoa.ra,pessoa.sexo,pessoa.idade,pessoa.endereco,pessoa.telefone,pessoa.email);
        alert("Cadastrado com sucesso");
        //);
    
  
    document.getElementById("Cadastro");
}

function mostrarPessoa(){
   /* alert( "Nome: " + pessoa.nome 
           +"RA: " + pessoa.ra           
          + "Sexo: " + pessoa.sexo  
          + "Idade: " + pessoa.idade
          + "Endereço : " + pessoa.endereco 
          + "Telefone : " + pessoa.telefone 
          + "Email : " + pessoa.email);"<
          ---------------------------- */
    alert(vetAluno.length);
        var i=0;
        document.getElementById("mostra").innerHTML = "";
        while(i<vetAluno.length){
        document.getElementById("mostra").innerHTML += "<br>" 
                  +"Nome: " + vetAluno[i]+"<br>"
                  +"RA: " + vetAluno[i+1]+"<br>"           
                  + "Sexo: " + vetAluno[i+2]+"<br>"  
                  + "Idade: " + vetAluno[i+3]+"<br>"
                  + "Endereço : " + vetAluno[i+4] +"<br>"
                  + "Telefone : " + vetAluno[i+5] +"<br>"
                  + "Email : " + vetAluno[i+6];+"<br>"
                  
        
        i=i+7;
        }
}