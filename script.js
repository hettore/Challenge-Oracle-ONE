var resultado;
var x = document.getElementById('conteudo-caixa-1');
var y = document.getElementById('conteudo-caixa-2');

function temTexto() {
  var textoInserido = document.getElementById('texto-inserido').value;
  if (textoInserido == "") {
      x.style.display = 'block';
      y.style.display = 'none';
    } else {
        x.style.display = 'none';
        y.style.display = 'block';
    }
  }

function temCaracteresEspeciais() {

  textoInserido = document.getElementById('texto-inserido').value;
  
  const pattern = /[A-ZÀ-ü]/;
  if (textoInserido.match(pattern)) {
    alert("Por favor use somente letras minúsculas e sem acento!")
    document.getElementById('texto-inserido').value = "";
    x.style.display = 'block';
    y.style.display = 'none';
  }
  
}

function copiaTexto() {
  var textoCopiado = document.getElementById('text-caixa').textContent;
  navigator.clipboard.writeText(textoCopiado);
  alert("Copiado!");
  document.getElementById('texto-inserido').value = "";
}

function criptografa() {

  temTexto();
  temCaracteresEspeciais();

  textoInserido = document.getElementById('texto-inserido').value;
  resultado = textoInserido.replace(/e/gi, "enter")
                           .replace(/i/gi, "imes")
                           .replace(/a/gi, "ai")
                           .replace(/o/gi, "ober")
                           .replace(/u/gi, "ufat");
  document.getElementById('text-caixa').innerHTML = resultado;
}

function descriptografa() {

  temTexto();
  temCaracteresEspeciais();

  textoInserido = document.getElementById('texto-inserido').value;
  resultado = textoInserido.replace(/enter/gi, "e")
                           .replace(/imes/gi, "i")
                           .replace(/ai/gi, "a")
                           .replace(/ober/gi, "o")
                           .replace(/ufat/gi, "u");
  document.getElementById('text-caixa').innerHTML = resultado;
}

var copiar = document.querySelector("#copiarTexto");
copiar.onclick = copiaTexto;

var btnCriptografa = document.querySelector("#criptografa");
btnCriptografa.onclick = criptografa;

var btnDescriptografa = document.querySelector("#descriptografa");
btnDescriptografa.onclick = descriptografa;
