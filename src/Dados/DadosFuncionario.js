const form = document.getElementById('cadastroFuncionario');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const data = {
        nome: document.getElementById('nameFunc').value,
        cpf: document.getElementById('cpfFunc').value,
        senha: document.getElementById('passwordFunc').value
    };
    console.log(data);

    fetch('/apiendpoint', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(/*tratar as respostas do backend*/);
});