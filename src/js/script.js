//let nome = document.querySelector('#name');


// 1. Pegar o ID no final da URL
const url = window.location.href;
const id = url.substring(url.lastIndexOf('=') + 1);
console.log('ID capturado:', id);

// 2. Buscar no JSON
fetch('src/json/dados.json')
  .then(res => res.json())
  .then(data => {

    console.log(data);

    const pessoa = data.find(p => p.id === id);


    console.log(pessoa)

    if (!pessoa) {
      console.warn('Cadastro não encontrado!');
      document.getElementById('nome').textContent = 'Cadastro não encontrado.';
      return;
    }

    // Exibir primeiro nome
    const primeiroNome = pessoa.nomeCompleto.split(' ')[0];
    console.log(primeiroNome)
    document.getElementById('photo-profile').src = pessoa.photoProfile;
    document.getElementById('name').textContent = primeiroNome;

    // Exibir dados na página
    document.getElementById('full-name').textContent = pessoa.nomeCompleto;
    document.getElementById('birth').textContent = pessoa.dataNascimento;
    document.getElementById('mae').textContent = pessoa.responsaveis.mae;
    document.getElementById('pai').textContent = pessoa.responsaveis.pai;
    let phone1 = document.getElementById('phone1');
    phone1.href = pessoa.contatos[0];
    phone1.textContent = pessoa.contatos[0];
    
    document.getElementById('phone2').textContent = pessoa.contatos[1];
    document.getElementById('laudo').href = pessoa.linkLaudo;
  })
  .catch(err => console.error(err));

/*

fetch('src/json/dados.json')
  .then(res => res.json())
  .then(data => {
    const abel = data.find(p => p.nomeCompleto === 'Abel Martins Sousa');
    console.log(abel);
    const primeiroNome = abel.nomeCompleto.split(' ')[0];
    console.log(primeiroNome)
    nome.innerHTML = `${primeiroNome}`
  });
//nome.innerHTML = `${abel.nomeCompleto}` */