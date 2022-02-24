let elemento = document.getElementById('idcorpo');
let cards = document.getElementById('idcards');
let nome = document.getElementById('idnome');
let texto = document.getElementById('idtexto');
let registros = document.getElementById('registros');
let del = document.getElementById('deletarB');
let edit = document.getElementById('editarB');
let enviar = document.getElementById('idenviar');


enviar.addEventListener('click', function(evento) {
    evento.preventDefault();
    let novaEntrada = document.createElement('div');
    novaEntrada.classList.add('cedula');

    let novoNome = document.createElement('span');
    let novoMensagem = document.createElement('span');
    novoNome.classList.add('nomeRelativo');
    novoMensagem.classList.add('mensagemRelativo');

    let botaoApagar = document.createElement('button');
    let botaoEditar = document.createElement('button');
    botaoApagar.innerText = 'Deletar';
    botaoApagar.classList.add('apagar');
    botaoEditar.innerText = 'Editar';
    botaoEditar.classList.add('editar');
    botaoApagar.addEventListener('click', Apagar);
    botaoEditar.addEventListener('click', Editar);

    novoNome.innerText = nome.value;
    novoMensagem.innerText = texto.value;
    novaEntrada.appendChild(botaoApagar);
    novaEntrada.appendChild(botaoEditar);
    novaEntrada.appendChild(novoNome);
    novaEntrada.appendChild(novoMensagem);
    registros.appendChild(novaEntrada);
});


function Editar(evento) {
    let botaoConfirmar = document.createElement('button');
    botaoConfirmar.innerText = 'Confirmar';
    evento.target.parentNode.appendChild(botaoConfirmar);
    botaoConfirmar.addEventListener('click', Confirmar);
    let nomeRelativo = evento.target.parentNode.querySelector('.nomeRelativo');
    let mensagemRelativo = evento.target.parentNode.querySelector('.mensagemRelativo');
    let valorAntigoNome = nomeRelativo.innerText;
    let valorAntigoMensagem = mensagemRelativo.innerText;
    let inputNome = document.createElement('input');
    let inputMensagem = document.createElement('textarea');
    inputNome.value = valorAntigoNome;
    inputMensagem.value = valorAntigoMensagem;
    nomeRelativo.innerText = '';
    mensagemRelativo.innerText = '';
    nomeRelativo.appendChild(inputNome);
    mensagemRelativo.appendChild(inputMensagem);
}

function Confirmar(evento) {
    let nomeRelativo = evento.target.parentNode.querySelector('.nomeRelativo');
    let mensagemRelativo = evento.target.parentNode.querySelector('.mensagemRelativo');
    let valorNovoNome = nomeRelativo.firstChild.value;
    let valorNovoMensagem = mensagemRelativo.firstChild.value;
    nomeRelativo.innerText = valorNovoNome;
    mensagemRelativo.innerText = valorNovoMensagem;
    evento.target.remove();
}

function Apagar(evento) {
    evento.target.parentNode.remove();
}

function ApagarTudo(evento) {
    Array.from(registros.children).forEach(element => {
        element.remove();
    });
}



