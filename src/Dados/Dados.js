const fileInput = document.getElementById('photos');

        document.getElementById('cadastroAssociado').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const associadoData = {
            nome: document.getElementById('name').value,
            telefone: document.getElementById('tel').value,
            email: document.getElementById('email').value,
            cpf: document.getElementById('cpf').value,
            sexo: document.querySelector('input[name="sexo"]:checked').value,
            rg: document.getElementById('rg').value,
            dataNascimento: document.getElementById('dateBorn').value,
            endereco: document.getElementById('address').value,
            bairro: document.getElementById('neighborhood').value,
            numero: document.getElementById('number').value,
            uf: document.getElementById('uf').value,
            cep: document.getElementById('cep').value,
            cnh: document.getElementById('cnh').value,
            validade: document.getElementById('validade').value,
            categoria: document.getElementById('category').value,
            primeiraHabilitacao: document.getElementById('firstLicense').value,
            nacionalidade: document.getElementById('nationality').value
        };
    
        fetch('/cadastrar-associado', {
            method: 'POST',
            body: JSON.stringify(associadoData),
            headers: {
              'Content-Type': 'application/json'
            }
        }).then(/* Tratar a resposta do backend */);
    
        const formData = new FormData();
    
        formData.append('marca', document.getElementById('brand').value);
        formData.append('versao', document.getElementById('version').value);
        formData.append('combustivel', document.getElementById('fuel').value);
        formData.append('nf', document.getElementById('nf').value);
        formData.append('placa', document.getElementById('plate').value);
        formData.append('ano', document.getElementById('year').value);
        formData.append('modelo', document.getElementById('model').value);
        formData.append('nPortas', document.getElementById('numberDoors').value);
        formData.append('cor', document.getElementById('color').value);
        formData.append('renavam', document.getElementById('renavam').value);
        formData.append('chassi', document.getElementById('chassi').value);
        formData.append('cFipe', document.getElementById('fipeCode').value);
        formData.append('valorFipe', document.getElementById('fipeValue').value);
        formData.append('nacionalidadeVeiculo', document.getElementById('vehicleNationality').value);
    
        console.log(formData);

        // Adicionar cada arquivo selecionado ao FormData
        for (let i = 0; i < fileInput.files.length; i++) {
          formData.append('photos', fileInput.files[i]);
        }
    
        // Enviar o FormData para a sua API
        fetch('/cadastrar-veiculo', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          // Tratar a resposta da API
          console.log(data);
        })
        .catch(error => {
          // Tratar erros de requisição
          console.error(error);
        });
}); 


