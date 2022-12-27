function myFunction() {
    var x = document.getElementById('conteudo-caixa-1');
    var y = document.getElementById('conteudo-caixa-2');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      y.style.display = 'none';
    } else {
      x.style.display = 'none';
      y.style.display = 'block'
    }
  }

  function copiarTexto() {
    let textoCopiado = document.getElementById("text-caixa");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}