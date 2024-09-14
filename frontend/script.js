document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
  
    const pessoa = {
      nome: nome,
      cpf: cpf,
      telefone: telefone
    };
  
    fetch('http://localhost:3000/pessoas', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pessoa)
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensagem').innerText = 'Cadastro realizado com sucesso!';
      document.getElementById('cadastroForm').reset(); 
    })
    .catch(error => {
      document.getElementById('mensagem').innerText = 'Erro ao cadastrar: ' + error.message;
    });
  });