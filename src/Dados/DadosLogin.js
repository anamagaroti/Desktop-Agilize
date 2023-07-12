const form = document.getElementById("loginFuncionario");

form.addEventListener('submit', function(event){
    event.preventDefault();

    const data = {
        cpf: document.getElementById('cpf').value,
        senha: document.getElementById('password').value
    };

    console.log(data);
    
    fetch('/nomeendpoint', {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(/*tratar resposta do backend*/);
});