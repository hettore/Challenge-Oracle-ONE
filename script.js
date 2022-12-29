var resultado;

function myFunction() {
  var x = document.getElementById('conteudo-caixa-1');
  var y = document.getElementById('conteudo-caixa-2');
  if (document.getElementById('texto-inserido').value == "") {
      x.style.display = 'block';
      y.style.display = 'none';
    } else {
        x.style.display = 'none';
        y.style.display = 'block';
    }
}

function copiarTexto() {
  var textoCopiado = document.getElementById('text-caixa').textContent;
  //var campoTexto = document.getElementById('texto-inserido').value;
  navigator.clipboard.writeText(textoCopiado);
  // textoCopiado.setSelectionRange(0, 99999);
  // document.execCommand("copy");
  alert("Copiado!");
  document.getElementById('texto-inserido').value = "";
}

function criptografa() {
  var textoInserido = document.getElementById('texto-inserido').value;
  resultado = textoInserido.replace(/e/gi, "enter")
                           .replace(/i/gi, "imes")
                           .replace(/a/gi, "ai")
                           .replace(/o/gi, "ober")
                           .replace(/u/gi, "ufat");
  document.getElementById('text-caixa').innerHTML = resultado;
  
}

function descriptografar() {
  textoInserido = document.getElementById('texto-inserido').value;
  resultado = textoInserido.replace(/enter/gi, "e")
                           .replace(/imes/gi, "i")
                           .replace(/ai/gi, "a")
                           .replace(/ober/gi, "o")
                           .replace(/ufat/gi, "u");
  document.getElementById('text-caixa').innerHTML = resultado;
}




